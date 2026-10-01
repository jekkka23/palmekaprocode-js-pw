import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runFramesCase } from "./helpers/functions_frames.js";
// Подключаем готовый флоу этого тренажера.
test("XPath находит текст внутри iframe", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runFramesCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
