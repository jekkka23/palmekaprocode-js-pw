import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runDraggableCase } from "./helpers/functions_draggable.js";
// Подключаем готовый флоу этого тренажера.
test("указатель меняет координаты блока", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runDraggableCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
