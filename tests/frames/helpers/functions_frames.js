import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { FramesPage } from "../pages/frames_page.js";
// Подключаем страницу тренажера.
export async function runFramesCase(page) {
// Экспортируем один законченный флоу.
  const screen = new FramesPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Фреймы", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Фреймы", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Фреймы", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.frame).toHaveCount(1);
// Проверяем один iframe на основной странице.
    await expect(screen.frameHeading).toHaveText("Первый фрейм");
// Проверяем текст в отдельном DOM фрейма.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
