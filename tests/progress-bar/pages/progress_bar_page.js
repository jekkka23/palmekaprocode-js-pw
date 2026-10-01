export class ProgressBarPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Прогресс-бар']");
    // Находим заголовок тренажера через XPath.
    this.bar = page.locator("xpath=//div[@id='progress-bar']");
    // Ищем шкалу с текущим значением.
    this.start = page.locator("xpath=//button[@id='start-progress']");
    // Ищем кнопку запуска.
    this.reset = page.locator("xpath=//button[@id='reset-progress']");
    // Ищем кнопку сброса.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/progress-bar");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.start.click();
// Запускаем обновление прогресса.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
