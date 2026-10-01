import { test } from "@playwright/test";
// Подключаем запуск самостоятельного теста.
import { runSliderCase } from "./helpers/functions_slider.js";
// Подключаем готовый флоу этого тренажера.
test("клавиши меняют значение слайдера", async ({ page }) => {
// Начинаем тест с новой вкладкой и сохраненной сессией.
  await runSliderCase(page);
  // Выполняем три шага хелпера.
});
// Завершаем независимый тест.
