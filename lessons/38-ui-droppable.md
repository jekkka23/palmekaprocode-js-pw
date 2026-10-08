# 38. Взаимодействия: зона сброса

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-droppable)

## Зачем это нужно в автотесте

Зона сброса должна реагировать только после переноса источника. Проверим текст и класс целевой области после dragTo.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте после изменения размера. Осмотрите исходный элемент и целевую область.

Откройте https://palmekaprocode.ru/practice/droppable под учебным аккаунтом. Найдите div с id drag-source и div с id drop-zone. До действия зона показывает Перетащите сюда.

- Создайте tests/droppable/pages и tests/droppable/helpers.
- Проверьте, что предыдущий UI-тест проходит. В начале его спеки стоит await login(page) из tests/helpers/login.js.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

Источник записывает данные в dataTransfer; зона сравнивает их при drop и меняет текст и class. Тест сверяет оба видимых признака успешного сброса.

- **dataTransfer**: данные, которые браузер переносит вместе с HTML-элементом.
- **drop-zone**: область, которая получает событие drop.
- **toHaveClass**: проверка класса элемента после изменения состояния.

## Первый файл: tests/droppable/pages/droppable_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/droppable/pages/droppable_page.js)

## Второй файл: tests/droppable/helpers/functions_droppable.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/droppable/helpers/functions_droppable.js)

## Третий файл: tests/droppable/droppable.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/droppable/droppable.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/droppable/droppable.spec.js --project=chromium --reporter=list.

В начале спека вызывает login из файла tests/helpers/login.js. Хелпер сам открывает /login и входит. Последняя строка успешного запуска - 1 passed. Зона покажет Элемент принят и получит класс dropped.

```text
1 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/droppable/droppable.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Замените XPath зоны на id missing-zone. Шаг 2 упадет при dragTo: 1 passed и 1 failed.
- Верните XPath и замените ожидаемый текст на Элемент отклонен. Шаг 3 упадет: 1 passed и 1 failed.
- Верните текст: 1 passed.
