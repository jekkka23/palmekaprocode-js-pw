import { test } from "@playwright/test";
// Подключаем test, который запускает одну независимую проверку.
import { runTrainingFieldCase } from "./helpers/functions_training_field.js";
// Подключаем флоу из соседней папки helpers.
test("учебное поле открывает текстовые поля", async ({ page }) => {
// Playwright передает новую вкладку с сессией учебного аккаунта.
  await runTrainingFieldCase(page);
  // Запускаем оба шага хелпера для этой вкладки.
});
// Завершаем один тест; следующий не зависит от его результата.
