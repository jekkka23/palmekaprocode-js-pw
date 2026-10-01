export class RadioButtonPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Радиокнопки']");
    // Находим заголовок тренажера через XPath.
    this.yes = page.locator("xpath=//div[@id='radio-group']//input[@id='radio-yes']");
    // Ищем доступный ответ Да внутри группы.
    this.no = page.locator("xpath=//div[@id='radio-group']//input[@id='radio-no']");
    // Ищем заблокированный ответ Нет.
    this.result = page.locator("xpath=//div[@id='radio-result']/p");
    // Ищем строку результата после выбора.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/radio-button");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.yes.check();
// Выбираем доступный ответ Да.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
