import json
import re
from collections import defaultdict
from datetime import datetime

with open('sprint_report.json') as f:
    data = json.load(f)

sprint = data['sprint']
issues = data['issues']

# Normalize status category (Ukrainian/English)
DONE_CATS = {'Done', 'Готово'}
INPROG_CATS = {'In Progress', 'В работе', 'В работе', 'В процессе'}

def is_done(i): return i['status_category'] in DONE_CATS or i['status'] in DONE_CATS
def is_inprog(i): return i['status_category'] in INPROG_CATS or i['status'] in INPROG_CATS

# Module tag → human-readable name
MODULE_NAMES = {
    'ARCH':       'Архітектура бекенду',
    'DB':         'База даних / Міграції',
    'AUTH':       'Аутентифікація',
    'USERS':      'Управління користувачами',
    'SELLERS':    'Кабінет продавця (API)',
    'PRODUCTS':   'Товари / Продукти (API)',
    'DEVOPS':     'DevOps / CI-CD',
    'I18N':       'Локалізація (i18n)',
    'Frontend':   'Frontend (React)',
    'CAT-DB-1':   'Категорії маркетплейсу',
    'CAT-DB-3':   'Групи атрибутів',
    'CAT-DB-4':   'Атрибути та опції',
    'CAT-DB-5':   'Бренди',
}

# Parse module from summary [XXX]
def get_module(summary):
    m = re.match(r'\[([^\]]+)\]', summary)
    tag = m.group(1) if m else 'Прочее'
    return MODULE_NAMES.get(tag, tag)

by_assignee = defaultdict(lambda: {'count': 0, 'hours': 0, 'done': 0, 'in_progress': 0, 'todo': 0, 'tasks': []})
by_module = defaultdict(lambda: {'count': 0, 'hours': 0, 'done': 0})
by_status = defaultdict(int)
no_estimate = []

for i in issues:
    a = i['assignee'] or 'Без исполнителя'
    by_assignee[a]['count'] += 1
    by_assignee[a]['hours'] += i['original_estimate_h']
    by_assignee[a]['tasks'].append(i)
    if is_done(i):
        by_assignee[a]['done'] += 1
    elif is_inprog(i):
        by_assignee[a]['in_progress'] += 1
    else:
        by_assignee[a]['todo'] += 1
    by_status[i['status']] += 1
    mod = get_module(i['summary'])
    by_module[mod]['count'] += 1
    by_module[mod]['hours'] += i['original_estimate_h']
    if is_done(i):
        by_module[mod]['done'] += 1
    if i['original_estimate_h'] == 0:
        no_estimate.append(i['key'])

total_h = sum(s['hours'] for s in by_assignee.values())
done_count = sum(1 for i in issues if is_done(i))
inprog_count = sum(1 for i in issues if is_inprog(i))
todo_count = len(issues) - done_count - inprog_count

W = 70
print('=' * W)
print(f'  РАСШИРЕННЫЙ ОТЧЁТ ПО СПРИНТУ')
print(f'  {sprint["name"]}  |  Статус: {sprint["state"].upper()}')
start = sprint.get('startDate', '')[:10]
end = sprint.get('endDate', '')[:10]
if start:
    print(f'  Период: {start} — {end}')
print(f'  Доска: {sprint.get("board", "SCRUM board")}')
print('=' * W)

# ── ОБЩАЯ СТАТИСТИКА ──────────────────────────────────────
print(f'\n{"ОБЩАЯ СТАТИСТИКА":^{W}}')
print('-' * W)
print(f'  Всего задач в спринте:      {len(issues):>3}')
print(f'  ✅ Выполнено (Готово):       {done_count:>3}  ({done_count/len(issues)*100:.0f}%)')
print(f'  🔄 В работе:                {inprog_count:>3}')
print(f'  📋 К выполнению:             {todo_count:>3}')
print(f'\n  Общий объём оценок:         {total_h:.0f}h')
print(f'  Средняя оценка на задачу:   {total_h/len(issues):.1f}h')

# ── ПО СТАТУСАМ ───────────────────────────────────────────
print(f'\n{"СТАТУСЫ ЗАДАЧ":^{W}}')
print('-' * W)
for status, cnt in sorted(by_status.items(), key=lambda x: -x[1]):
    bar = '█' * min(cnt * 2, 40)
    pct = cnt / len(issues) * 100
    print(f'  {status:<28} {cnt:>3} ({pct:>4.0f}%)  {bar}')

