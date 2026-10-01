import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { ResizablePage } from "../pages/resizable_page.js";
// Подключаем страницу тренажера.
export async function runResizableCase(page) {
// Экспортируем один законченный флоу.
  const screen = new ResizablePage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Изменение размера", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Изменение размера", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Изменение размера", async () => {
  // Начинаем проверку наблюдаемого результата.
    expect(screen.after).not.toBeNull();
// Проверяем, что блок остался на странице.
    expect(screen.after.width).toBeGreaterThan(screen.before.width);
// Сравниваем ширину до и после.
    expect(screen.after.height).toBeGreaterThan(screen.before.height);
// Сравниваем высоту до и после.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
