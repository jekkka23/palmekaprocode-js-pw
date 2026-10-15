import { test, expect } from "@playwright/test";
// test объявляет проверку. expect сравнивает факт с ожиданием.
import { login } from "../../../tests/helpers/login.js";
// login — общий вход. Файл лежит в tests/helpers/login.js. Почты и пароля в этой спеке нет.
test("учебный аккаунт открывает тренажер", async ({ page }) => {
// async разрешает await. page — новая пустая вкладка.
  await login(page);
  // Хелпер открывает /login, вводит учетные данные и ждет кабинет.
  await page.locator("xpath=//header//a[@href='/practice']").click();
  // Находим ссылку на поле внутри верхнего меню по XPath и нажимаем ее.
  await page.locator("xpath=//a[@id='tool-text-box']").click();
  // Выбираем карточку "Текстовые поля" по XPath с ее id.
  await expect(page.locator("xpath=//h1[normalize-space(.)='Текстовые поля']")).toBeVisible();
  // По XPath находим заголовок с нужным текстом и ждем, что он виден.
});
// Закрываем тест; Playwright сообщит, прошел ли весь путь до тренажера.
