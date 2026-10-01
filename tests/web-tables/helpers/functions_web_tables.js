import { test, expect } from "@playwright/test";
// Подключаем шаги и ассерты.
import { WebTablesPage } from "../pages/web_tables_page.js";
// Подключаем страницу таблицы.
export async function runRecordCase(page, data) {
// Экспортируем флоу с записью из спеки.
  const table = new WebTablesPage(page);
  // Создаем объект страницы для текущей вкладки.
  await test.step("Шаг 1. Открыть веб-таблицу", async () => {
  // Начинаем проверку исходного экрана.
    await table.open();
    // Открываем тренажер.
    await expect(table.heading).toBeVisible();
    // Проверяем заголовок таблицы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Создать запись", async () => {
  // Начинаем подготовку тестовых данных.
    await table.addRecord(data);
    // Заполняем форму и сохраняем строку.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить новую строку", async () => {
  // Начинаем проверку результата.
    const row = table.rowWithEmail(data.email);
    // Находим строку по почте из тех же тестовых данных.
    await expect(row).toContainText(data.firstName);
    // Проверяем имя в найденной строке.
    await expect(row).toContainText(data.email);
    // Проверяем почту в той же строке.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
