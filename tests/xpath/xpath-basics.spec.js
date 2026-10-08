import { test, expect } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем запуск теста и проверки Playwright.
test("XPath находит поля и результат", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Начинаем тест. Вход уже сделала функция login выше.
  await page.goto("/practice/text-box");
  // Открываем тренажер текстовых полей.
  const name = page.locator("xpath=//form[@id='text-box-form']//input[@id='full-name']");
  // Ищем input с id full-name внутри нужной формы.
  await expect(name).toHaveCount(1);
  // Проверяем, что XPath нашел ровно одно поле имени.
  await name.fill("Иван Петров");
  // Заполняем найденное поле известным именем.
  const email = page.locator("xpath=//form[@id='text-box-form']//input[@type='email']");
  // Ищем поле почты по типу внутри той же формы.
  await expect(email).toHaveCount(1);
  // Проверяем уникальность второго XPath.
  await email.fill("ivan@example.ru");
  // Вводим допустимую электронную почту.
  const submit = page.locator("xpath=//form[@id='text-box-form']//button[@type='submit']");
  // Ищем кнопку отправки только внутри формы.
  await submit.click();
  // Отправляем форму, чтобы появился результат.
  const result = page.locator("xpath=//div[@id='text-box-output']");
  // Находим блок результата по его id после отправки.
  await expect(result).toContainText("Иван Петров");
  // Проверяем имя в результате.
  await expect(result).toContainText("ivan@example.ru");
  // Проверяем почту в том же блоке.
});
// Завершаем тест.
