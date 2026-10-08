# 47. GitHub, Pull Request и Actions

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/github-workflow)

## Зачем это нужно в автотесте

После локального прогона тестам нужна история изменений и понятный запуск на другом компьютере. GitHub покажет код и результаты запуска, если в репозитории есть файлы проекта и нет сохраненной сессии или токена.

## Что уже надо знать и подготовить

Проверьте эти условия до запуска примера.

- Используйте клонированный palmekaprocode-js-pw из урока первого запуска. В нем уже есть Git, ветка main, package.json, package-lock.json, playwright.config.js и изученные тесты. Перед публикацией запустите хотя бы одну готовую спеку.
- Откройте готовый .gitignore и проверьте, что playwright/.auth/, test-results/, playwright-report/, .env и node_modules/ исключены. Команда git status не должна показывать student.json и файлы с токенами.
- Откройте https://github.com/jekkka23/palmekaprocode-js-pw и нажмите Fork, чтобы получить свою копию репозитория. Скопируйте полный HTTPS-адрес своего Fork с кнопки Code.
- В терминале выполните read -r GITHUB_REPO_URL && git remote set-url origin "$GITHUB_REPO_URL". Команда дождется, пока вы вставите адрес своего Fork и нажмете Enter. Проверьте git remote -v: обе строки origin должны вести в ваш Fork, а не в исходную репу.
- Перед первым коммитом задайте имя и почту автора именно в этом клоне. Для почты можно использовать адрес GitHub noreply. Готовые команды ниже спросят оба значения и запишут их только в настройки этой репы.
- В настройках Actions задайте переменную BASE_URL и секреты QA_EMAIL, QA_PASSWORD, TRAINING_API_TOKEN. Для REST API скопируйте токен из своего тренажера.

## Сначала разберем слова

Когда локальные тесты проходят, сохраните учебный проект на GitHub. В репозитории должны быть спеки, страницы, хелперы и конфиг. Пароли, Bearer-токен и вызов login туда не попадают.

- **Git**: хранит историю версий локально; GitHub размещает репозиторий и показывает совместную работу.
- **Ветка**: изолирует изменение. Коммит фиксирует законченную правку с понятным сообщением.
- **Pull Request**: предлагает изменения к основной ветке и собирает проверку кода и результаты запусков.
- **GitHub Actions**: выполняет заданные команды после push или открытия Pull Request.

## Как это работает

Создайте ветку для нового теста, отправьте коммит и откройте Pull Request. Затем подключите GitHub Actions: он установит зависимости и запустит Playwright. Для закрытого полигона адрес можно хранить в переменной GitHub, а почту, пароль и токен - в secrets.

- Проверить .gitignore и сделать Fork
- Привязать свой Fork и создать ветку
- Скопировать YAML и сохранить коммит
- Отправить ветку на GitHub
- Открыть Pull Request
- Посмотреть результат GitHub Actions

## Команды для ветки с GitHub Actions

Готовый YAML уже лежит в examples/github/playwright.yml. Скопируйте его в .github/workflows/playwright.yml: только из этой папки GitHub запускает Actions. Перед git push обязательно убедитесь, что origin указывает на ваш Fork.

```bash
git status
# Проверяем, какие файлы попадут в историю и нет ли student.json.
read -r GITHUB_REPO_URL && git remote set-url origin "$GITHUB_REPO_URL"
# Вставляем HTTPS-адрес своего Fork и меняем origin.
git remote -v
# Убеждаемся, что fetch и push ведут в свой Fork.
read -r GIT_AUTHOR_NAME && git config user.name "$GIT_AUTHOR_NAME"
# Вводим свое имя для будущего коммита только в этом проекте.
read -r GIT_AUTHOR_EMAIL && git config user.email "$GIT_AUTHOR_EMAIL"
# Вводим почту GitHub или адрес noreply только для этого проекта.
git switch -c ci/playwright
# Создаем ветку от main для автоматического запуска.
mkdir -p .github/workflows
# Создаем рабочую папку GitHub Actions в своей копии проекта.
cp examples/github/playwright.yml .github/workflows/playwright.yml
# Копируем готовый учебный пример туда, где GitHub его запустит.
git add .github/workflows/playwright.yml
# Добавляем только новую рабочую копию; учебный пример уже есть в main.
git diff --cached --stat
# Еще раз смотрим список подготовленных файлов перед коммитом.
git commit -m "добавлен запуск Playwright в Actions"
# Сохраняем готовое изменение в локальной истории.
git push -u origin ci/playwright
# Отправляем ветку в свой GitHub-репозиторий.
```

