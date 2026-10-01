import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { TabsPage } from "../pages/tabs_page.js";
// Подключаем страницу тренажера.
export async function runTabsCase(page) {
// Экспортируем один законченный флоу.
  const screen = new TabsPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Вкладки", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Вкладки", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Вкладки", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.origin).toHaveAttribute("aria-selected", "true");
// Проверяем состояние вкладки.
    await expect(screen.panel).toContainText("Ожидаемый результат берется из требований");
// Проверяем соответствующий текст панели.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
