# 47. GitHub, Pull Request и Actions

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/github-workflow)

## Зачем это нужно в автотесте

После локального прогона тестам нужна история изменений и понятный запуск на другом компьютере. GitHub покажет код и результаты запуска, если в репозитории есть файлы проекта и нет сохраненной сессии или токена.

## Что уже надо знать и подготовить

Проверьте эти условия до запуска примера.

- У вас уже есть palmekaprocode-js-pw с package.json, package-lock.json, playwright.config.js и тестами из предыдущих уроков. Перед публикацией запустите хотя бы одну готовую спеку.
- Добавьте в .gitignore строки playwright/.auth/, test-results/, playwright-report/, .env и node_modules/. Проверьте git status: student.json и файлы с токенами не должны появиться в списке.
- Если palmekaprocode-js-pw еще не репозиторий, выполните в его корне git init -b main. На GitHub создайте пустой репозиторий palmekaprocode-js-pw без автоматического README и скопируйте его полный HTTPS-адрес.
- Привяжите свой адрес командой git remote add origin https://github.com/ВАШ_ЛОГИН/palmekaprocode-js-pw.git, заменив ВАШ_ЛОГИН на свое имя. Проверьте адрес через git remote -v.
- Создайте основную ветку с уже готовым проектом: git add tests playwright.config.js package.json package-lock.json .gitignore, затем git commit -m "собран учебный проект Playwright" и git push -u origin main. Убедитесь, что GitHub показывает файлы в main.
- В настройках Actions задайте переменную BASE_URL и секреты QA_EMAIL, QA_PASSWORD, TRAINING_API_TOKEN. Для REST API скопируйте токен из своего тренажера.

## Сначала разберем слова

Когда локальные тесты проходят, сохраните учебный проект на GitHub. В репозитории должны быть спеки, страницы, хелперы и конфиг. Пароли, Bearer-токен и сохраненная сессия туда не попадают.

- **Git**: хранит историю версий локально; GitHub размещает репозиторий и показывает совместную работу.
- **Ветка**: изолирует изменение. Коммит фиксирует законченную правку с понятным сообщением.
- **Pull Request**: предлагает изменения к основной ветке и собирает проверку кода и результаты запусков.
- **GitHub Actions**: выполняет заданные команды после push или открытия Pull Request.

## Как это работает

Создайте ветку для нового теста, отправьте коммит и откройте Pull Request. Затем подключите GitHub Actions: он установит зависимости и запустит Playwright. Для закрытого полигона адрес можно хранить в переменной GitHub, а почту, пароль и токен - в secrets.

- Добавить .auth/ и секретные файлы в .gitignore
- Создать ветку и коммит
- Отправить ветку на GitHub
- Открыть Pull Request
- Посмотреть результат GitHub Actions

## Команды для ветки с GitHub Actions

Готовый пример в учебной репе лежит в examples/github/playwright.yml. Сначала сохраните YAML из блока ниже по этому пути. Для своего GitHub Actions скопируйте его в .github/workflows/playwright.yml: только там GitHub запускает workflow. Затем проверьте git status; репозиторий origin уже привязан.

```bash
git status
# Проверяем, какие файлы попадут в историю и нет ли student.json.
git switch -c ci/playwright
# Создаем ветку от main для автоматического запуска.
mkdir -p .github/workflows
# Создаем рабочую папку GitHub Actions в своей копии проекта.
cp examples/github/playwright.yml .github/workflows/playwright.yml
# Копируем готовый учебный пример туда, где GitHub его запустит.
git add examples/github/playwright.yml .github/workflows/playwright.yml
# Добавляем учебный пример и его рабочую копию; остальной код уже в main.
git diff --cached --stat
# Еще раз смотрим список подготовленных файлов перед коммитом.
git commit -m "добавлен запуск Playwright в Actions"
# Сохраняем готовое изменение в локальной истории.
git push -u origin ci/playwright
# Отправляем ветку в свой GitHub-репозиторий.
```

