import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runBrokenResourcesCase } from "./helpers/functions_broken_links.js";
// Подключаем готовый флоу этого тренажера.
test("рабочее изображение загружается, битое нет", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runBrokenResourcesCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
