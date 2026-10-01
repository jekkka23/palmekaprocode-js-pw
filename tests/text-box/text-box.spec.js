import { test } from "@playwright/test";
// Подключаем запуск теста.
import { runTextBoxCase } from "./helpers/functions_text_box.js";
// Подключаем готовый флоу из соседней папки.
test("форма показывает отправленные имя и почту", async ({ page }) => {
// Начинаем независимый тест с новой вкладкой и сохраненной сессией.
  await runTextBoxCase(page, { name: "Иван Петров", email: "ivan@example.ru" });
  // Передаем входные значения; хелпер их введет и проверит.
});
// Завершаем тест.
