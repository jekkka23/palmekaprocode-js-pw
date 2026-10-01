import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runDroppableCase } from "./helpers/functions_droppable.js";
// Подключаем готовый флоу этого тренажера.
test("зона принимает перетащенный элемент", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runDroppableCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
