import { test } from "@playwright/test";
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.
// Подключаем test, который запускает одну независимую проверку.
import { runTrainingFieldCase } from "./helpers/functions_training_field.js";
// Подключаем флоу из соседней папки helpers.
test("учебное поле открывает текстовые поля", async ({ page }) => {
  await login(page);
  // Вызываем общий хелпер: он открывает /login и входит. Дальше тест открывает тренажер.
// Вкладка новая. Вход уже сделала функция login выше.
  await runTrainingFieldCase(page);
  // Запускаем оба шага хелпера для этой вкладки.
});
// Завершаем один тест; следующий не зависит от его результата.
