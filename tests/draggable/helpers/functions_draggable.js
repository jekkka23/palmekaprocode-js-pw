import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { DraggablePage } from "../pages/draggable_page.js";
// Подключаем страницу тренажера.
export async function runDraggableCase(page) {
// Экспортируем один законченный флоу.
  const screen = new DraggablePage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Перетаскивание", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Перетаскивание", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Перетаскивание", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.position).not.toHaveText(screen.before);
// Проверяем, что координаты изменились.
    await expect(screen.position).toContainText("x:");
// Проверяем формат позиции после переноса.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
