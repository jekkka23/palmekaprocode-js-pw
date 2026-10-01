import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { ProgressBarPage } from "../pages/progress_bar_page.js";
// Подключаем страницу тренажера.
export async function runProgressBarCase(page) {
// Экспортируем один законченный флоу.
  const screen = new ProgressBarPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Прогресс-бар", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Прогресс-бар", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Прогресс-бар", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.bar).not.toHaveAttribute("aria-valuenow", "0");
// Ждем фактического изменения вместо фиксированной паузы.
    await screen.reset.click();
// Останавливаем и сбрасываем прогресс.
    await expect(screen.bar).toHaveAttribute("aria-valuenow", "0");
// Проверяем ноль после сброса.
    await expect(screen.start).toHaveText("Запустить");
// Проверяем исходное название кнопки.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
