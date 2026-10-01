# 34. Виджеты: селекты

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-select-menu)

## Зачем это нужно в автотесте

В форме встречаются обычные и множественные select. Проверим выбранные value каждого поля и собранный итог.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте после меню. Осмотрите три select и их option в Elements.

Откройте https://palmekaprocode.ru/practice/select-menu под учебным аккаунтом. Найдите select-value, select-role, select-colors с атрибутом multiple и блок select-result.

- Создайте tests/select-menu/pages и tests/select-menu/helpers.
- Проверьте, что setup из урока авторизации проходит вместе с предыдущим UI-тестом.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

Передаем значения option, а не их видимые названия. Для multiple передаем массив из двух цветов и сверяем итоговый текст.

- **selectOption**: выбор option по ее value в HTML-селекте.
- **multiple**: режим выбора нескольких option в одном select.
- **toHaveValues**: проверка массива выбранных value у множественного селекта.

## Первый файл: tests/select-menu/pages/select_menu_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/select-menu/pages/select_menu_page.js)

## Второй файл: tests/select-menu/helpers/functions_select_menu.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/select-menu/helpers/functions_select_menu.js)

## Третий файл: tests/select-menu/select-menu.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/select-menu/select-menu.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне qa-playwright выполните npx playwright test tests/select-menu/select-menu.spec.js --project=chromium --reporter=list.

Сначала пройдет setup, затем тест этого тренажера. Последняя строка успешного запуска - 2 passed. Поля сохранят group-two, mentor, Красный и Синий; итог покажет оба цвета.

```text
2 passed
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Уберите Синий из массива selectOption. Шаг 3 упадет на проверке двух цветов: 1 passed и 1 failed.
- Верните массив и замените ожидаемую роль на admin. Шаг 3 упадет: 1 passed и 1 failed.
- Верните mentor: 2 passed.
