import { test, expect } from "@playwright/test";
// Подключаем тесты и проверки.
test("XPath находит родительский чекбокс", async ({ page }) => {
// Начинаем проверку дерева в отдельной вкладке.
  await page.goto("/practice/check-box");
  // Открываем тренажер чекбоксов.
  const desktop = page.locator("xpath=//div[@id='check-box-tree']//label[normalize-space(.)='Рабочий стол']/input[@type='checkbox']");
  // Ищем input внутри label с точной подписью.
  await expect(desktop).toHaveCount(1);
  // Проверяем уникальность составного XPath.
  await desktop.check();
  // Выбираем родительский пункт.
  const notes = page.locator("xpath=//div[@id='check-box-tree']//label[normalize-space(.)='Заметки']/input[@type='checkbox']");
  // Ищем дочерний пункт по его подписи.
  await expect(notes).toBeChecked();
  // Проверяем, что выбор родителя включил Заметки.
  const commands = page.locator("xpath=//div[@id='check-box-tree']//label[normalize-space(.)='Команды']/input[@type='checkbox']");
  // Ищем второй дочерний пункт по подписи.
  await expect(commands).toBeChecked();
  // Проверяем, что выбор родителя включил Команды.
});
// Завершаем проверку дерева.
test("XPath находит строку по ячейке", async ({ page }) => {
// Начинаем независимую проверку таблицы.
  await page.goto("/practice/web-tables");
  // Открываем таблицу с исходными строками.
  const row = page.locator("xpath=//table[@id='records-table']//tr[td[normalize-space(.)='irina@example.ru']]");
  // Ищем всю строку по почте внутри одной ячейки.
  await expect(row).toHaveCount(1);
  // Проверяем, что найдена ровно одна строка.
  await expect(row).toContainText("Ирина");
  // Проверяем имя в найденной строке.
});
// Завершаем проверку таблицы.
