import { test, expect } from "@playwright/test";
// Подключаем test для запуска сценария и expect для проверок.
test("учебный аккаунт открывает тренажер", async ({ page }) => {
// Объявляем тест; page - новая страница браузера, async разрешает await.
  await page.goto("/login");
  // Открываем страницу входа: Playwright добавит /login к baseURL.
  await page.getByLabel("Электронная почта").fill("test-auto@palmekaprocode.ru");
  // Находим поле по подписи и вводим логин учебного аккаунта.
  await page.getByLabel("Пароль", { exact: true }).fill("test-auto");
  // Вводим учебный пароль; exact отличает поле от кнопки "Показать пароль".
  await page.getByRole("button", { name: "Войти" }).click();
  // Отправляем форму входа и переходим в кабинет.
  await expect(page.getByRole("link", { name: "Тренировочное поле" })).toBeVisible();
  // Дожидаемся пункта верхнего меню, который виден при доступе к полю.
  await page.getByRole("link", { name: "Тренировочное поле" }).click();
  // Открываем список тренажеров через верхнее меню кабинета.
  await page.locator("#tool-text-box").click();
  // Выбираем карточку "Текстовые поля" по ее id.
  await expect(page.getByRole("heading", { name: "Текстовые поля" })).toBeVisible();
  // Проверяем, что нужный тренажер действительно открылся.
});
// Закрываем тест; Playwright сообщит, прошел ли весь путь до тренажера.
