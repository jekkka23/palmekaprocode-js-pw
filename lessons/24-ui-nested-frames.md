# 24. Окна и уведомления: вложенные iframe

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-nested-frames)

## Зачем это нужно в автотесте

Вложенный iframe нельзя искать напрямую из основной страницы. Тест пройдет в родительский фрейм, затем в дочерний и проверит текст на втором уровне.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте в palmekaprocode-js-pw после простого iframe. В DevTools раскройте parent-frame и найдите child-frame внутри его документа.

Откройте https://palmekaprocode.ru/practice/nested-frames под учебным аккаунтом. На основной странице есть iframe parent-frame. Внутри него расположен iframe child-frame, а в дочернем DOM - p с id child-frame-text.

- Создайте tests/nested-frames/pages и tests/nested-frames/helpers.
- Проверьте, что setup из урока авторизации проходит вместе с предыдущим UI-тестом.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

Первый frameLocator выбирает parent-frame на основной странице, второй выбирает child-frame уже внутри родительского DOM. Только после этого XPath находит p в дочернем документе.

- **Вложенный iframe**: фрейм внутри другого фрейма; у каждого свой DOM.
- **Цепочка frameLocator**: последовательный переход через родительский и дочерний документы.
- **Контекст XPath**: текущий документ, в котором выполняется очередной поиск.

## Первый файл: tests/nested-frames/pages/nested_frames_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/nested-frames/pages/nested_frames_page.js)

## Второй файл: tests/nested-frames/helpers/functions_nested_frames.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/nested-frames/helpers/functions_nested_frames.js)

## Третий файл: tests/nested-frames/nested-frames.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/nested-frames/nested-frames.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/nested-frames/nested-frames.spec.js --project=chromium --reporter=list.

Сначала пройдет setup, затем тест этого тренажера. Последняя строка успешного запуска - 2 passed. Тест прочитает "Дочерний фрейм" внутри двух уровней iframe.

```text
2 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/nested-frames/nested-frames.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Во втором frameLocator замените child-frame на missing-frame. Шаг 3 упадет: 1 passed и 1 failed.
- Верните id. Во внутреннем XPath замените child-frame-text на parent-frame-text. Этот p лежит на другом уровне, поэтому шаг 3 упадет: 1 passed и 1 failed.
- Верните XPath: 2 passed.
