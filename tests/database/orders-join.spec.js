import { test, expect } from "@playwright/test";
// Подключаем Playwright и проверки.
test("JOIN связывает заказ с покупателем", async ({ request }) => {
// Начинаем отдельный тест, который отправит SQL через API песочницы.
  const sql = "SELECT orders.id, customers.name FROM orders JOIN customers ON customers.id = orders.customer_id ORDER BY orders.id";
  // Соединяем заказ с покупателем по внешнему ключу и сортируем по номеру заказа.
  const response = await request.post("/api/practice/sql", {
  // Отправляем запрос с cookie сохраненного входа.
    data: { action: "execute", taskId: "joins-order-customer", sql },
    // execute вернет строки и добавит оценку задания на исходных данных.
  });
  // Ждем HTTP-респонс учебного сервера.
  expect(response.status()).toBe(200);
  // Сначала убеждаемся, что сервер принял запрос.
  const result = await response.json();
  // Читаем столбцы, строки и оценку задания.
  expect(result.columns).toEqual(["id", "name"]);
  // Проверяем названия обоих столбцов в нужном порядке.
  expect(result.rows.length).toBeGreaterThan(0);
  // На исходном наборе есть заказы, связанные с покупателями.
  expect(result.evaluation.passed).toBe(true);
  // Полный результат запроса должен совпасть с эталоном задания.
});
// Завершаем проверку связи таблиц.
