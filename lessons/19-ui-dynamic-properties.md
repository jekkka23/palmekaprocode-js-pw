# 19. Элементы: динамические свойства

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-dynamic-properties)

## Зачем это нужно в автотесте

Элементы могут стать доступными спустя несколько секунд. Тест должен ждать конкретное состояние, а не спать фиксированное время: проверим доступность одной кнопки и появление другой.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте в palmekaprocode-js-pw после урока файлов. Откройте тренажер и посмотрите, как кнопки меняются через 2 и 5 секунд после загрузки.

Откройте https://palmekaprocode.ru/practice/dynamic-properties под учебным аккаунтом. В Elements найдите button с id enable-after и visible-after. Второй отсутствует в DOM до истечения таймера.

- Создайте tests/dynamic-properties/pages и tests/dynamic-properties/helpers.
- Проверьте, что setup из урока авторизации проходит вместе с предыдущим UI-тестом.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

Playwright повторяет ассерт, пока условие не выполнится или не истечет timeout. Для элемента, который появляется через 5 секунд, ставим запас 8 секунд. Код продолжит работу сразу после появления, без waitForTimeout.

- **toBeEnabled**: ассерт, который ждет доступного состояния кнопки.
- **toBeVisible**: ассерт, который ждет появления видимого элемента.
- **timeout**: верхняя граница ожидания, а не обязательная пауза.

## Первый файл: tests/dynamic-properties/pages/dynamic_properties_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/dynamic-properties/pages/dynamic_properties_page.js)

## Второй файл: tests/dynamic-properties/helpers/functions_dynamic_properties.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/dynamic-properties/helpers/functions_dynamic_properties.js)

## Третий файл: tests/dynamic-properties/dynamic-properties.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/dynamic-properties/dynamic-properties.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/dynamic-properties/dynamic-properties.spec.js --project=chromium --reporter=list.

Сначала пройдет setup, затем тест этого тренажера. Последняя строка успешного запуска - 2 passed. Примерно через 2 секунды первая кнопка станет доступной, примерно через 5 секунд появится вторая; итог 2 passed.

```text
2 passed
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- В XPath visible замените visible-after на missing-button. После успешного setup основной тест упадет на шаге 3: 1 passed и 1 failed.
- Верните id. В хелпере замените toBeEnabled({ timeout: 5000 }) на toHaveText("Неверный текст", { timeout: 5000 }). Основной тест упадет на шаге 3: 1 passed и 1 failed.
- Верните исходные ассерты: 2 passed.
