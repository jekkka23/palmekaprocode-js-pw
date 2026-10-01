import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runNestedFramesCase } from "./helpers/functions_nested_frames.js";
// Подключаем готовый флоу этого тренажера.
test("XPath проходит в дочерний iframe", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runNestedFramesCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
