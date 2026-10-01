import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { LinksPage } from "../pages/links_page.js";
// Подключаем страницу тренажера.
export async function runLinksCase(page) {
// Экспортируем один законченный флоу.
  const screen = new LinksPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Ссылки", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Ссылки", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Ссылки", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.page).toHaveURL(/\/practice$/);
// Проверяем адрес после перехода.
    await expect(screen.fieldHeading).toBeVisible();
// Проверяем заголовок страницы назначения.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
