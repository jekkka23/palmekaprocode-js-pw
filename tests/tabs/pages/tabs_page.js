export class TabsPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Вкладки']");
    // Находим заголовок тренажера через XPath.
    this.origin = page.locator("xpath=//div[@id='tabs']//button[@id='tab-origin']");
    // Ищем вкладку Откуда.
    this.panel = page.locator("xpath=//div[@id='tab-panel-origin']");
    // Ищем панель выбранной вкладки.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/tabs");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.origin.click();
// Переключаемся на вкладку Откуда.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
