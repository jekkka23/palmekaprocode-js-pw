import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { TooltipsPage } from "../pages/tooltips_page.js";
// Подключаем страницу тренажера.
export async function runTooltipsCase(page) {
// Экспортируем один законченный флоу.
  const screen = new TooltipsPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Подсказки", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Подсказки", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Подсказки", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.wrapper).toHaveAttribute("data-tip", "Подсказка у кнопки");
// Сверяем текст, который CSS использует для подсказки.
    await expect.poll(() => screen.wrapper.evaluate((node) => getComputedStyle(node, "::after").visibility)).toBe("visible");
// Дожидаемся видимости псевдоэлемента после наведения.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
