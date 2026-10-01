import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { DatePickerPage } from "../pages/date_picker_page.js";
// Подключаем страницу тренажера.
export async function runDatePickerCase(page) {
// Экспортируем один законченный флоу.
  const screen = new DatePickerPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Выбор даты", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Выбор даты", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Выбор даты", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.date).toHaveValue("2026-10-01");
// Проверяем значение первого поля.
    await expect(screen.dateTime).toHaveValue("2026-10-01T12:30");
// Проверяем значение второго поля.
    await expect(screen.result).toContainText("2026-10-01T12:30");
// Сверяем итоговый блок с введенным временем.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
