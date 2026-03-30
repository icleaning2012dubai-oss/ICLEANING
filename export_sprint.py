import requests
from requests.auth import HTTPBasicAuth
import json

auth = HTTPBasicAuth(
    "artemlend@gmail.com",
    "ATATT3xFfGF0vLZ0Q-mDDIuWd0qoSMocEFsFkN96MohaV1YrFooh3-ftQd74P3kJRuZ9ux2VyI-pJbe0_LG5FNQcuPPG36VV2w2MhqIiCtYef0zSnlfsIt5vjRJdJf56160ILByFE-2PGcBN-pp4o0j-Uw9HAnqRKLTLt1FZmstUBvZZ3CPvUmw=000B03B4"
)
headers = {"Accept": "application/json", "Content-Type": "application/json"}
BASE = "https://enez.atlassian.net"

print("Fetching boards...")
r = requests.get(f"{BASE}/rest/agile/1.0/board", auth=auth, headers=headers)
boards = r.json().get("values", [])
print(f"Found {len(boards)} boards:")
for b in boards:
    print(f"  [{b['id']}] {b['name']}")

if not boards:
    print("No boards found!")
    exit(1)

all_sprints = []
for board in boards:
    bid = board["id"]
    r = requests.get(
        f"{BASE}/rest/agile/1.0/board/{bid}/sprint",
        auth=auth, headers=headers,
        params={"state": "active,closed", "maxResults": 5}
    )
    if r.status_code == 200:
        sprints = r.json().get("values", [])
        for s in sprints:
            s["board_name"] = board["name"]
        all_sprints.extend(sprints)

print(f"\nFound {len(all_sprints)} sprints:")
for s in all_sprints:
    print(f"  [{s['id']}] {s['name']} — {s['state']} (board: {s['board_name']})")

if not all_sprints:
    print("No sprints found!")
    exit(1)

active = [s for s in all_sprints if s["state"] == "active"]
target_sprint = active[0] if active else all_sprints[-1]
print(f"\nUsing sprint: [{target_sprint['id']}] {target_sprint['name']}")

sprint_id = target_sprint["id"]
issues = []
start_at = 0
while True:
    r = requests.get(
        f"{BASE}/rest/agile/1.0/sprint/{sprint_id}/issue",
        auth=auth, headers=headers,
        params={
            "maxResults": 100,
            "startAt": start_at,
            "fields": "summary,status,assignee,issuetype,priority,timetracking,labels,parent,customfield_10016"
        }
    )
    data = r.json()
    batch = data.get("issues", [])
    issues.extend(batch)
    if start_at + len(batch) >= data.get("total", 0):
        break
    start_at += len(batch)

print(f"Fetched {len(issues)} issues")

clean_issues = []
for iss in issues:
    f = iss["fields"]
    tt = f.get("timetracking", {}) or {}
    clean_issues.append({
        "key": iss["key"],
        "summary": f.get("summary", ""),
        "status": (f.get("status") or {}).get("name", ""),
        "status_category": (f.get("status") or {}).get("statusCategory", {}).get("name", ""),
        "assignee": (f.get("assignee") or {}).get("displayName", "Unassigned"),
        "type": (f.get("issuetype") or {}).get("name", ""),
        "priority": (f.get("priority") or {}).get("name", ""),
        "original_estimate_h": round(tt.get("originalEstimateSeconds", 0) / 3600, 1),
        "time_spent_h": round(tt.get("timeSpentSeconds", 0) / 3600, 1),
        "remaining_h": round(tt.get("remainingEstimateSeconds", 0) / 3600, 1),
        "labels": f.get("labels", []),
        "parent_key": (f.get("parent") or {}).get("key", ""),
        "parent_summary": ((f.get("parent") or {}).get("fields") or {}).get("summary", ""),
        "story_points": f.get("customfield_10016"),
    })

report = {
    "sprint": {
        "id": target_sprint["id"],
        "name": target_sprint["name"],
        "state": target_sprint["state"],
        "startDate": target_sprint.get("startDate", ""),
        "endDate": target_sprint.get("endDate", ""),
        "board": target_sprint.get("board_name", ""),
    },
    "issues": clean_issues,
    "total_issues": len(clean_issues),
}

with open("sprint_report.json", "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print(f"\n✅ Saved sprint_report.json ({len(clean_issues)} issues)")
