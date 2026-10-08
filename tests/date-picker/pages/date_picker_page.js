export class DatePickerPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Выбор даты']");
    // Находим заголовок тренажера через XPath.
    this.date = page.locator("xpath=//div[@id='date-picker']//input[@id='date-only']");
    // Находим поле только даты.
    this.dateTime = page.locator("xpath=//div[@id='date-picker']//input[@id='date-time']");
    // Находим поле даты и времени.
    this.result = page.locator("xpath=//div[@id='date-result']");
    // Находим итоговый блок.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/date-picker");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.date.fill("2026-10-01");
// Вводим дату в формате поля date.
    await this.dateTime.fill("2026-10-01T12:30");
// Вводим локальные дату и время.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
