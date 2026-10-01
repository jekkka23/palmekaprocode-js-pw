export class BrowserWindowsPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Окна браузера']");
    // Находим заголовок тренажера через XPath.
    this.newTab = page.locator("xpath=//div[@id='browser-windows']//button[@id='new-tab']");
    // Находим кнопку открытия новой вкладки.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/browser-windows");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    const popupPromise = this.page.waitForEvent("popup");
// Начинаем ждать новую вкладку до клика.
    await this.newTab.click();
// Открываем новую вкладку через кнопку с XPath.
    this.popup = await popupPromise;
// Сохраняем открывшуюся вкладку для проверок.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
