export class AlertsPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Уведомления']");
    // Находим заголовок тренажера через XPath.
    this.alertButton = page.locator("xpath=//div[@id='alerts-playground']//button[@id='alert-button']");
    // Ищем кнопку открытия alert.
    this.result = page.locator("xpath=//div[@id='alert-result']/p");
    // Ищем строку результата после закрытия уведомления.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/alerts");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    this.page.once("dialog", (dialog) => dialog.accept());
// Готовим однократное подтверждение alert до клика.
    await this.alertButton.click();
// Открываем и подтверждаем уведомление.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
