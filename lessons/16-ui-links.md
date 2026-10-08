# 16. Элементы: ссылки

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-links)

## Зачем это нужно в автотесте

Ссылка должна вести на ожидаемый адрес, а не просто быть видимой. Тест нажмет ссылку возврата к тренажерам и проверит новый URL и заголовок страницы.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте в palmekaprocode-js-pw после кнопок. Эта ссылка открывается в той же вкладке, поэтому проверка продолжится с тем же page.

Откройте https://palmekaprocode.ru/practice/links под учебным аккаунтом. В Elements найдите a с id practice-link внутри links-playground и его href=/practice. Сравните это с адресом после клика.

- Создайте tests/links/pages и tests/links/helpers.
- Проверьте, что предыдущий UI-тест проходит. В начале его спеки стоит await login(page) из tests/helpers/login.js.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

У ссылки practice-link атрибут href ведет на /practice. После клика проверяем сам переход через toHaveURL и заголовок списка тренажеров через XPath.

- **href**: адрес перехода в HTML-ссылке a.
- **toHaveURL**: ассерт Playwright для адреса текущей вкладки.
- **Навигация**: переход на другую страницу после клика по ссылке.

## Первый файл: tests/links/pages/links_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/links/pages/links_page.js)

## Второй файл: tests/links/helpers/functions_links.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/links/helpers/functions_links.js)

## Третий файл: tests/links/links.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/links/links.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/links/links.spec.js --project=chromium --reporter=list.

В начале спека вызывает login из файла tests/helpers/login.js. Хелпер сам открывает /login и входит. Последняя строка успешного запуска - 1 passed. Текущая вкладка перейдет на /practice и покажет список тренажеров.

```text
1 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/links/links.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Замените XPath practiceLink на путь с id missing-link. Основной тест упадет на шаге 2: 1 passed и 1 failed.
- Верните XPath. В хелпере поменяйте ожидаемый адрес на /account. Шаг 3 упадет: 1 passed и 1 failed.
- Верните адрес: 1 passed.
