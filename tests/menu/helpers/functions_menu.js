import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { MenuPage } from "../pages/menu_page.js";
// Подключаем страницу тренажера.
export async function runMenuCase(page) {
// Экспортируем один законченный флоу.
  const screen = new MenuPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Меню", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Меню", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Меню", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.android).toBeVisible();
// Проверяем, что ссылка Android показана.
    await expect(screen.android).toHaveText("Android");
// Проверяем конкретный пункт меню.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
