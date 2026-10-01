export class TooltipsPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Подсказки']");
    // Находим заголовок тренажера через XPath.
    this.button = page.locator("xpath=//button[@id='tooltip-button']");
    // Ищем кнопку для наведения.
    this.wrapper = page.locator("xpath=//button[@id='tooltip-button']/parent::span[@data-tip]");
    // Ищем родительский узел с текстом подсказки.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/tooltips");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.button.hover();
// Наводим курсор на кнопку.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
