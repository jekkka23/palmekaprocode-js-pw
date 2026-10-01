import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runBrowserWindowsCase } from "./helpers/functions_browser_windows.js";
// Подключаем готовый флоу этого тренажера.
test("кнопка открывает новую вкладку с текстом", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runBrowserWindowsCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
