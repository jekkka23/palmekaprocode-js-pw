import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runAlertsCase } from "./helpers/functions_alerts.js";
// Подключаем готовый флоу этого тренажера.
test("alert закрывается и показывает результат", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runAlertsCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
