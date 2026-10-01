import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runResizableCase } from "./helpers/functions_resizable.js";
// Подключаем готовый флоу этого тренажера.
test("свободный блок становится шире и выше", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runResizableCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
