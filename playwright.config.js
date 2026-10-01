import { defineConfig } from "@playwright/test";
// Подключаем функцию настройки Playwright Test.
export default defineConfig({
// Передаем настройки всего учебного проекта.
  testDir: "./tests",
  // Ищем тесты в папке tests.
  use: { baseURL: process.env.BASE_URL || "https://palmekaprocode.ru", browserName: "chromium", trace: "retain-on-failure" },
  // Адрес можно переопределить извне; trace сохранится после падения.
  projects: [
  // Разделяем подготовку входа и проверку тренажера.
    { name: "setup", testMatch: /.*\.setup\.js/ },
    // Только файлы с окончанием .setup.js выполняют вход.
    {
    // Начинаем настройки проекта основных тестов.
      name: "chromium",
      // Так проект будет называться в выводе Playwright.
      testMatch: /.*\.spec\.js/ ,
      // Здесь запускаются обычные файлы с окончанием .spec.js.
      use: { storageState: "playwright/.auth/student.json" },
      // Новый контекст получает cookies из файла setup.
      dependencies: ["setup"],
      // Сначала должен успешно завершиться подготовительный проект.
    },
    // Закрываем настройки основных тестов.
  ],
  // Закрываем список проектов.
});
// Экспортируем готовый конфиг для Playwright.
