import { test, expect } from "@playwright/test";
// Подключаем запуск теста и проверки Playwright.
test("API возвращает активных клиентов", async ({ request }) => {
// request отправляет HTTP-реквест без открытия браузерной страницы.
  const token = process.env.TRAINING_API_TOKEN;
  // Читаем токен из переменной окружения, а не из файла с кодом.
  expect(token, "Сначала задайте TRAINING_API_TOKEN").toBeTruthy();
  // Если токен забыли, тест упадет здесь с понятным сообщением.
  const response = await request.get("/api/training/customers?active=true", {
  // Отправляем GET только для активных клиентов относительно baseURL.
    headers: { Authorization: "Bearer " + token },
    // Передаем личный токен в заголовке Authorization.
  });
  // Дожидаемся HTTP-респонса сервера.
  expect(response.status()).toBe(200);
  // Успешное чтение должно вернуть статус 200.
  const body = await response.json();
  // Превращаем JSON ответа в JavaScript-объект.
  expect(body.items.length).toBeGreaterThan(0);
  // У учебного аккаунта в исходном наборе есть активные клиенты.
  expect(body.items.every((item) => item.active === true)).toBe(true);
  // Проверяем active у каждого клиента, а не только у первого.
});
// Завершаем самостоятельный API-тест.
