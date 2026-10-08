# 17. Элементы: битые ресурсы

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-broken-links)

## Зачем это нужно в автотесте

Картинка может занимать место на странице и все равно не загрузиться. Тест сравнит ширину рабочего и битого изображения и проверит адрес битой ссылки, чтобы не считать ее обычным переходом.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте в palmekaprocode-js-pw после урока ссылок. Для картинки используем ее DOM-свойство naturalWidth: у загруженной оно больше нуля, у сломанной равно нулю.

Откройте https://palmekaprocode.ru/practice/broken-links под учебным аккаунтом. В Elements найдите img с id valid-image и broken-image, а также a с id broken-link. Проверьте их XPath до запуска теста.

- Создайте tests/broken-links/pages и tests/broken-links/helpers.
- Проверьте, что предыдущий UI-тест проходит. В начале его спеки стоит await login(page) из tests/helpers/login.js.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

Сначала дожидаемся завершения загрузки рабочего img и убеждаемся, что naturalWidth положителен. Для битого img ждем naturalWidth=0. Адрес broken-link проверяем отдельно; сам HTTP-статус разберем позже в API-блоке.

- **naturalWidth**: фактическая ширина загруженного изображения; у неудачной загрузки равна нулю.
- **evaluate**: чтение DOM-свойства найденного элемента в браузере.
- **toHaveAttribute**: проверка href битой ссылки без перехода на нее.

## Первый файл: tests/broken-links/pages/broken_links_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/broken-links/pages/broken_links_page.js)

## Второй файл: tests/broken-links/helpers/functions_broken_links.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/broken-links/helpers/functions_broken_links.js)

## Третий файл: tests/broken-links/broken-links.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/broken-links/broken-links.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/broken-links/broken-links.spec.js --project=chromium --reporter=list.

В начале спека вызывает login из файла tests/helpers/login.js. Хелпер сам открывает /login и входит. Последняя строка успешного запуска - 1 passed. Рабочая картинка имеет ширину больше нуля, битая - ноль, ссылка хранит адрес отсутствующей страницы.

```text
1 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/broken-links/broken-links.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Замените XPath validImage на img с id broken-image. Шаг 3 упадет на проверке width > 0: 1 passed и 1 failed.
- Верните XPath. Замените ожидаемый href на /practice. Шаг 3 упадет: 1 passed и 1 failed.
- Верните исходный адрес: 1 passed.
