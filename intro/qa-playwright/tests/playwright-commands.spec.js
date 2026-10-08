import { test, expect } from "@playwright/test";
// test объявляет проверку. expect сравнивает факт с ожиданием.
import { login } from "../../../tests/helpers/login.js";
// login — общий вход. Файл лежит в tests/helpers/login.js. Почты и пароля в этой спеке нет.
test("команды Playwright проверяют три тренажера", async ({ page }) => {
// async разрешает await. page — новая пустая вкладка.
  await login(page);
  // Хелпер открывает /login и входит. Дальше идут команды по тренажерам.
  await page.goto("/practice/text-box");
  // Переходим к текстовой форме. Вход уже сделала функция login выше.
  const name = page.locator("xpath=//input[@id='full-name']");
  // Сохраняем локатор поля имени; как составить XPath, узнаем в отдельном блоке.
  const email = page.locator("xpath=//input[@id='user-email']");
  // Сохраняем локатор поля почты.
  await name.fill("Анна Тестовая");
  // Заменяем содержимое поля именем ученицы.
  await email.fill("anna@example.ru");
  // Вводим почту в обязательное поле.
  await expect(name).toHaveValue("Анна Тестовая");
  // Проверяем значение input до отправки формы.
  await page.locator("xpath=//button[@id='submit-text-box']").click();
  // Отправляем заполненную форму.
  await expect(page.locator("xpath=//div[@id='text-box-output']")).toContainText("anna@example.ru");
  // Проверяем почту в появившемся блоке результата.
  await page.goto("/practice/check-box");
  // Открываем дерево чекбоксов, не повторяя вход внутри этого теста.
  await page.locator("xpath=//input[@id='check-desktop']").check();
  // Выбираем Рабочий стол: сайт также отметит дочерние пункты.
  await expect(page.locator("xpath=//input[@id='check-notes']")).toBeChecked();
  // Проверяем выбранные Заметки.
  await expect(page.locator("xpath=//input[@id='check-commands']")).toBeChecked();
  // Проверяем выбранные Команды.
  await expect(page.locator("xpath=//div[@id='check-box-result']/p")).toHaveText("Рабочий стол, Заметки, Команды");
  // Сверяем полный результат выбора.
  await page.goto("/practice/select-menu");
  // Открываем тренажер списков в той же вкладке.
  const role = page.locator("xpath=//select[@id='select-role']");
  // Находим список ролей по готовому XPath.
  await role.selectOption("mentor");
  // Выбираем option с value mentor, который показывается как Наставник.
  await expect(role).toHaveValue("mentor");
  // Проверяем значение HTML-списка.
  await expect(page.locator("xpath=//div[@id='select-result']")).toContainText("Роль: mentor");
  // Сверяем значение, выведенное приложением в результате.
});
// Завершаем самостоятельный тест.
