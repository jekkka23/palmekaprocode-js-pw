import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { DroppablePage } from "../pages/droppable_page.js";
// Подключаем страницу тренажера.
export async function runDroppableCase(page) {
// Экспортируем один законченный флоу.
  const screen = new DroppablePage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Зона сброса", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Зона сброса", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Зона сброса", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.zone).toHaveText("Элемент принят");
// Проверяем текст успешного сброса.
    await expect(screen.zone).toHaveClass(/dropped/);
// Проверяем новый класс зоны.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
