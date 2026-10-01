import { test } from "@playwright/test";
// Подключаем запуск теста.
import { runAccordionCase } from "./helpers/functions_accordion.js";
// Подключаем флоу аккордеона.
test("аккордеон открывает и закрывает раздел", async ({ page }) => {
// Начинаем самостоятельный тест.
  await runAccordionCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
