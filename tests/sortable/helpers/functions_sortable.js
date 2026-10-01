import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { SortablePage } from "../pages/sortable_page.js";
// Подключаем страницу тренажера.
export async function runSortableCase(page) {
// Экспортируем один законченный флоу.
  const screen = new SortablePage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Сортировка", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Сортировка", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Сортировка", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.result).toHaveText("Два - Три - Один - Четыре - Пять - Шесть");
// Проверяем полный новый порядок.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
