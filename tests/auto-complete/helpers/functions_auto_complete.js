import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { AutoCompletePage } from "../pages/auto_complete_page.js";
// Подключаем страницу тренажера.
export async function runAutoCompleteCase(page) {
// Экспортируем один законченный флоу.
  const screen = new AutoCompletePage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Автодополнение", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Автодополнение", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Автодополнение", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.tag).toBeVisible();
// Проверяем, что выбранный цвет стал тегом.
    await expect(screen.input).toHaveValue("");
// После выбора поле должно очиститься.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
