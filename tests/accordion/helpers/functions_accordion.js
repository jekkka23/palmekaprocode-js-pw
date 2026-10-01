import { test, expect } from "@playwright/test";
// Подключаем шаги и ассерты.
import { AccordionPage } from "../pages/accordion_page.js";
// Подключаем страницу аккордеона.
export async function runAccordionCase(page) {
// Экспортируем один законченный флоу.
  const accordion = new AccordionPage(page);
  // Создаем объект страницы для текущего теста.
  await test.step("Шаг 1. Проверить закрытый раздел", async () => {
  // Начинаем проверку исходного состояния.
    await accordion.open();
    // Открываем тренажер.
    await expect(accordion.heading).toBeVisible();
    // Проверяем заголовок страницы.
    await expect(accordion.button).toHaveAttribute("aria-expanded", "false");
    // Пункт про автоматизацию пока закрыт.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Раскрыть раздел", async () => {
  // Начинаем проверку открытого состояния.
    await accordion.toggleAutomation();
    // Открываем пункт про автоматизацию.
    await expect(accordion.button).toHaveAttribute("aria-expanded", "true");
    // Кнопка сообщает, что панель открыта.
    await expect(accordion.panel).toContainText("Автоматизация полезна");
    // Проверяем текст именно открытой панели.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Закрыть раздел", async () => {
  // Начинаем проверку обратного перехода.
    await accordion.toggleAutomation();
    // Нажимаем ту же кнопку еще раз.
    await expect(accordion.button).toHaveAttribute("aria-expanded", "false");
    // Кнопка снова сообщает о закрытом состоянии.
    await expect(accordion.panel).toBeHidden();
    // Панель исчезла со страницы.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
