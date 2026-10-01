import { test, expect } from "@playwright/test";
// Подключаем шаги и проверки.
import { ModalDialogsPage } from "../pages/modal_dialogs_page.js";
// Подключаем страницу окон.
export async function runModalCase(page) {
// Экспортируем один законченный флоу.
  const modal = new ModalDialogsPage(page);
  // Создаем объект страницы.
  await test.step("Шаг 1. Открыть тренажер окон", async () => {
  // Начинаем проверку исходного экрана.
    await modal.open();
    // Открываем тренажер.
    await expect(modal.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Проверить маленькое окно", async () => {
  // Начинаем проверку открытого состояния.
    await modal.showSmall();
    // Открываем маленькое окно.
    await expect(modal.smallDialog).toBeVisible();
    // Дожидаемся появления нужного диалога.
    await expect(modal.smallDialog).toContainText("Короткий текст для проверки открытия и закрытия.");
    // Проверяем содержимое диалога.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Закрыть маленькое окно", async () => {
  // Начинаем проверку закрытого состояния.
    await modal.closeSmall();
    // Нажимаем кнопку с текстом Закрыть.
    await expect(modal.smallDialog).toBeHidden();
    // Дожидаемся исчезновения окна.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
