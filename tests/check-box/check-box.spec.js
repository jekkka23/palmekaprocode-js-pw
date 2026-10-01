import { test } from "@playwright/test";
// Подключаем запуск теста.
import { runCheckBoxCase } from "./helpers/functions_check_box.js";
// Подключаем флоу проверки чекбоксов.
test("Рабочий стол выбирает Заметки и Команды", async ({ page }) => {
// Начинаем независимый тест с сохраненной сессией.
  await runCheckBoxCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
