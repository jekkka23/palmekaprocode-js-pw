export class LinksPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Ссылки']");
    // Находим заголовок тренажера через XPath.
    this.practiceLink = page.locator("xpath=//div[@id='links-playground']//a[@id='practice-link']");
    // Находим ссылку возврата по id внутри тренажера.
    this.fieldHeading = page.locator("xpath=//h1[normalize-space(.)='Проверяйте интерфейс руками и автотестами']");
    // Готовим XPath заголовка страницы назначения.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/links");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.practiceLink.click();
// Переходим к списку тренажеров в той же вкладке.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
