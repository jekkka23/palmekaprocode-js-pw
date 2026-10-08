import { test, expect } from "@playwright/test";
// import берет test и expect из Playwright.
// test объявляет проверку. expect сравнивает факт с ожиданием.
import { login } from "./helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
test("хелпер входа открывает тренажер", async ({ page }) => {
// test("...") дает проверке имя, которое видно в отчете.
// async разрешает await. page — новая пустая вкладка, входа в ней еще нет.
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит.
  await page.goto("/practice/text-box");
  // goto открывает тренажер «Текстовые поля». Хвост адреса добавляется к baseURL.
  await expect(page.getByRole("heading", { name: "Текстовые поля" })).toBeVisible();
  // getByRole("heading") ищет заголовок. name — его текст.
  // toBeVisible ждет, пока заголовок появится. Если сайт уведет на вход, проверки не будет.
});
// Закрываем тест.
