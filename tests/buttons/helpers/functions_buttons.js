import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { ButtonsPage } from "../pages/buttons_page.js";
// Подключаем страницу тренажера.
export async function runButtonsCase(page) {
// Экспортируем один законченный флоу.
  const screen = new ButtonsPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Кнопки", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Кнопки", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Кнопки", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.result).toContainText("Выполнен обычный клик");
// Проверяем сообщение обычного клика.
    await expect(screen.result).toContainText("Выполнен двойной клик");
// Проверяем сообщение двойного клика.
    await expect(screen.result).toContainText("Выполнен правый клик");
// Проверяем сообщение правого клика.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
