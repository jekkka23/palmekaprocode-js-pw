// Экспортируем объект страницы, который хранит локаторы и действия с интерфейсом.
export class OpenLessonPage {
  // Получаем вкладку браузера из теста.
  constructor(page) {
    // Сохраняем вкладку, чтобы использовать ее в методах ниже.
    this.page = page;
    // Находим поле почты внутри формы входа по XPath.
    this.email = page.locator("xpath=//form[contains(@class,'auth-form')]//input[@name='email']");
    // Находим поле пароля внутри той же формы.
    this.password = page.locator("xpath=//form[contains(@class,'auth-form')]//input[@name='password']");
    // Находим кнопку входа по типу и видимому тексту.
    this.loginButton = page.locator("xpath=//form[contains(@class,'auth-form')]//button[@type='submit' and normalize-space(.)='Войти']");
    // Находим приветствие в личном кабинете после входа.
    this.welcome = page.locator("xpath=//header[contains(@class,'account-welcome')]//h1");
    // Находим заголовок страницы учебного API.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Учебный REST API']");
    // Находим поле с адресом готового заказа.
    this.orderUrl = page.locator("xpath=//article[@id='endpoint-get-order']//input[@id='url-get-order']");
    // Находим кнопку отправки GET-реквеста из интерфейса.
    this.readOrderButton = page.locator("xpath=//article[@id='endpoint-get-order']//button[@id='send-get-order']");
    // Находим блок, в котором сайт покажет статус и JSON заказа.
    this.orderResult = page.locator("xpath=//section[@id='response-get-order']");
    // Находим личный токен для отдельного API-реквеста.
    this.apiToken = page.locator("xpath=//code[@id='practice-api-token']");
  }

  // Собираем вход на сайт в одно повторно используемое действие.
  async login(account) {
    // Открываем страницу входа.
    await this.page.goto("/login");
    // Вводим почту учебного аккаунта.
    await this.email.fill(account.email);
    // Вводим пароль учебного аккаунта.
    await this.password.fill(account.password);
    // Нажимаем кнопку входа и ждем дальнейшую проверку кабинета в хелпере.
    await this.loginButton.click();
  }

  // Открываем тренажер API на текущем сайте.
  async open() {
    // Переходим к странице с учебными реквестами.
    await this.page.goto("/practice/book-api");
  }

  // Читаем уже существующий заказ через кнопку на сайте.
  async readOrder(orderId) {
    // Указываем путь GET-ручки для выбранного заказа.
    await this.orderUrl.fill(`/api/training/orders/${orderId}`);
    // Подписываемся на респонс до клика, чтобы не пропустить быстрый ответ.
    const responsePromise = this.page.waitForResponse((response) => response.request().method() === "GET" && new URL(response.url()).pathname === `/api/training/orders/${orderId}`);
    // Нажимаем кнопку, которая отправляет GET через интерфейс.
    await this.readOrderButton.click();
    // Возвращаем респонс вызвавшему коду для проверки статуса и данных.
    return responsePromise;
  }
}
