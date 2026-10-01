export class BrokenResourcesPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Битые ссылки и изображения']");
    // Находим заголовок тренажера через XPath.
    this.validImage = page.locator("xpath=//img[@id='valid-image']");
    // Ищем рабочее изображение по id.
    this.brokenImage = page.locator("xpath=//img[@id='broken-image']");
    // Ищем изображение с отсутствующим файлом.
    this.brokenLink = page.locator("xpath=//a[@id='broken-link']");
    // Ищем ссылку на отсутствующую страницу.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/broken-links");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.validImage.waitFor({ state: "visible" });
// Дожидаемся появления рабочего изображения на странице.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
