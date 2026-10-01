import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { SelectMenuPage } from "../pages/select_menu_page.js";
// Подключаем страницу тренажера.
export async function runSelectMenuCase(page) {
// Экспортируем один законченный флоу.
  const screen = new SelectMenuPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Селекты", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Селекты", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Селекты", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.value).toHaveValue("group-two");
// Проверяем первый value.
    await expect(screen.role).toHaveValue("mentor");
// Проверяем роль.
    await expect(screen.colors).toHaveValues(["Красный", "Синий"]);
// Проверяем оба выбранных цвета.
    await expect(screen.result).toContainText("Красный, Синий");
// Проверяем, что форма вывела выбранные цвета.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
