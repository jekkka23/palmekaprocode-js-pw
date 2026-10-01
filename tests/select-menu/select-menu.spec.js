import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runSelectMenuCase } from "./helpers/functions_select_menu.js";
// Подключаем готовый флоу этого тренажера.
test("селекты сохраняют одиночный и множественный выбор", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runSelectMenuCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