**Обратите внимание.** Для GitHub используется Pull Request. Секреты для GitHub Actions задаются в настройках репозитория, а не внутри workflow-файла.

## Готовый файл: examples/github/playwright.yml

Сохраните пример по пути examples/github/playwright.yml. В нем запускаются четыре уже изученные читающие проверки; тест INSERT с reset не входит в общий прогон. Комментарии под строками можно оставить в YAML. Команда cp из блока выше создаст рабочую копию для GitHub Actions.

```yaml
name: playwright-tests
# Так запуск будет называться на вкладке Actions.
"on": [push, pull_request]
# Проверяем отправленную ветку и собственный Pull Request.
jobs:
# Ниже описана одна группа действий.
  tests:
  # Даем группе короткое имя tests.
    runs-on: ubuntu-latest
    # GitHub выдаст чистую машину с Ubuntu.
    steps:
    # Следующие команды выполнятся по порядку.
      - uses: actions/checkout@v6
      # Забираем файлы текущей ветки.
      - uses: actions/setup-node@v6
      # Подготавливаем Node.js.
        with:
        # Передаем версию в setup-node.
          node-version: 22
          # Используем Node.js 22 для учебного проекта.
      - run: npm ci
      # Устанавливаем зависимости точно по package-lock.json.
      - run: npx playwright install --with-deps chromium
      # Устанавливаем Chromium и системные библиотеки.
      - run: npx playwright test tests/text-box/text-box.spec.js tests/accordion/accordion.spec.js tests/api/customers.spec.js tests/database/customers-sql.spec.js --project=chromium
      # Запускаем четыре читающих теста; setup подключится по зависимости.
        env:
        # Передаем адрес и доступы только этой команде.
          BASE_URL: ${{ vars.BASE_URL }}
          # Берем адрес сайта из переменной репозитория.
          QA_EMAIL: ${{ secrets.QA_EMAIL }}
          # Берем почту учебного аккаунта из секрета.
          QA_PASSWORD: ${{ secrets.QA_PASSWORD }}
          # Берем пароль из секрета.
          TRAINING_API_TOKEN: ${{ secrets.TRAINING_API_TOKEN }}
          # Берем личный API-токен из секрета.
```

**Обратите внимание.** Setup в CI останавливается, если QA_EMAIL или QA_PASSWORD не заданы. Pull Request из чужого fork обычно не получает secrets, поэтому такой запуск не сможет проверить закрытое поле.

## Как запустить

Выполняйте шаги по порядку.

- В корне palmekaprocode-js-pw создайте .gitignore, инициализируйте main и отправьте первый коммит по шагам подготовки. Сохраните пример в examples/github/playwright.yml, затем скопируйте его в .github/workflows/playwright.yml командами из блока выше.
- Откройте Pull Request из ci/playwright в main и вкладку Actions. После настройки vars.BASE_URL и трех secrets запустится указанный набор из четырех тестов.

## Какой результат ожидать

В корректно настроенном Actions setup выполнится один раз, затем четыре спеки: итог 5 passed. В git status не будет playwright/.auth/student.json, токена и .env. Если отсутствует секрет входа, setup завершится ошибкой до входа; если устарел API-токен, упадет только API-тест.

```text
5 passed
```

## Что поменять для проверки понимания

Меняйте по одному пункту, сначала предскажите итог, потом запустите пример и верните исходную строку.

- На локальной копии workflow уберите только tests/accordion/accordion.spec.js из команды запуска. После следующего push ожидайте 4 passed: setup и три спеки.
- Верните виджет. Временно укажите несуществующий путь спеки в команде запуска: Actions покажет ошибку выбора файлов, а не ошибку ассерта. Затем верните путь.
- Проверьте git status --ignored и объясните, почему playwright/.auth/student.json не попал в коммит, хотя тесты его используют.
