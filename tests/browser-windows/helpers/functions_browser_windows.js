import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { BrowserWindowsPage } from "../pages/browser_windows_page.js";
// Подключаем страницу тренажера.
export async function runBrowserWindowsCase(page) {
// Экспортируем один законченный флоу.
  const screen = new BrowserWindowsPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Окна браузера", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Окна браузера", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Окна браузера", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.popup.locator("xpath=//h1[normalize-space(.)='Новая вкладка']")).toBeVisible();
// Находим заголовок уже внутри новой вкладки.
    await expect(screen.popup.locator("xpath=//p[contains(normalize-space(.), 'отдельная страница')]")).toBeVisible();
// Проверяем поясняющий текст новой страницы.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
