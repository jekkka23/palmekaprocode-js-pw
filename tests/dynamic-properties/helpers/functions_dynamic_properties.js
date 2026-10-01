import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { DynamicPropertiesPage } from "../pages/dynamic_properties_page.js";
// Подключаем страницу тренажера.
export async function runDynamicPropertiesCase(page) {
// Экспортируем один законченный флоу.
  const screen = new DynamicPropertiesPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Динамические свойства", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Динамические свойства", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Динамические свойства", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.enabled).toBeEnabled({ timeout: 5000 });
// Ждем, пока кнопка станет доступной после таймера.
    await expect(screen.visible).toBeVisible({ timeout: 8000 });
// Ждем появления второй кнопки с запасом времени.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
