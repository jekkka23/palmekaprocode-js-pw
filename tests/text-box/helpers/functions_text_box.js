import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и ассерты.
import { TextBoxPage } from "../pages/text_box_page.js";
// Из helpers переходим в соседнюю папку pages.
export async function runTextBoxCase(page, data) {
// Экспортируем один законченный флоу для спеки.
  const form = new TextBoxPage(page);
  // Создаем объект страницы для вкладки текущего теста.
  await test.step("Шаг 1. Открыть текстовые поля", async () => {
  // Начинаем первый шаг в отчете Playwright.
    await form.open();
    // Открываем тренажер напрямую.
    await expect(form.heading).toBeVisible();
    // Подтверждаем, что открыт нужный экран.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Отправить имя и почту", async () => {
  // Начинаем шаг заполнения и отправки.
    await form.submit(data.name, data.email);
    // Передаем значения из data странице и нажимаем кнопку.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат", async () => {
  // Начинаем проверку ответа формы.
    await expect(form.result).toContainText(data.name);
    // Ожидаем отправленное имя в блоке результата.
    await expect(form.result).toContainText(data.email);
    // Ожидаем отправленную почту в том же блоке.
  });
  // Завершаем проверку; без совпадения тест упадет.
}
// Завершаем хелпер.
