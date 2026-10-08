# 32. Виджеты: подсказки

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-tooltips)

## Зачем это нужно в автотесте

Подсказка здесь рисуется CSS-псевдоэлементом и отсутствует как отдельный HTML-узел. Проверим наведение, текст в data-tip и видимость псевдоэлемента.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте после вкладок. В DevTools изучите кнопку и ее родительский span с data-tip.

Откройте https://palmekaprocode.ru/practice/tooltips под учебным аккаунтом. Найдите button с id tooltip-button. Поднимитесь по DOM к span с class tooltip-wrap и data-tip; текст появляется у его ::after при наведении.

- Создайте tests/tooltips/pages и tests/tooltips/helpers.
- Проверьте, что предыдущий UI-тест проходит. В начале его спеки стоит await login(page) из tests/helpers/login.js.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

XPath выбирает настоящую кнопку и ее родительский span. После hover() читаем видимость ::after через браузерный стиль: самого псевдоэлемента в DOM нет.

- **data-tip**: HTML-атрибут с текстом подсказки.
- **::after**: CSS-псевдоэлемент, через который рисуется подсказка.
- **getComputedStyle**: браузерный способ прочитать итоговое CSS-свойство псевдоэлемента.

## Первый файл: tests/tooltips/pages/tooltips_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/tooltips/pages/tooltips_page.js)

## Второй файл: tests/tooltips/helpers/functions_tooltips.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/tooltips/helpers/functions_tooltips.js)

## Третий файл: tests/tooltips/tooltips.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/tooltips/tooltips.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/tooltips/tooltips.spec.js --project=chromium --reporter=list.

В начале спека вызывает login из файла tests/helpers/login.js. Хелпер сам открывает /login и входит. Последняя строка успешного запуска - 1 passed. Атрибут содержит Подсказка у кнопки, а ::after становится visible.

```text
1 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/tooltips/tooltips.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Уберите hover(). Псевдоэлемент останется hidden, шаг 3 упадет: 1 passed и 1 failed.
- Верните hover и замените ожидаемый data-tip на Подсказка у поля. Шаг 3 упадет: 1 passed и 1 failed.
- Верните текст: 1 passed.