# ── ПО ИСПОЛНИТЕЛЯМ (краткая сводка) ─────────────────────
print(f'\n{"ПО ИСПОЛНИТЕЛЯМ — СВОДКА":^{W}}')
print('-' * W)
print(f'  {"Исполнитель":<25} {"Задач":>5}  {"Оценка":>7}  {"Готово":>7}  {"В работе":>9}  {"К выпол.":>9}')
print(f'  {"-"*25}  {"-"*5}  {"-"*7}  {"-"*7}  {"-"*9}  {"-"*9}')
for name, s in sorted(by_assignee.items(), key=lambda x: -x[1]['hours']):
    pct = f'{s["done"]/s["count"]*100:.0f}%' if s['count'] else '0%'
    print(f'  {name:<25} {s["count"]:>5}  {s["hours"]:>6.0f}h  {s["done"]:>5} ({pct})  {s["in_progress"]:>9}  {s["todo"]:>9}')
print(f'  {"ИТОГО":<25} {len(issues):>5}  {total_h:>6.0f}h')

# ── ПО ИСПОЛНИТЕЛЯМ (детально) ────────────────────────────
for name, s in sorted(by_assignee.items(), key=lambda x: -x[1]['hours']):
    print(f'\n{"=" * W}')
    print(f'  👤 {name}')
    print(f'  Задач: {s["count"]}  |  Оценка: {s["hours"]:.0f}h  |  Готово: {s["done"]}/{s["count"]}')
    print(f'{"-" * W}')
    print(f'  {"KEY":<12} {"Ч":>3}  {"Статус":<12}  ЗАДАЧА')
    print(f'  {"-"*12} {"-"*3}  {"-"*12}  {"-"*36}')
    for t in sorted(s['tasks'], key=lambda x: x['key']):
        h = f'{t["original_estimate_h"]:.0f}h' if t['original_estimate_h'] else '  -'
        st = '✅' if is_done(t) else ('🔄' if is_inprog(t) else '📋')
        print(f'  {t["key"]:<12} {h:>3}  {st}           {t["summary"][:50]}')

# ── ПО МОДУЛЯМ ────────────────────────────────────────────
print(f'\n{"=" * W}')
print(f'{"ПО МОДУЛЯМ / ОБЛАСТЯМ":^{W}}')
print('-' * W)
print(f'  {"Модуль":<22} {"Задач":>5}  {"Оценка":>7}  {"Готово":>7}')
print(f'  {"-"*22}  {"-"*5}  {"-"*7}  {"-"*7}')
for mod, s in sorted(by_module.items(), key=lambda x: -x[1]['hours']):
    pct = f'{s["done"]/s["count"]*100:.0f}%' if s['count'] else '0%'
    print(f'  {mod:<22} {s["count"]:>5}  {s["hours"]:>6.0f}h  {s["done"]:>4} ({pct})')

# ── ЗАДАЧИ БЕЗ ОЦЕНКИ ─────────────────────────────────────
if no_estimate:
    print(f'\n⚠️  Нет оценки у {len(no_estimate)} задач: {", ".join(no_estimate)}')
else:
    print(f'\n✅ Все задачи имеют оценку времени')

# ── ЗАДАЧИ ВНЕ СПРИНТА ────────────────────────────────────
# Load all tasks from jira_list if available
try:
    import subprocess, sys
    # Check using sprint_report keys vs known range
    sprint_keys = set(i['key'] for i in issues)
    # SCRUM-65..175 known range
    all_known = [f'SCRUM-{n}' for n in range(65, 176) if n != 147]
    not_in_sprint = [k for k in all_known if k not in sprint_keys]
    if not_in_sprint:
        print(f'\n⚠️  Задачи НЕ добавленные в спринт ({len(not_in_sprint)} шт.):')
        for k in not_in_sprint:
            print(f'     {k}')
except Exception:
    pass

print(f'\n{"=" * W}')
print(f'  Отчёт сформирован: {datetime.now().strftime("%d.%m.%Y %H:%M")}')
print('=' * W)
