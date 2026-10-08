export class DynamicPropertiesPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Динамические свойства']");
    // Находим заголовок тренажера через XPath.
    this.enabled = page.locator("xpath=//div[@id='dynamic-playground']//button[@id='enable-after']");
    // Ищем кнопку, которая станет доступной.
    this.visible = page.locator("xpath=//div[@id='dynamic-playground']//button[@id='visible-after']");
    // Готовим XPath кнопки, которая появится позже.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/dynamic-properties");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.enabled.waitFor({ state: "visible" });
// Дожидаемся исходной кнопки без фиксированной паузы.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
