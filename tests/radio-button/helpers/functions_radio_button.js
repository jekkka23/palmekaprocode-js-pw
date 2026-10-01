import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { RadioButtonPage } from "../pages/radio_button_page.js";
// Подключаем страницу тренажера.
export async function runRadioButtonCase(page) {
// Экспортируем один законченный флоу.
  const screen = new RadioButtonPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Радиокнопки", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Радиокнопки", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Радиокнопки", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.yes).toBeChecked();
// Проверяем выбранное состояние ответа Да.
    await expect(screen.no).toBeDisabled();
// Проверяем, что вариант Нет недоступен.
    await expect(screen.result).toHaveText("Вы выбрали: Да");
// Сверяем точный текст результата.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
