export class SelectMenuPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Селекты']");
    // Находим заголовок тренажера через XPath.
    this.value = page.locator("xpath=//select[@id='select-value']");
    // Ищем первый селект.
    this.role = page.locator("xpath=//select[@id='select-role']");
    // Ищем селект роли.
    this.colors = page.locator("xpath=//select[@id='select-colors']");
    // Ищем множественный селект.
    this.result = page.locator("xpath=//div[@id='select-result']");
    // Ищем текст результата.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/select-menu");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.value.selectOption("group-two");
// Выбираем значение первой группы.
    await this.role.selectOption("mentor");
// Выбираем роль наставника.
    await this.colors.selectOption(["Красный", "Синий"]);
// Выбираем два цвета одновременно.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
