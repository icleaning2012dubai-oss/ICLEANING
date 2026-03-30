import requests
from requests.auth import HTTPBasicAuth

auth = HTTPBasicAuth(
    "artemlend@gmail.com",
    "ATATT3xFfGF0vLZ0Q-mDDIuWd0qoSMocEFsFkN96MohaV1YrFooh3-ftQd74P3kJRuZ9ux2VyI-pJbe0_LG5FNQcuPPG36VV2w2MhqIiCtYef0zSnlfsIt5vjRJdJf56160ILByFE-2PGcBN-pp4o0j-Uw9HAnqRKLTLt1FZmstUBvZZ3CPvUmw=000B03B4"
)
headers = {"Accept": "application/json"}

all_issues = []
next_page_token = None
while True:
    body = {"jql": "project=SCRUM ORDER BY key ASC", "maxResults": 100, "fields": ["summary", "issuetype", "assignee", "status", "timetracking"]}
    if next_page_token:
        body["nextPageToken"] = next_page_token
    r = requests.post(
        "https://enez.atlassian.net/rest/api/3/search/jql",
        json=body,
        auth=auth,
        headers={**headers, "Content-Type": "application/json"},
    )
    data = r.json()
    if "errorMessages" in data or "errors" in data:
        print("Error:", data)
        break
    chunk = data.get("issues", [])
    all_issues.extend(chunk)
    total = data.get("total", 0)
    if not next_page_token:
        print(f"Status: {r.status_code}, Total in Jira: {total}")
    next_page_token = data.get("nextPageToken")
    if not next_page_token or not chunk:
        break

issues = all_issues
print(f"Loaded: {len(issues)}\n")
print(f"{'KEY':<12} {'ASSIGNEE':<25} {'STATUS':<20} {'HOURS':>6}  SUMMARY")
print("-" * 100)
no_hours = []
for i in issues:
    key = i["key"]
    itype = i["fields"]["issuetype"]["name"]
    if itype in ("Epic", "Эпик"):
        continue
    summary = i["fields"]["summary"]
    assignee = i["fields"].get("assignee")
    name = assignee["displayName"] if assignee else "Не назначен"
    status = i["fields"].get("status", {}).get("name", "-")
    tt = i["fields"].get("timetracking") or {}
    secs = tt.get("originalEstimateSeconds", 0)
    hours = f"{secs//3600}h" if secs else "❌ нет"
    if not secs:
        no_hours.append(key)
    print(f"{key:<12} {name:<25} {status:<20} {hours:>6}  {summary[:50]}")

print(f"\nБез часов: {no_hours if no_hours else '—  все проставлены ✅'}")
