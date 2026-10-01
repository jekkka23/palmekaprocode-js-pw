import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runFilesCase } from "./helpers/functions_upload_download.js";
// Подключаем готовый флоу этого тренажера.
test("файл выбирается и скачивается", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runFilesCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
