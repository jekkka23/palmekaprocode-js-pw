import { test, expect } from "@playwright/test";
// test объявляет проверку. expect сравнивает факт с ожиданием.
import { login } from "../helpers/login.js";
// login — общий вход. Здесь ему передадутся почта и пароль из терминала, не учебный аккаунт.
test.skip(process.env.RUN_SQL_CHANGES !== "1", "Запускайте отдельно для личного аккаунта");
// test.skip пропускает тест, пока в терминале нет RUN_SQL_CHANGES=1.
// Обычный запуск всего набора не должен сбрасывать чью-либо базу.
test("новый покупатель сохраняется в БД", async ({ page }) => {
// page — вкладка браузера. Войдем в нее и из нее же отправим SQL.
  expect(process.env.QA_EMAIL, "Задайте QA_EMAIL отдельного аккаунта").toBeTruthy();
  // Не начинаем запись, если почту отдельного аккаунта забыли.
  expect(process.env.QA_EMAIL).not.toBe("test-auto@palmekaprocode.ru");
  // Общий учебный аккаунт никогда не сбрасываем этим тестом.
  expect(process.env.QA_PASSWORD, "Задайте QA_PASSWORD").toBeTruthy();
  // Пароль тоже должен прийти из терминала, а не быть записан в этой спеке.
  await login(page);
  // Хелпер читает QA_EMAIL и QA_PASSWORD и входит этим отдельным аккаунтом.
  const run = (data) => page.request.post("/api/practice/sql", { data });
  // Сокращаем повторяющийся POST к SQL-песочнице.
  const before = await run({ action: "reset" });
  // Восстанавливаем исходный набор только у отдельного аккаунта.
  expect(before.status()).toBe(200);
  // Проверяем, что подготовка базы прошла успешно.
  try {
  // После подготовки начинаем действия, за которыми обязательна очистка.
    const added = await run({
    // Отправляем INSERT как одну SQL-команду.
      action: "execute",
      // execute меняет личную таблицу customers.
      taskId: "changes-insert-customer",
      // Сервер также сверит INSERT с учебной задачей.
      sql: "INSERT INTO customers (id, name, email, city, joined_at, active) VALUES (109, 'Никита Сергеев', 'nikita@example.ru', 'Тюмень', '2026-06-15', 1)",
      // Добавляем покупателя 109 со всеми обязательными столбцами.
    });
    // Ждем респонс после записи.
    expect(added.status()).toBe(200);
    // Ошибка SQL вернула бы другой HTTP-статус.
    expect((await added.json()).changed).toBe(true);
    // Сверяем, что состояние таблиц действительно изменилось.
    const selected = await run({
    // Новым реквестом читаем сохраненную строку.
      action: "execute",
      // execute подходит и для SELECT без изменения базы.
      taskId: "tables-customers",
      // Используем существующую задачу; ее оценку здесь не проверяем.
      sql: "SELECT id, name, city FROM customers WHERE id = 109",
      // Ограничиваем результат новым id и читаем нужные столбцы.
    });
    // Дожидаемся результата SELECT.
    expect(selected.status()).toBe(200);
    // Убедимся, что чтение прошло успешно.
    const result = await selected.json();
    // Получаем строки ответа как JavaScript-объекты.
    expect(result.rows).toEqual([{ id: 109, name: "Никита Сергеев", city: "Тюмень" }]);
    // Сравниваем ровно одну сохраненную строку и ее три значения.
  } finally {
  // Этот блок выполнится даже при падении проверки INSERT или SELECT.
    const cleanup = await run({ action: "reset" });
    // Возвращаем отдельную учебную базу в исходное состояние.
    expect(cleanup.status()).toBe(200);
    // Если очистка не прошла, тест тоже должен показать ошибку.
  }
  // Завершаем блок обязательной очистки.
});
// Завершаем тест записи в БД.
