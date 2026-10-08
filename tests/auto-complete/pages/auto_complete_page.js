export class AutoCompletePage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Автодополнение']");
    // Находим заголовок тренажера через XPath.
    this.input = page.locator("xpath=//div[@id='auto-complete']//input[@id='auto-complete-input']");
    // Ищем поле ввода внутри тренажера.
    this.suggestion = page.locator("xpath=//div[@id='color-suggestions']/button[normalize-space(.)='Синий']");
    // Находим нужную подсказку по видимому тексту.
    this.tag = page.locator("xpath=//div[@id='color-tags']/span[contains(normalize-space(.), 'Синий')]");
    // Находим добавленный тег по цвету.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/auto-complete");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.input.fill("Син");
// Вводим начало названия цвета.
    await this.suggestion.click();
// Выбираем подсказку после ее появления.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
