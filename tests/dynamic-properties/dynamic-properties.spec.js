import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runDynamicPropertiesCase } from "./helpers/functions_dynamic_properties.js";
// Подключаем готовый флоу этого тренажера.
test("кнопки становятся доступными без паузы", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runDynamicPropertiesCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
