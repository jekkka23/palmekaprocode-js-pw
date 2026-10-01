import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { NestedFramesPage } from "../pages/nested_frames_page.js";
// Подключаем страницу тренажера.
export async function runNestedFramesCase(page) {
// Экспортируем один законченный флоу.
  const screen = new NestedFramesPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Вложенные фреймы", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Вложенные фреймы", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Вложенные фреймы", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.parent).toHaveCount(1);
// Проверяем наличие одного родительского iframe.
    await expect(screen.childText).toHaveText("Дочерний фрейм");
// Проверяем текст на втором уровне вложенности.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
