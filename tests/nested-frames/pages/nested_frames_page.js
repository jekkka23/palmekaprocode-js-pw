export class NestedFramesPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Вложенные фреймы']");
    // Находим заголовок тренажера через XPath.
    this.parent = page.locator("xpath=//iframe[@id='parent-frame']");
    // Ищем родительский iframe на основной странице.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/nested-frames");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    this.childText = this.page.frameLocator("xpath=//iframe[@id='parent-frame']").frameLocator("xpath=//iframe[@id='child-frame']").locator("xpath=//p[@id='child-frame-text']");
// Последовательно входим в оба фрейма и ищем дочерний текст.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
