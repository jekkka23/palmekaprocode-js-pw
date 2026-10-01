import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runSortableCase } from "./helpers/functions_sortable.js";
// Подключаем готовый флоу этого тренажера.
test("перетаскивание меняет порядок карточек", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runSortableCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
