import requests

KEY = "AIzaSyDRrYp14LFuFJy1yBMQXw675Zo_GZQoSAI"
ROOT = "1VzbJ1VE1BD3-eCjclTcVWW7xfp0tFlRI"

def list_folder(fid):
    r = requests.get(
        "https://www.googleapis.com/drive/v3/files",
        params={
            "q": f"'{fid}' in parents and trashed=false",
            "key": KEY,
            "fields": "files(id,name,mimeType)",
            "pageSize": 1000,
        },
        timeout=10,
    )
    return r.json().get("files", [])

def count_images(fid, depth=0):
    total = 0
    try:
        items = list_folder(fid)
    except Exception:
        return 0
    for f in items:
        if f["mimeType"].startswith("image/"):
            total += 1
        elif "folder" in f["mimeType"] and depth < 3:
            total += count_images(f["id"], depth + 1)
    return total

top = list_folder(ROOT)
grand_total = 0
for folder in top:
    n = count_images(folder["id"])
    grand_total += n
    print(f"  {n:4d}  {folder['name']}")

print(f"\n  ВСЕГО: {grand_total} фото")
