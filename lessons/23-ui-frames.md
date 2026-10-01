# 23. Окна и уведомления: iframe

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-frames)

## Зачем это нужно в автотесте

XPath основной страницы не проходит внутрь iframe. Тест сначала найдет сам iframe по XPath, перейдет в его DOM через frameLocator и проверит заголовок внутри.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте в palmekaprocode-js-pw после browser alert. Откройте DevTools и найдите iframe с id frame-one; его содержимое находится в отдельном документе.

Откройте https://palmekaprocode.ru/practice/frames под учебным аккаунтом. Найдите iframe с id frame-one, раскройте его документ в Elements и найдите h1 с id frame-heading.

- Создайте tests/frames/pages и tests/frames/helpers.
- Проверьте, что setup из урока авторизации проходит вместе с предыдущим UI-тестом.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

page.frameLocator получает XPath самого iframe. Затем locator с XPath ищет h1 в его собственном DOM. Один page.locator на основной странице не увидел бы этот h1.

- **iframe**: встроенный документ со своим DOM внутри страницы.
- **frameLocator**: переход Playwright в DOM найденного iframe.
- **Внутренний XPath**: выражение, которое выполняется уже внутри фрейма после frameLocator.

## Первый файл: tests/frames/pages/frames_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/frames/pages/frames_page.js)

## Второй файл: tests/frames/helpers/functions_frames.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/frames/helpers/functions_frames.js)

## Третий файл: tests/frames/frames.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/frames/frames.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/frames/frames.spec.js --project=chromium --reporter=list.

Сначала пройдет setup, затем тест этого тренажера. Последняя строка успешного запуска - 2 passed. В первом iframe тест найдет заголовок "Первый фрейм".

```text
2 passed
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- В frameLocator замените frame-one на frame-two. Внутри второго фрейма нет h1 с id frame-heading, шаг 3 упадет: 1 passed и 1 failed.
- Верните iframe. В XPath внутреннего h1 замените frame-heading на missing-heading. Шаг 3 упадет: 1 passed и 1 failed.
- Верните оба id: 2 passed.
