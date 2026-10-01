import { test, expect } from "@playwright/test";
// Подключаем шаги и проверки.
import { SelectablePage } from "../pages/selectable_page.js";
// Подключаем страницу тренажера.
export async function runSelectableCase(page) {
// Экспортируем один самостоятельный флоу.
  const selection = new SelectablePage(page);
  // Создаем объект страницы для текущей вкладки.
  await test.step("Шаг 1. Проверить пустой выбор", async () => {
  // Начинаем проверку исходного состояния.
    await selection.open();
    // Открываем тренажер.
    await expect(selection.heading).toBeVisible();
    // Проверяем заголовок страницы.
    await expect(selection.result).toHaveText("Ничего");
    // До кликов ничего не выбрано.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выбрать два элемента", async () => {
  // Начинаем проверку множественного выбора.
    await selection.chooseFirstAndThird();
    // Выбираем первый и третий пункты.
    await expect(selection.first).toHaveAttribute("aria-pressed", "true");
    // Первый пункт помечен как выбранный.
    await expect(selection.third).toHaveAttribute("aria-pressed", "true");
    // Третий пункт тоже выбран.
    await expect(selection.result).toHaveText("1, 3");
    // Итоговая строка содержит оба номера.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Снять первый элемент", async () => {
  // Начинаем проверку повторного клика.
    await selection.removeFirst();
    // Снимаем только первый пункт.
    await expect(selection.first).toHaveAttribute("aria-pressed", "false");
    // Первый пункт больше не выбран.
    await expect(selection.third).toHaveAttribute("aria-pressed", "true");
    // Третий пункт остается выбранным.
    await expect(selection.result).toHaveText("3");
    // В итоге остался один номер.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
