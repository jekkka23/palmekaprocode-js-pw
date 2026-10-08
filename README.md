# Готовые примеры курса QA auto JavaScript

Здесь собраны файлы для показа на всех 48 уроках курса. [Порядок занятий](LESSONS.md) совпадает с сайтом. Под каждой значимой строкой JavaScript есть комментарий с объяснением. Решений домашних заданий в репозитории нет.

## Подготовка

Установите Node.js 22 или новее. В корне репозитория выполните:

```bash
npm ci
npx playwright install chromium
```

Для первых четырех уроков браузер не нужен:

```bash
npm run js:values
npm run js:collections
npm run js:functions
npm run js:async
```

Полные примеры и разбор каждого шага открывайте по ссылкам в [порядке уроков](LESSONS.md). В каждой теме есть ссылка на соответствующий урок сайта и готовые файлы.

## Первые тесты Playwright

Первые два теста лежат в [intro/qa-playwright](intro/qa-playwright). Они сами входят под учебным аккаунтом из курса и работают с отдельным конфигом:

```bash
npm run test:first
```

Для показа одного теста:

```bash
npx playwright test intro/qa-playwright/tests/training-field.spec.js --config intro/qa-playwright/playwright.config.js --reporter=list
npx playwright test intro/qa-playwright/tests/playwright-commands.spec.js --config intro/qa-playwright/playwright.config.js --reporter=list
```

## Дальнейшие уроки

Вход делает общий хелпер [tests/helpers/login.js](tests/helpers/login.js). Спека вызывает `login(page)` в начале. Почта и пароль записаны только в этом файле. Например:

```bash
npx playwright test tests/text-box/text-box.spec.js --project=chromium --reporter=list
```

Для итогового показа получите личный токен на `https://palmekaprocode.ru/practice/book-api`, задайте его в текущем терминале и запустите четыре читающие проверки:

```bash
export TRAINING_API_TOKEN="токен_из_тренажера"
npm run test:showcase
```

При рабочем доступе результат - `4 passed`: четыре теста. Каждый сам вызывает `login`. Токен и результаты прогонов исключены из Git. Для другого аккаунта задайте `QA_EMAIL` и `QA_PASSWORD`. Адрес сайта можно переопределить через `BASE_URL`.

## Запись в БД и разбор падения

[tests/database/customer-insert.spec.js](tests/database/customer-insert.spec.js) меняет личные SQL-таблицы и вызывает `reset`. Запускайте его только под отдельным аккаунтом, которым больше никто не пользуется. В обычном наборе тест пропускается. Команда для отдельного запуска есть в [уроке INSERT](lessons/45-database-js-changes.md).

[tests/diagnostics/failure-demo.spec.js](tests/diagnostics/failure-demo.spec.js) специально падает и тоже пропускается в обычном наборе. Для показа trace выполните:

```bash
RUN_FAILURE_DEMO=1 npx playwright test tests/diagnostics/failure-demo.spec.js --project=chromium --reporter=list
npx playwright show-trace "$(find test-results -name trace.zip -print -quit)"
```

Готовый YAML из урока GitHub Actions лежит в [examples/github/playwright.yml](examples/github/playwright.yml). Он хранится как пример и не запускается автоматически при публикации этой преподавательской репы.

SQL-файл [sql/active-customers.sql](sql/active-customers.sql) оставлен без комментариев: редактор полигона их не принимает. Построчное объяснение есть в [sql/README.md](sql/README.md).
