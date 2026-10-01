import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { SliderPage } from "../pages/slider_page.js";
// Подключаем страницу тренажера.
export async function runSliderCase(page) {
// Экспортируем один законченный флоу.
  const screen = new SliderPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Слайдер", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Слайдер", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Слайдер", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.range).toHaveValue("1");
// Проверяем значение HTML-поля.
    await expect(screen.value).toHaveText("1");
// Проверяем показанное число.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