**Обратите внимание.** Проверьте адрес origin перед отправкой ветки. Для GitHub используется Pull Request. Секреты для GitHub Actions задаются в настройках вашего Fork, а не внутри workflow-файла.

## Готовый файл: examples/github/playwright.yml

Откройте готовый пример по пути examples/github/playwright.yml. В нем запускаются четыре уже изученные читающие проверки; тест INSERT с reset не входит в общий прогон. Комментарии под строками уже есть в YAML. Команда cp из блока выше создаст рабочую копию для GitHub Actions.

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
      # Запускаем четыре читающих теста. Вход делает tests/helpers/login.js внутри спеки.
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

- В корне palmekaprocode-js-pw проверьте .gitignore и git status. Сделайте Fork на GitHub, привяжите его как origin, создайте ветку ci/playwright и скопируйте готовый YAML командами из блока выше.
- После git push откройте Pull Request из ci/playwright в main своего Fork и вкладку Actions. После настройки vars.BASE_URL и трех secrets запустится указанный набор из четырех тестов.

## Какой результат ожидать

В корректно настроенном Actions пройдут четыре спеки: итог 4 passed. Вход делает tests/helpers/login.js внутри спеки. В git status не будет токена и .env. Если устарел API-токен, упадет только API-тест.

```text
4 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Обратите внимание.** Сначала сделайте Fork готовой репы в своем GitHub. Команда с read дождется, пока вы вставите HTTPS-адрес своего Fork. Только после этого меняйте origin и отправляйте ветку.

**Проверить текущий репозиторий**

```bash
git status
```

**Привязать свой Fork вместо исходного origin**

```bash
read -r GITHUB_REPO_URL && git remote set-url origin "$GITHUB_REPO_URL"
```

**Проверить адрес своего Fork**

```bash
git remote -v
```

**Один раз: введите имя автора коммита**

```bash
read -r GIT_AUTHOR_NAME && git config user.name "$GIT_AUTHOR_NAME"
```

**Один раз: введите почту автора коммита**

```bash
read -r GIT_AUTHOR_EMAIL && git config user.email "$GIT_AUTHOR_EMAIL"
```

**Создать ветку урока**

```bash
git switch -c ci/playwright
```

**Создать папку Actions**

```bash
mkdir -p .github/workflows
```

**Скопировать готовый YAML**

```bash
cp examples/github/playwright.yml .github/workflows/playwright.yml
```

**Добавить файл в коммит**

```bash
git add .github/workflows/playwright.yml
```

**Проверить состав коммита**

```bash
git diff --cached --stat
```

**Сохранить изменение**

```bash
git commit -m "добавлен запуск Playwright в Actions"
```

**Отправить ветку в свой Fork**

```bash
git push -u origin ci/playwright
```

## Что поменять для проверки понимания

Меняйте по одному пункту, сначала предскажите итог, потом запустите пример и верните исходную строку.

- На локальной копии workflow уберите только tests/accordion/accordion.spec.js из команды запуска. После следующего push ожидайте 3 passed.
- Верните виджет. Временно укажите несуществующий путь спеки в команде запуска: Actions покажет ошибку выбора файлов, а не ошибку ассерта. Затем верните путь.
- Проверьте git status --ignored и объясните, почему tests/helpers/login.js не попал в коммит, хотя тесты его используют.
