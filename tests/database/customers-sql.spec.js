import { test, expect } from "@playwright/test";
// Подключаем тест и проверки результата.
test("SQL показывает покупателей", async ({ request }) => {
// request получит cookie из сохраненной сессии проекта chromium.
  const response = await request.post("/api/practice/sql", {
  // Отправляем SQL через учебный эндпоинт, а не подключаемся к БД напрямую.
    data: {
    // Передаем JSON с действием, задачей и текстом запроса.
      action: "execute",
      // execute выполнит SELECT в личной учебной базе.
      taskId: "tables-customers",
      // Указываем задачу, с которой сервер сравнит результат.
      sql: "SELECT id, name FROM customers ORDER BY id",
      // Читаем два столбца всех покупателей в порядке id.
    },
    // Завершаем данные реквеста.
  });
  // Дожидаемся ответа SQL-песочницы.
  expect(response.status()).toBe(200);
  // Если cookie недействительна, здесь вместо 200 будет 401.
  const result = await response.json();
  // Читаем columns, rows и evaluation из JSON.
  expect(result.columns).toEqual(["id", "name"]);
  // Проверяем точный набор и порядок столбцов.
  expect(result.rows).toEqual(expect.any(Array));
  // Убеждаемся, что строки пришли массивом.
  expect(result.rows.length).toBeGreaterThan(0);
  // В исходной учебной базе покупатели есть.
  expect(result.rows.every((row) => Number.isInteger(row.id))).toBe(true);
  // У каждой строки id должен быть целым числом.
  expect(result.evaluation.passed).toBe(true);
  // Проверяем, что запрос совпал с правилом задачи tables-customers.
});
// Завершаем один самостоятельный тест чтения БД.
