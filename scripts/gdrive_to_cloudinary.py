#!/usr/bin/env python3
"""
gdrive_to_cloudinary.py
========================
Imports photos from a **public** Google Drive folder into Cloudinary,
then saves metadata to MongoDB via the Next.js API.

Uploads directly from Drive download URLs → Cloudinary (no local disk needed).
Handles folders with any number of files by using pagination.

Requirements:
    pip install cloudinary requests

Setup (one-time – 2 minutes):
    1. https://console.cloud.google.com/ → New Project
    2. APIs & Services → Enable "Google Drive API"
    3. Credentials → Create API key → copy it
    4. export GOOGLE_DRIVE_API_KEY="AIza..."
    5. python3 scripts/gdrive_to_cloudinary.py

Usage:
    python3 scripts/gdrive_to_cloudinary.py
    python3 scripts/gdrive_to_cloudinary.py --folder FOLDER_ID
    python3 scripts/gdrive_to_cloudinary.py --category ac
    python3 scripts/gdrive_to_cloudinary.py --dry-run   # list only, no upload
"""

import os
import sys
import json
import argparse
import time
import re
from pathlib import Path

# ── CONFIG ───────────────────────────────────────────────────────────────────

DEFAULT_FOLDER_ID     = "1VzbJ1VE1BD3-eCjclTcVWW7xfp0tFlRI"
GDRIVE_API_KEY        = os.getenv("GOOGLE_DRIVE_API_KEY", "")
CLOUDINARY_CLOUD_NAME = os.getenv("CLOUDINARY_CLOUD_NAME", "dbrgnwy5b")
CLOUDINARY_API_KEY    = os.getenv("CLOUDINARY_API_KEY",    "455156415257737")
CLOUDINARY_API_SECRET = os.getenv("CLOUDINARY_API_SECRET", "qqVUx6VWKD3l3DF5aSi3uiJsaag")
CLOUDINARY_FOLDER     = "icleaning/photos"
NEXTJS_API_URL        = os.getenv("NEXTJS_API_URL", "http://localhost:3000/api/gallery-photos")
UPLOAD_DELAY          = 0.5  # seconds between uploads (be gentle on free plan)

# Category auto-detection from Drive subfolder names and filenames
SUBFOLDER_CAT = {
    "ac cleaning": "ac", "blower": "ac", "coil": "ac", "filter": "ac",
    "diffuser": "ac", "drain": "ac", "duct": "ac", "grill": "ac", "motor": "ac",
    "carpet": "carpet", "rug": "carpet", "silk": "carpet", "wool": "carpet",
    "sofa": "sofa", "couch": "sofa", "leather": "sofa",
    "curtain": "curtains", "blind": "curtains", "roller": "curtains",
    "cleaning": "cleaning", "room": "cleaning", "window": "cleaning",
}


def detect_category(filename: str, parent_folder: str = "") -> str:
    for src in [parent_folder.lower(), filename.lower()]:
        for key, cat in SUBFOLDER_CAT.items():
            if key in src:
                return cat
    return "other"


# ── GOOGLE DRIVE API ─────────────────────────────────────────────────────────

def list_all_images(folder_id: str, api_key: str) -> list:
    """Recursively list every image file in a Drive folder (all pages)."""
    import requests
    found = []

    def _scan(fid, parent_name):
        page_token = None
        while True:
            params = {
                "q": f"'{fid}' in parents and trashed=false",
                "key": api_key,
                "fields": "nextPageToken,files(id,name,mimeType)",
                "pageSize": 1000,
            }
            if page_token:
                params["pageToken"] = page_token
            r = requests.get(
                "https://www.googleapis.com/drive/v3/files",
                params=params, timeout=15,
            )
            r.raise_for_status()
            data = r.json()
            for f in data.get("files", []):
                if f["mimeType"].startswith("image/"):
                    found.append({"id": f["id"], "name": f["name"], "folder": parent_name})
                elif f["mimeType"] == "application/vnd.google-apps.folder":
                    _scan(f["id"], f["name"])   # recurse into subfolder
            page_token = data.get("nextPageToken")
            if not page_token:
                break

    _scan(folder_id, "")
    return found


# ── CLOUDINARY ───────────────────────────────────────────────────────────────

def upload_from_drive_url(file_id: str, hint: str) -> dict:
    """Upload a Drive file directly to Cloudinary via its public download URL."""
    import cloudinary
    import cloudinary.uploader

    cloudinary.config(
        cloud_name=CLOUDINARY_CLOUD_NAME,
        api_key=CLOUDINARY_API_KEY,
        api_secret=CLOUDINARY_API_SECRET,
        secure=True,
    )

    url = f"https://drive.google.com/uc?id={file_id}&export=download"
    res = cloudinary.uploader.upload(
        url,
        folder=CLOUDINARY_FOLDER,
        public_id=hint[:40],
        overwrite=False,
        format="webp",
        quality=80,
        transformation=[{"width": 1200, "crop": "limit"}],
    )
    return {
        "url":      res["secure_url"],
        "publicId": res["public_id"],
        "width":    res.get("width", 1200),
        "height":   res.get("height", 800),
    }


