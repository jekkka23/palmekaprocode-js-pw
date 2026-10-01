export class SortablePage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Сортировка']");
    // Находим заголовок тренажера через XPath.
    this.first = page.locator("xpath=//div[@id='sortable-list']/div[span[normalize-space(.)='Один']]");
    // Находим карточку Один по ее подписи.
    this.third = page.locator("xpath=//div[@id='sortable-list']/div[span[normalize-space(.)='Три']]");
    // Находим карточку Три как цель.
    this.result = page.locator("xpath=//div[@id='sort-result']/p");
    // Ищем собранный порядок после переноса.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/sortable");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.first.dragTo(this.third);
// Переносим карточку Один на место Три.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
