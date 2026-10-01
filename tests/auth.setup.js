import { mkdirSync } from "node:fs";
// Подключаем mkdirSync, чтобы создать папку для файла сессии.
import { test, expect } from "@playwright/test";
// test объявляет проверку, expect дожидается ожидаемого результата.
test("сохранить вход учебного аккаунта", async ({ page }) => {
// Начинаем setup; page - новая страница браузера без готового входа.
  if (process.env.CI && (!process.env.QA_EMAIL || !process.env.QA_PASSWORD)) throw new Error("Задайте QA_EMAIL и QA_PASSWORD в secrets");
  // В GitHub Actions без секретов останавливаемся до входа под учебным аккаунтом.
  await page.goto("/login");
  // Открываем форму входа на сайте из baseURL.
  await page.getByLabel("Электронная почта").fill(process.env.QA_EMAIL || "test-auto@palmekaprocode.ru");
  // Локально берем учебную почту; в GitHub Actions читаем QA_EMAIL из секрета.
  await page.getByLabel("Пароль", { exact: true }).fill(process.env.QA_PASSWORD || "test-auto");
  // Локально берем учебный пароль; для другого аккаунта задаем QA_PASSWORD извне.
  await page.getByRole("button", { name: "Войти" }).click();
  // Отправляем форму входа.
  await expect(page).toHaveURL((process.env.BASE_URL || "https://palmekaprocode.ru") + "/account");
  // Ждем кабинет на том же адресе, который задан в конфиге.
  await expect(page.getByRole("link", { name: "Тренировочное поле" })).toBeVisible();
  // Проверяем, что учебный аккаунт действительно видит доступ к полю.
  mkdirSync("playwright/.auth", { recursive: true });
  // Создаем папку; повторный запуск не вызовет ошибку благодаря recursive: true.
  await page.context().storageState({ path: "playwright/.auth/student.json" });
  // Сохраняем cookies текущего контекста в файл для следующих тестов.
});
// Закрываем setup; после него появится student.json.
