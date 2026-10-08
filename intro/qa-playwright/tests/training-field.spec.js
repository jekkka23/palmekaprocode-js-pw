import { test, expect } from "@playwright/test";
// test объявляет проверку. expect сравнивает факт с ожиданием.
import { login } from "../../../tests/helpers/login.js";
// login — общий вход. Файл лежит в tests/helpers/login.js. Почты и пароля в этой спеке нет.
test("учебный аккаунт открывает тренажер", async ({ page }) => {
// async разрешает await. page — новая пустая вкладка.
  await login(page);
  // Хелпер открывает /login, вводит учетные данные и ждет кабинет.
  await page.getByRole("link", { name: "Тренировочное поле" }).click();
  // Открываем список тренажеров через верхнее меню кабинета.
  await page.locator("#tool-text-box").click();
  // Выбираем карточку "Текстовые поля" по ее id.
  await expect(page.getByRole("heading", { name: "Текстовые поля" })).toBeVisible();
  // Проверяем, что нужный тренажер действительно открылся.
});
// Закрываем тест; Playwright сообщит, прошел ли весь путь до тренажера.
