# 30. Виджеты: прогресс-бар

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-progress-bar)

## Зачем это нужно в автотесте

Прогресс идет асинхронно, поэтому фиксированная пауза сделает тест хрупким. Подождем изменения aria-valuenow, сбросим шкалу и проверим возврат к нулю.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте после слайдера. Убедитесь, что видите кнопки Запустить и Сбросить.

Откройте https://palmekaprocode.ru/practice/progress-bar под учебным аккаунтом. Найдите div с id progress-bar и атрибутом aria-valuenow, кнопки start-progress и reset-progress.

- Создайте tests/progress-bar/pages и tests/progress-bar/helpers.
- Проверьте, что setup из урока авторизации проходит вместе с предыдущим UI-тестом.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

Playwright сам повторяет проверку, пока число не станет больше нуля. После сброса проверяем точное значение 0 без ручного sleep.

- **aria-valuenow**: текущее число прогресса в доступном HTML.
- **not.toHaveAttribute**: ожидание, пока значение атрибута перестанет равняться заданному.
- **Сброс**: действие, которое возвращает прогресс к 0 и останавливает таймер.

## Первый файл: tests/progress-bar/pages/progress_bar_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/progress-bar/pages/progress_bar_page.js)

## Второй файл: tests/progress-bar/helpers/functions_progress_bar.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/progress-bar/helpers/functions_progress_bar.js)

## Третий файл: tests/progress-bar/progress-bar.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/progress-bar/progress-bar.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/progress-bar/progress-bar.spec.js --project=chromium --reporter=list.

Сначала пройдет setup, затем тест этого тренажера. Последняя строка успешного запуска - 2 passed. Прогресс успеет измениться, затем вернется к 0 и снова покажет Запустить.

```text
2 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/progress-bar/progress-bar.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Уберите reset.click(). В шаге 3 значение не станет 0: 1 passed и 1 failed.
- Верните сброс. Замените ожидание кнопки на Остановить. Шаг 3 упадет: 1 passed и 1 failed.
- Верните Запустить: 2 passed.
