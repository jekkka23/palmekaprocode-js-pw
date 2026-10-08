import { defineConfig } from "@playwright/test";
// import берет функцию из пакета Playwright.
// defineConfig собирает настройки, по которым запускаются тесты.

export default defineConfig({
// export отдает настройки наружу. default значит: это главная настройка файла.
// Playwright читает этот файл из корня папки palmekaprocode-js-pw.
  testDir: "./tests",
  // testDir — папка, где лежат спеки. Точка значит «папка этого файла», дальше tests.
  reporter: process.env.ALLURE_REPORT ? [["list"], ["allure-playwright", { resultsDir: "allure-results" }]] : [["list"]],
  // reporter — как печатать результат. list пишет каждый тест отдельной строкой.
  // Если в терминале задан ALLURE_REPORT, рядом собирается отчет Allure.
  use: { baseURL: process.env.BASE_URL || "https://palmekaprocode.ru", browserName: "chromium", trace: "retain-on-failure" },
  // use — общие настройки каждой вкладки.
  // baseURL — начало адреса сайта. В спеке можно писать короткий путь, например /login.
  // browserName: "chromium" — тест идет в браузере Chromium.
  // trace: "retain-on-failure" — если тест упал, сохранится запись его шагов.
  projects: [
  // projects — отдельные наборы тестов. У урока их два.
    {
    // Первый набор — обычные учебные спеки.
      name: "chromium",
      // name — имя набора. Его пишут в команде как --project=chromium.
      testMatch: /.*\.spec\.js/,
      // testMatch — какие файлы запускать. Здесь все файлы, имя которых кончается на .spec.js.
      testIgnore: /open-lesson\.spec\.js/,
      // testIgnore — какой файл пропустить. Открытый урок входит своим аккаунтом и лежит отдельно.
    },
    // Вход в этом наборе делает не конфиг, а функция login из tests/helpers/login.js.
    // Спека вызывает ее сама, в начале теста. Сохраненный файл сессии здесь не подкладывается.
    { name: "open-lesson", testMatch: /open-lesson\.spec\.js/, use: { storageState: undefined } },
    // Второй набор запускает только спеку открытого урока.
    // storageState: undefined — у этого набора нет сохраненных куки. Вход написан в его собственном коде.
  ],
  // Закрываем список наборов.
});
// Закрываем настройки.
