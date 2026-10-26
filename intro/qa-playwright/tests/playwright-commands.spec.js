

//Команды Playwright для автотестов

//Страница: page.goto открывает адрес из baseURL.

//Локатор: page.locator находит элемент; XPath внутри готовых строк подробно разберем позже.

//Действие: fill, click, check и selectOption меняют состояние страницы.

//Проверка: expect сравнивает фактическое состояние с ожидаемым и ждет его появления.

//Другие возможности: hover, press, работа с новыми вкладками, загрузка файлов, скриншоты и API будут в следующих разделах.



//page вкладка браузера, которую Playwright передает тесту; у нее есть адрес и содержимое.

//locator объект для поиска конкретного элемента; строку xpath=... пока берем готовой, составлять ее научимся позже.

//fill заменяет содержимое текстового поля заданной строкой.

//click нажимает кнопку или ссылку после ожидания ее доступности.

//check переводит чекбокс в выбранное состояние; повторный вызов не снимет галочку.

//selectOption выбирает option внутри HTML-списка select по ее value.

//expect начинает проверку; toHaveValue, toHaveText и toBeChecked ждут нужного состояния.

//clear() - очистить поле.

//click() / dblclick() - обычный / двойной клик.

//check() / uncheck() - поставить / снять галочку.

//press("Enter") - нажать клавишу.

//hover() - навести указатель.

//setInputFiles() - загрузить файл.

//Как читать цепочку команд

//В выражении page.locator("xpath=//input[@id='full-name']").fill("Анна Тестовая") первая часть находит поле, а fill записывает в него текст. await дожидается завершения действия. 
//Затем expect(...).toHaveValue(...) проверяет, что браузер действительно хранит нужную строку.

//Клик по "Отправить" только запускает действие. Итог проверяем отдельно в блоке результата. 
// check выбирает родительский пункт "Рабочий стол", после чего проверяем дочерние "Заметки" и "Команды". 
// selectOption получает значение option "mentor", а не видимую подпись "Наставник".

//page.goto("/practice/text-box") - открыть тренажер с учетом baseURL.

//locator.fill("...") и expect(locator).toHaveValue("...") - действие и проверка поля.

//locator.click() и expect(result).toContainText("...") - действие и проверка ответа.

//locator.check() и expect(locator).toBeChecked() - выбрать и проверить галочку.

//locator.selectOption("mentor") и expect(locator).toHaveValue("mentor") - выбрать и проверить HTML-список.



//Команды в терминале

//npx playwright test intro/qa-playwright/tests/playwright-commands.spec.js --config intro/qa-playwright/playwright.config.js --reporter=list 
// - выполнить только новый файл и увидеть построчный отчет.

//npx playwright test intro/qa-playwright/tests/playwright-commands.spec.js --config intro/qa-playwright/playwright.config.js --headed --reporter=list 
// - выполнить тот же тест с видимым окном браузера.

import { test, expect } from "@playwright/test";
// test объявляет проверку. expect сравнивает факт с ожиданием.

import { login } from "../../../tests/helpers/login.js";
// login — общий вход. Файл лежит в tests/helpers/login.js.

test("команды Playwright проверяют три тренажера", async ({ page }) => {
// async разрешает await. page — новая пустая вкладка.

  await login(page);
  console.log("выполнен вход");
  // Хелпер открывает /login и входит. Дальше идут команды по тренажерам.

  await page.goto("/practice/text-box");
  console.log("открыта текстовая форма");
  // Переходим к текстовой форме. Вход уже сделала функция login выше.
  const name = page.locator("xpath=//input[@id='full-name']");
  // Сохраняем локатор поля имени; как составить XPath, узнаем в отдельном блоке.

  const email = page.locator("xpath=//input[@id='user-email']");
  // Сохраняем локатор поля почты.

  await name.fill("Анна Тестовая");
  console.log("введено имя");
  // Заменяем содержимое поля именем ученицы.

  await email.fill("anna@example.ru");
  console.log("введена почта");
  // Вводим почту в обязательное поле.

  await expect(name).toHaveValue("Анна Тестовая");
  console.log("проверено значение имени");
  // Проверяем значение input до отправки формы.

  await page.locator("xpath=//button[@id='submit-text-box']").click();
  console.log("нажата кнопка отправки");
  // Отправляем заполненную форму.

  await expect(page.locator("xpath=//div[@id='text-box-output']")).toContainText("anna@example.ru");
  console.log("проверена почта в результате");
  // Проверяем почту в появившемся блоке результата.

  await page.goto("/practice/check-box");
  console.log("открыты чекбоксы");
  // Открываем дерево чекбоксов, не повторяя вход внутри этого теста.

  await page.locator("xpath=//input[@id='check-desktop']").check();
  console.log("выбран рабочий стол");
  // Выбираем Рабочий стол: сайт также отметит дочерние пункты.

  await expect(page.locator("xpath=//input[@id='check-notes']")).toBeChecked();
  console.log("проверен выбор заметок");
  // Проверяем выбранные Заметки.

  await expect(page.locator("xpath=//input[@id='check-commands']")).toBeChecked();
  console.log("проверен выбор команд");
  // Проверяем выбранные Команды.

  await expect(page.locator("xpath=//div[@id='check-box-result']/p")).toHaveText("Рабочий стол, Заметки, Команды");
  console.log("проверен результат выбора чекбоксов");
  // Сверяем полный результат выбора.

  await page.goto("/practice/select-menu");
  console.log("открыт список ролей");
  // Открываем тренажер списков в той же вкладке.

  const role = page.locator("xpath=//select[@id='select-role']");
  // Находим список ролей по готовому XPath.

  await role.selectOption("mentor");
  console.log("выбрана роль наставника");
  // Выбираем option с value mentor, который показывается как Наставник.

  await expect(role).toHaveValue("mentor");
  console.log("проверено значение роли");
  // Проверяем значение HTML-списка.

  await expect(page.locator("xpath=//div[@id='select-result']")).toContainText("Роль: mentor");
  console.log("проверена роль в результате");
  // Сверяем значение, выведенное приложением в результате.
});
// Завершаем самостоятельный тест.












