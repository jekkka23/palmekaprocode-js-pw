import { test, expect } from "@playwright/test";
// test объявляет проверку. expect сравнивает факт с ожиданием.
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js.
test("SQL показывает покупателей", async ({ page }) => {
// page — вкладка браузера. Через нее войдем, а запрос отправим из той же вкладки.
  await login(page);
  // Хелпер открывает /login и входит. После этого у вкладки есть cookie входа.
  const response = await page.request.post("/api/practice/sql", {
  // page.request отправляет запрос с cookie этой вкладки. Эндпоинт выполняет SQL в учебной базе.
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
