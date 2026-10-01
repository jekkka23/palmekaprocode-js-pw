import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { BrokenResourcesPage } from "../pages/broken_links_page.js";
// Подключаем страницу тренажера.
export async function runBrokenResourcesCase(page) {
// Экспортируем один законченный флоу.
  const screen = new BrokenResourcesPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Битые ссылки и изображения", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Битые ссылки и изображения", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Битые ссылки и изображения", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.validImage).toHaveJSProperty("complete", true);
// Дожидаемся завершения загрузки рабочего файла.
    const width = await screen.validImage.evaluate((image) => image.naturalWidth);
// Читаем фактическую ширину рабочего изображения.
    expect(width).toBeGreaterThan(0);
// Проверяем, что файл действительно загрузился.
    await expect(screen.brokenImage).toHaveJSProperty("naturalWidth", 0);
// Проверяем, что битая картинка не загрузилась.
    await expect(screen.brokenLink).toHaveAttribute("href", "/practice/page-does-not-exist");
// Проверяем адрес битой ссылки.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
