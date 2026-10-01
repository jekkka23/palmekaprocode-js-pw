export class ButtonsPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Кнопки']");
    // Находим заголовок тренажера через XPath.
    this.single = page.locator("xpath=//div[@id='button-playground']//button[@id='single-click']");
    // Ищем кнопку обычного клика.
    this.double = page.locator("xpath=//div[@id='button-playground']//button[@id='double-click']");
    // Ищем кнопку двойного клика.
    this.right = page.locator("xpath=//div[@id='button-playground']//button[@id='right-click']");
    // Ищем кнопку правого клика.
    this.result = page.locator("xpath=//div[@id='button-result']");
    // Ищем общий блок сообщений.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/buttons");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.single.click();
// Выполняем обычный клик.
    await this.double.dblclick();
// Выполняем двойной клик.
    await this.right.click({ button: "right" });
// Выполняем правый клик.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
