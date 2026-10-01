import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и проверки.
import { FilesPage } from "../pages/upload_download_page.js";
// Подключаем страницу тренажера.
export async function runFilesCase(page) {
// Экспортируем один законченный флоу.
  const screen = new FilesPage(page);
  // Создаем объект страницы для вкладки теста.
  await test.step("Шаг 1. Открыть Загрузка и скачивание", async () => {
  // Начинаем проверку нужного экрана.
    await screen.open();
    // Открываем тренажер.
    await expect(screen.heading).toBeVisible();
    // Проверяем заголовок страницы.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выполнить действие: Загрузка и скачивание", async () => {
  // Начинаем действие на экране.
    await screen.act();
    // Выполняем действия через страницу.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить результат: Загрузка и скачивание", async () => {
  // Начинаем проверку наблюдаемого результата.
    await expect(screen.uploadedName).toContainText("lesson.txt");
// Проверяем имя выбранного файла на странице.
    const downloadPromise = screen.page.waitForEvent("download");
// Начинаем ждать скачивание до клика.
    await screen.downloadLink.click();
// Нажимаем ссылку скачивания через XPath.
    const download = await downloadPromise;
// Получаем событие завершенного запуска скачивания.
    expect(download.suggestedFilename()).toBe("qa-test-file.txt");
// Проверяем предложенное имя скачанного файла.
  });
  // Завершаем третий шаг.
}
// Завершаем хелпер.
