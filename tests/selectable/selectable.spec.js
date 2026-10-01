import { test } from "@playwright/test";
// Подключаем запуск теста.
import { runSelectableCase } from "./helpers/functions_selectable.js";
// Подключаем хелпер выбора.
test("выбранные элементы появляются в результате", async ({ page }) => {
// Начинаем независимую проверку.
  await runSelectableCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
