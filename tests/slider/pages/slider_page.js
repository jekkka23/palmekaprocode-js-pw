export class SliderPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Слайдер']");
    // Находим заголовок тренажера через XPath.
    this.range = page.locator("xpath=//input[@id='range-slider']");
    // Ищем сам ползунок.
    this.value = page.locator("xpath=//output[@id='slider-value']");
    // Ищем число рядом с ползунком.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/slider");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.range.focus();
// Переводим фокус на ползунок.
    await this.range.press("Home");
// Ставим минимальное значение 0.
    await this.range.press("ArrowRight");
// Увеличиваем значение одним шагом.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
