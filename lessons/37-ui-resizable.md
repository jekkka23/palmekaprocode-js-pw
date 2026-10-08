# 37. Взаимодействия: изменение размера

[Открыть урок на сайте](https://palmekaprocode.ru/courses/qa-auto-javascript/lessons/ui-resizable)

## Зачем это нужно в автотесте

Блок с resize: both должен менять размеры после перетаскивания правого нижнего угла. Снимем размеры до действия и сравним их с размерами после.

- Подготовить нужное состояние
- Выполнить действие через XPath
- Сравнить наблюдаемый результат с ожиданием

## Что подготовить

Продолжайте после сортировки. В тренажере есть ограниченный и свободный блок; для первого теста возьмем свободный. Перед движением мыши прокрутим блок выше нижнего баннера.

Откройте https://palmekaprocode.ru/practice/resizable под учебным аккаунтом. Найдите div с id resize-box-free. В Styles проверьте resize: both; ручка изменения находится у правого нижнего края.

- Создайте tests/resizable/pages и tests/resizable/helpers.
- Проверьте, что предыдущий UI-тест проходит. В начале его спеки стоит await login(page) из tests/helpers/login.js.
- Конфиг Playwright и вход не копируйте в новую спеку.

## Новые термины

XPath выбирает блок. После чтения boundingBox ведем мышь от его нижнего правого угла на 80 пикселей вправо и 50 вниз, затем сравниваем новые размеры.

- **boundingBox**: координаты и размеры элемента в окне браузера.
- **mouse.move**: перемещение указателя по координатам окна.
- **resize: both**: CSS-свойство, разрешающее менять ширину и высоту блока.

## Первый файл: tests/resizable/pages/resizable_page.js

Создайте страницу тренажера. Все ее локаторы начинаются с xpath=; нужные атрибуты и текст найдены в DOM этого экрана.

[Открыть готовый файл](../tests/resizable/pages/resizable_page.js)

## Второй файл: tests/resizable/helpers/functions_resizable.js

Хелпер дает шагам имена и проверяет результат после действия страницы.

[Открыть готовый файл](../tests/resizable/helpers/functions_resizable.js)

## Третий файл: tests/resizable/resizable.spec.js

Спека содержит один самостоятельный test и вызывает только хелпер своего тренажера.

[Открыть готовый файл](../tests/resizable/resizable.spec.js)

## Как запустить и что увидеть

Сохраните три файла. В корне palmekaprocode-js-pw выполните npx playwright test tests/resizable/resizable.spec.js --project=chromium --reporter=list.

В начале спека вызывает login из файла tests/helpers/login.js. Хелпер сам открывает /login и входит. Последняя строка успешного запуска - 1 passed. Свободный блок станет шире и выше исходного.

```text
1 passed
```

## Команды для копирования

Выполняйте команды из корня palmekaprocode-js-pw. Копируйте строку целиком, без текста пояснения.

**Запустить тест этого урока**

```bash
npx playwright test tests/resizable/resizable.spec.js --project=chromium --reporter=list
```

## Что поменять для проверки понимания

Меняйте одну строку за раз. Сначала предскажите шаг и итог, затем запустите ту же команду и верните исходный код.

- Уберите mouse.down(). Размер не изменится, шаг 3 упадет: 1 passed и 1 failed.
- Верните mouse.down и замените проверку ширины на toBeLessThan. Шаг 3 упадет: 1 passed и 1 failed.
- Верните toBeGreaterThan: 1 passed.
