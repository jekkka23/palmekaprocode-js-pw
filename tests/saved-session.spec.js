import { test, expect } from "@playwright/test";
// Подключаем test и проверки Playwright.
test("сохраненная сессия открывает тренажер", async ({ page }) => {
// Начинаем новый тест; page получает сессию из student.json через конфиг.
  await page.goto("/practice/text-box");
  // Сразу открываем закрытый тренажер, не посещая /login.
  await expect(page.getByRole("heading", { name: "Текстовые поля" })).toBeVisible();
  // Дожидаемся заголовка: при уходе на /login или /account этой проверки не пройти.
});
// Закрываем тест: он проверил доступ с сохраненной сессией.
