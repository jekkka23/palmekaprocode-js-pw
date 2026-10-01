import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { AlertsPage } from "../pages/alerts_page.js";
// Подключаем страницу тренажера.
export async function runAlertsCase(page) {
// Экспортируем один законченный флоу.
  const screen = new AlertsPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Уведомления", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Уведомления", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Уведомления", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.result).toHaveText("Обычное уведомление закрыто");
// Проверяем сообщение после закрытия alert.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
