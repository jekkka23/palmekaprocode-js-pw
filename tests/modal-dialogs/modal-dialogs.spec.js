import { test } from "@playwright/test";
// Подключаем запуск теста.
import { runModalCase } from "./helpers/functions_modal_dialogs.js";
// Подключаем хелпер окон.
test("маленькое окно открывается и закрывается", async ({ page }) => {
// Начинаем самостоятельную проверку.
  await runModalCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем тест.
