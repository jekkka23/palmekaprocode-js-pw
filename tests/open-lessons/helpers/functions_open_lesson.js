// Подключаем встроенный в Node.js SQLite-клиент для проверки строки в БД.
import { DatabaseSync } from "node:sqlite";
// Берем шаги test.step и проверки expect из Playwright.
import { test, expect } from "@playwright/test";
// Подключаем объект страницы с XPath-локаторами и действиями.
import { OpenLessonPage } from "../pages/open_lesson_page.js";

// Объединяем UI, API и БД в один понятный учебный флоу.
export async function runOpenLessonFullCycle(page, request, account) {
  // Создаем объект страницы для действий с браузером.
  const openLessonPage = new OpenLessonPage(page);
  // Выбираем готовый учебный заказ, который уже есть в тренажере.
  const orderId = 501;
  // Здесь сохраним токен со страницы для прямого GET к API.
  let apiToken;
  // Здесь сохраним заказ, который открыл пользователь через UI.
  let uiOrder;

  // Первый шаг в отчете Allure: проверяем вход на сайт.
  await test.step("Шаг 1. Войти под учебным аккаунтом", async () => {
    // Вводим логин и пароль через браузер.
    await openLessonPage.login(account);
    // Проверяем, что открылся кабинет нужного учебного пользователя.
    await expect(openLessonPage.welcome).toHaveText("Привет, Открытый Урок");
    // Пишем в лог короткий результат шага.
    console.log("1. Учебный аккаунт вошел в кабинет");
  });

  // Второй шаг в отчете: проверяем экран и ответ на его GET-реквест.
  await test.step("Шаг 2. Проверить заказ на экране", async () => {
    // Открываем тренажер учебного API на сайте.
    await openLessonPage.open();
    // Проверяем, что видим заголовок правильной страницы.
    await expect(openLessonPage.heading).toBeVisible();
    // Проверяем, что поле запроса указывает на нужный готовый заказ.
    await expect(openLessonPage.orderUrl).toHaveValue(`/api/training/orders/${orderId}`);
    // Считываем личный токен, который сайт показал учебному аккаунту.
    apiToken = (await openLessonPage.apiToken.textContent())?.trim();
    // Останавливаем тест, если токен не появился.
    expect(apiToken, "На странице должен быть токен учебного API").toBeTruthy();
    // Нажимаем кнопку GET на странице и получаем сетевой респонс.
    const response = await openLessonPage.readOrder(orderId);
    // Проверяем успешный HTTP-статус.
    expect(response.status()).toBe(200);
    // Превращаем JSON респонса в объект для следующих проверок.
    uiOrder = await response.json();
    // Проверяем id, клиента, статус и сумму учебного заказа.
    expect(uiOrder).toMatchObject({ id: orderId, customerId: 101, customerName: "Анна Смирнова", status: "paid", total: 3490 });
    // Проверяем, что блок результата появился именно на экране.
    await expect(openLessonPage.orderResult).toBeVisible();
    // Проверяем видимый статус 200 в интерфейсе.
    await expect(openLessonPage.orderResult).toContainText("200");
    // Проверяем имя клиента в видимом JSON.
    await expect(openLessonPage.orderResult).toContainText("Анна Смирнова");
    // Проверяем статус заказа в видимом JSON.
    await expect(openLessonPage.orderResult).toContainText("paid");
    // Проверяем сумму заказа в видимом JSON.
    await expect(openLessonPage.orderResult).toContainText("3490");
    // Пишем в лог результат UI-проверок.
    console.log(`2. UI показал учебный заказ ${orderId}`);
  });

  // Третий шаг в отчете: отправляем такой же GET напрямую через API.
  await test.step("Шаг 3. Прочитать тот же заказ через API", async () => {
    // Запрашиваем заказ по id и передаем личный Bearer-токен.
    const response = await request.get(`/api/training/orders/${orderId}`, {
      // Заголовок связывает реквест с учебным аккаунтом.
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    // Проверяем успешный HTTP-статус прямого реквеста.
    expect(response.status()).toBe(200);
    // Читаем JSON из API-респонса.
    const apiOrder = await response.json();
    // Сравниваем API-данные с тем, что уже вернул UI.
    expect(apiOrder).toMatchObject(uiOrder);
    // Пишем в лог результат API-проверки.
    console.log(`3. API вернул тот же учебный заказ ${orderId}`);
  });

  // Четвертый шаг в отчете: сверяем тот же заказ в SQLite.
  await test.step("Шаг 4. Сверить заказ и клиента в БД", async () => {
    // Берем путь к базе из переменной запуска Jenkins.
    const databasePath = process.env.QA_SQLITE_DB_PATH;
    // Объясняем причину падения, если путь не передали.
    expect(databasePath, "Задайте QA_SQLITE_DB_PATH с путем к SQLite базе сайта").toBeTruthy();
    // Открываем базу в режиме только чтения.
    const database = new DatabaseSync(databasePath, { readOnly: true });
    // Закроем соединение даже тогда, когда проверка не пройдет.
    try {
      // Соединяем учебный заказ, клиента и владельца токена; выбираем те же поля, что отдает API.
      const saved = database.prepare("SELECT o.id, o.customer_id AS customerId, c.name AS customerName, o.status, o.delivery_date AS deliveryDate, o.total, o.created_at AS createdAt, o.updated_at AS updatedAt FROM practice_api_orders o JOIN practice_api_customers c ON c.user_id = o.user_id AND c.id = o.customer_id JOIN practice_api_tokens t ON t.user_id = o.user_id WHERE t.token = ? AND o.id = ?").get(apiToken, orderId);
      // Сверяем строку БД с ответом, который увидели через UI.
      expect(saved).toMatchObject(uiOrder);
      // Пишем в лог результат проверки базы.
      console.log(`4. БД содержит тот же учебный заказ ${orderId}`);
    } finally {
      // Освобождаем SQLite-соединение после чтения.
      database.close();
    }
  });
}
