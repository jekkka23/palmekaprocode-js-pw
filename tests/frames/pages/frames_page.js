export class FramesPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Фреймы']");
    // Находим заголовок тренажера через XPath.
    this.frame = page.locator("xpath=//iframe[@id='frame-one']");
    // Ищем рамку первого учебного фрейма.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/frames");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    this.frameHeading = this.page.frameLocator("xpath=//iframe[@id='frame-one']").locator("xpath=//h1[@id='frame-heading']");
// Переходим в iframe и готовим XPath заголовка внутри него.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
