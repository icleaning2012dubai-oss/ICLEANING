import requests
from requests.auth import HTTPBasicAuth

auth = HTTPBasicAuth(
    "artemlend@gmail.com",
    "ATATT3xFfGF0vLZ0Q-mDDIuWd0qoSMocEFsFkN96MohaV1YrFooh3-ftQd74P3kJRuZ9ux2VyI-pJbe0_LG5FNQcuPPG36VV2w2MhqIiCtYef0zSnlfsIt5vjRJdJf56160ILByFE-2PGcBN-pp4o0j-Uw9HAnqRKLTLt1FZmstUBvZZ3CPvUmw=000B03B4"
)
headers = {"Accept": "application/json", "Content-Type": "application/json"}

# key: hours
HOURS = {
    # === ARCH ===
    "SCRUM-65": 4,   # Ініціалізація NestJS монорепо
    "SCRUM-66": 2,   # TypeScript strict mode + tsconfig
    "SCRUM-67": 3,   # ESLint + Prettier + Husky
    "SCRUM-68": 3,   # @nestjs/config + Zod валідація env
    "SCRUM-69": 4,   # CoreModule
    "SCRUM-70": 4,   # LoggerModule
    "SCRUM-71": 4,   # Exception filters
    "SCRUM-72": 4,   # Interceptors
    "SCRUM-73": 3,   # ValidationPipe + версіонування API
    "SCRUM-74": 3,   # Swagger + Rate limiting
    "SCRUM-75": 2,   # CORS + Helmet + Health checks
    "SCRUM-76": 4,   # Docker Compose dev

    # === DB ===
    "SCRUM-77": 5,   # TypeORM + PostgreSQL + PgBouncer
    "SCRUM-78": 4,   # Інфраструктура міграцій + seed
    "SCRUM-79": 3,   # BaseEntity
    "SCRUM-80": 4,   # Міграція users + profiles + addresses
    "SCRUM-81": 3,   # Міграція sessions + verification_codes
    "SCRUM-82": 3,   # Міграція sellers + documents
    "SCRUM-83": 4,   # CAT-DB-1 Categories DDL
    "SCRUM-84": 3,   # CAT-DB-3 Attribute Groups DDL
    "SCRUM-85": 3,   # CAT-DB-4 Attributes & Options DDL
    "SCRUM-86": 2,   # CAT-DB-5 Brands DDL

    # === I18N ===
    "SCRUM-87": 2,   # Конфігурація env I18N
    "SCRUM-88": 4,   # nestjs-i18n setup
    "SCRUM-89": 3,   # LocaleInterceptor

    # === DEVOPS ===
    "SCRUM-90": 4,   # Docker multi-stage build
    "SCRUM-91": 4,   # CI lint + type-check + tests
    "SCRUM-92": 3,   # CI build Docker image
    "SCRUM-93": 3,   # Secrets + .env + Doppler
    "SCRUM-94": 4,   # PostgreSQL + Redis staging
    "SCRUM-95": 4,   # Staging deploy пайплайн
    "SCRUM-96": 3,   # Nginx + SSL staging
    "SCRUM-97": 2,   # Git branching strategy
    "SCRUM-135": 4,  # E2E tests CI
    "SCRUM-136": 6,  # Production infra provisioning
    "SCRUM-137": 4,  # Production deploy пайплайн
    "SCRUM-138": 4,  # Моніторинг + Sentry
    "SCRUM-139": 4,  # Logging infra
    "SCRUM-140": 3,  # Database backup
    "SCRUM-141": 4,  # Frontend CI/CD

    # === AUTH ===
    "SCRUM-98":  4,  # Реєстрація DTO + argon2
    "SCRUM-99":  3,  # Реєстрація транзакція
    "SCRUM-100": 4,  # Вхід email/phone + блокування
    "SCRUM-101": 4,  # OTP crypto + Redis
    "SCRUM-102": 4,  # SMS Eskiz + Circuit Breaker
    "SCRUM-103": 3,  # Email SendGrid + шаблон
    "SCRUM-104": 5,  # Сесії PostgreSQL + Redis + cookie
    "SCRUM-105": 3,  # Макс 5 сесій FIFO
    "SCRUM-106": 2,  # logout + logout-all
    "SCRUM-107": 3,  # Скидання пароля OTP
    "SCRUM-108": 2,  # GET /auth/sessions

    # === USERS ===
    "SCRUM-109": 4,  # CRUD профілю
    "SCRUM-110": 4,  # CRUD адрес
    "SCRUM-111": 4,  # Зміна email/phone OTP
    "SCRUM-112": 3,  # Зміна пароля + деактивація
    "SCRUM-113": 5,  # RBAC ролі + Guards

    # === SELLERS ===
    "SCRUM-114": 5,  # Реєстрація продавця
    "SCRUM-115": 4,  # Профіль магазину
    "SCRUM-116": 4,  # Верифікація документів
    "SCRUM-117": 4,  # Менеджери + JSONB-дозволи

    # === PRODUCTS ===
    "SCRUM-118": 3,  # Базова міграція products
    "SCRUM-119": 5,  # CRUD товарів seller
    "SCRUM-120": 4,  # Список товарів + фільтри
    "SCRUM-121": 3,  # Submit на модерацію
    "SCRUM-122": 3,  # Soft delete + архівація

    # === FRONTEND — Buyer Interface ===
    "SCRUM-147": 8,  # Головна сторінка
    "SCRUM-148": 3,  # Блок банерів
    "SCRUM-149": 3,  # Блок категорій
    "SCRUM-150": 4,  # Блок популярних товарів
    "SCRUM-151": 3,  # Блок нових товарів
    "SCRUM-152": 3,  # Блок рекомендованих товарів
    "SCRUM-153": 6,  # Сторінка каталогу
    "SCRUM-154": 8,  # Фільтри
    "SCRUM-155": 3,  # Сортування
    "SCRUM-156": 6,  # Сторінка товару
    "SCRUM-157": 4,  # Галерея зображень
    "SCRUM-158": 3,  # Блок характеристик
    "SCRUM-159": 2,  # Блок опису
    "SCRUM-160": 5,  # Блок відгуків
    "SCRUM-161": 3,  # Схожі товари
    "SCRUM-162": 8,  # Порівняння товарів
    "SCRUM-163": 6,  # Кошик
    "SCRUM-164": 8,  # Checkout

    # === FRONTEND — Seller Cabinet ===
    "SCRUM-165": 6,  # Дашборд продавця
    "SCRUM-166": 8,  # Аналітика та звіти
    "SCRUM-167": 4,  # Список товарів
    "SCRUM-168": 5,  # Пошук та фільтрація
    "SCRUM-169": 6,  # Форма створення товару
    "SCRUM-170": 4,  # Форма редагування
    "SCRUM-171": 3,  # Статуси товару
    "SCRUM-172": 3,  # Внутрішні категорії
    "SCRUM-173": 3,  # Підкатегорії
    "SCRUM-174": 3,  # Редагування категорій
    "SCRUM-175": 4,  # Список замовлень
}

for key, hours in HOURS.items():
    seconds = hours * 3600
    r = requests.put(
        f"https://enez.atlassian.net/rest/api/3/issue/{key}",
        auth=auth,
        headers=headers,
        json={"fields": {"timetracking": {"originalEstimate": f"{hours}h"}}},
    )
    if r.status_code == 204:
        print(f"  ✅ {key} — {hours}h")
    else:
        print(f"  ❌ {key} — {r.status_code}: {r.text[:100]}")

print("\n✅ Готово!")
