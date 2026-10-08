# 18. Элементы: загрузка и скачивание

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-upload-download)

## Зачем это нужно в автотесте

Автотест загрузки должен передать файл в input, а автотест скачивания - дождаться события браузера и проверить имя файла. На тренажере сделаем оба действия без файла на диске.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте в palmekaprocode-js-pw после проверки ресурсов. Для выбора создадим файл в памяти через Buffer; браузер увидит его как обычный локальный файл.

Откройте https://palmekaprocode.ru/practice/upload-download под учебным аккаунтом. В Elements найдите input с id upload-file, строку uploaded-file-name и ссылку download-file с атрибутом download.

- Создайте tests/upload-download/pages и tests/upload-download/helpers.
- Проверьте, что предыдущий UI-тест проходит. В начале его спеки стоит await login(page) из tests/helpers/login.js.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

Вместо пути к чужому файлу передаем объект с name, mimeType и buffer. После выбора тренажер показывает имя. Для скачивания сначала создаем ожидание события download, затем нажимаем ссылку через XPath.

- **setInputFiles**: действие Playwright для передачи файла в input type=file.
- **Buffer**: данные файла в памяти без создания файла на диске.
- **download**: событие браузера, которое возникает при скачивании.
- **suggestedFilename**: имя файла, предложенное браузером для сохранения.

## Первый файл: tests/upload-download/pages/upload_download_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/upload-download/pages/upload_download_page.js)

## Второй файл: tests/upload-download/helpers/functions_upload_download.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/upload-download/helpers/functions_upload_download.js)

## Третий файл: tests/upload-download/upload-download.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/upload-download/upload-download.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/upload-download/upload-download.spec.js --project=chromium --reporter=list.

В начале спека вызывает login из файла tests/helpers/login.js. Хелпер сам открывает /login и входит. Последняя строка успешного запуска - 1 passed. Страница покажет lesson.txt, а событие скачивания предложит qa-test-file.txt.

```text
1 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/upload-download/upload-download.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Замените имя загружаемого файла на new-lesson.txt, но не меняйте ассерт. Шаг 3 упадет на имени: 1 passed и 1 failed.
- Верните имя. Замените ожидаемое имя скачивания на wrong.txt. Шаг 3 упадет на последнем ассерте: 1 passed и 1 failed.
- Верните имена: 1 passed.
