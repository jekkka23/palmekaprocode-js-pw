

import { test } from "@playwright/test";
// Подключаем test, который запускает одну независимую проверку.
import { login } from "../helpers/login.js";
// подключаем общий хелпер входа в учебный аккаунт.
import { runTrainingFieldCase } from "./helpers/functions_training_field.js";
// Подключаем флоу из соседней папки helpers.



test("учебное поле открывает текстовые поля", async ({ page }) => {
  // Playwright передает новую вкладку без готовой сессии.
  await login(page);
  // входим в учебный аккаунт перед открытием тренировочного поля.
  await runTrainingFieldCase(page);
  // Запускаем оба шага хелпера для этой вкладки.
});
// Завершаем один тест; следующий не зависит от его результата.
