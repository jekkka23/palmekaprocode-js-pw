import { defineConfig } from "@playwright/test";
// Подключаем функцию для настройки Playwright Test.
export default defineConfig({
// Передаем настройки тестового проекта.
  testDir: "./tests",
  // Ищем спеки внутри папки tests.
  use: {
  // Настройки ниже получит каждый тест.
    baseURL: process.env.BASE_URL || "https://palmekaprocode.ru",
    // По умолчанию открываем учебный сайт; BASE_URL позволяет проверить другой адрес.
    browserName: "chromium",
    // Запускаем тест в установленном браузере Chromium.
  },
  // Закрываем общие настройки тестов.
});
// Экспортируем конфиг, чтобы Playwright прочитал его при запуске.
