import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runButtonsCase } from "./helpers/functions_buttons.js";
// Подключаем готовый флоу этого тренажера.
test("три вида клика дают три результата", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runButtonsCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