# ── DB SAVE ──────────────────────────────────────────────────────────────────

def save_to_db(record: dict) -> bool:
    if not NEXTJS_API_URL:
        return False
    import requests
    try:
        r = requests.post(
            NEXTJS_API_URL,
            json=record,
            headers={"Content-Type": "application/json"},
            timeout=10,
        )
        return r.status_code == 201
    except Exception as e:
        print(f"      ⚠️  DB save failed: {e}")
        return False


# ── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description="Google Drive → Cloudinary → MongoDB")
    ap.add_argument("--folder",   default=DEFAULT_FOLDER_ID, help="Drive folder ID")
    ap.add_argument("--category", default="",                help="Force category for all files")
    ap.add_argument("--api-key",  default=GDRIVE_API_KEY,    help="Google Drive API key")
    ap.add_argument("--dry-run",  action="store_true",       help="List files only")
    args = ap.parse_args()

    # Dependency check
    for pkg in ["requests", "cloudinary"]:
        try:
            __import__(pkg)
        except ImportError:
            print(f"❌  {pkg} not installed. Run:  pip install {pkg}")
            sys.exit(1)

    # API key check
    if not args.api_key:
        print("❌  GOOGLE_DRIVE_API_KEY is not set.\n")
        print("Get a free key in 2 minutes:")
        print("  1. https://console.cloud.google.com/ → New Project")
        print("  2. APIs & Services → Enable \"Google Drive API\"")
        print("  3. Credentials → Create → API key → copy it")
        print("  4. export GOOGLE_DRIVE_API_KEY=\"AIza...\"")
        print("  5. Re-run:  python3 scripts/gdrive_to_cloudinary.py")
        sys.exit(1)

    print(f"\n🚀  Google Drive → Cloudinary importer")
    print(f"    Folder   : {args.folder}")
    print(f"    Category : {args.category or '(auto-detect from subfolder)'}")
    print(f"    Dry run  : {args.dry_run}\n")

    print("📂  Listing all files (recursive)...")
    try:
        files = list_all_images(args.folder, args.api_key)
    except Exception as e:
        print(f"❌  Drive API error: {e}")
        sys.exit(1)

    if not files:
        print("⚠️   No image files found in folder.")
        return

    print(f"📸  Found {len(files)} image(s)\n")

    # Dry run – list only
    if args.dry_run:
        for i, f in enumerate(files, 1):
            cat = args.category or detect_category(f["name"], f["folder"])
            tag = f"[{f['folder']}] " if f["folder"] else ""
            print(f"  [{i:3d}]  {tag}{f['name']}  →  {cat}")
        print(f"\n✅  Dry run — {len(files)} files found, nothing uploaded.")
        return

    # Upload loop
    uploaded = errors = 0
    results  = []

    for i, f in enumerate(files, 1):
        cat   = args.category or detect_category(f["name"], f["folder"])
        hint  = re.sub(r"[^a-z0-9_-]", "_", Path(f["name"]).stem.lower())
        label = f"[{f['folder']}] {f['name']}" if f["folder"] else f["name"]
        print(f"  [{i:3d}/{len(files)}]  {label}  →  {cat}")

        try:
            cld = upload_from_drive_url(f["id"], hint)
            record = {
                "url":       cld["url"],
                "publicId":  cld["publicId"],
                "alt":       Path(f["name"]).stem.replace("_", " ").replace("-", " ").title(),
                "category":  cat,
                "width":     cld["width"],
                "height":    cld["height"],
                "published": True,
                "source":    "gdrive",
                "order":     i,
            }
            saved  = save_to_db(record)
            status = "✅" if saved else "☁️  (DB skip – run npm run dev first)"
            print(f"           {status}  {cld['url']}")
            results.append(record)
            uploaded += 1
        except Exception as e:
            print(f"           ❌  {e}")
            errors += 1

        time.sleep(UPLOAD_DELAY)

    # Summary
    print(f"\n{'─'*60}")
    print(f"  ✅  Uploaded : {uploaded}")
    print(f"  ❌  Errors   : {errors}")
    print(f"{'─'*60}")

    if results:
        out = Path("gdrive_import_result.json")
        out.write_text(json.dumps(results, indent=2, ensure_ascii=False))
        print(f"\n📄  Results saved to: {out}")

    print("\n🎉  Import complete!")
    if errors:
        print(f"    {errors} file(s) failed – increase UPLOAD_DELAY or check API limits.")
    if not any(r.get("_id") for r in results):
        print("    ⚠️  Photos were uploaded to Cloudinary but NOT saved to DB.")
        print("    → Start the dev server:  npm run dev")
        print("    → Re-run this script or bulk-import via:")
        print(f"       curl -X POST http://localhost:3000/api/gallery-photos \\")
        print(f"            -H 'Content-Type: application/json' \\")
        print(f"            -d @gdrive_import_result.json")


if __name__ == "__main__":
    main()
