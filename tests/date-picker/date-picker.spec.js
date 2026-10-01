import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runDatePickerCase } from "./helpers/functions_date_picker.js";
// Подключаем готовый флоу этого тренажера.
test("дата и время попадают в результат", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runDatePickerCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
