export class DroppablePage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Зона сброса']");
    // Находим заголовок тренажера через XPath.
    this.source = page.locator("xpath=//div[@id='drag-source']");
    // Находим перетаскиваемый элемент.
    this.zone = page.locator("xpath=//div[@id='drop-zone']");
    // Находим целевую область.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/droppable");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.source.dragTo(this.zone);
// Переносим источник в зону сброса.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
