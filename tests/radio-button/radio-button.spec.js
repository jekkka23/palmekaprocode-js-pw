import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runRadioButtonCase } from "./helpers/functions_radio_button.js";
// Подключаем готовый флоу этого тренажера.
test("радиокнопка показывает выбранный ответ", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runRadioButtonCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
