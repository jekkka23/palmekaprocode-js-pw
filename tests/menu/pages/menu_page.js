export class MenuPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Меню']");
    // Находим заголовок тренажера через XPath.
    this.products = page.locator("xpath=//nav[@id='menu']//button[@id='menu-products']");
    // Ищем первый пункт с подменю.
    this.mobile = page.locator("xpath=//nav[@id='menu']//button[@id='menu-mobile']");
    // Ищем пункт второго уровня.
    this.android = page.locator("xpath=//nav[@id='menu']//a[@id='menu-android']");
    // Ищем ссылку третьего уровня.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/menu");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.products.hover();
// Открываем подменю Продукты.
    await this.mobile.hover();
// Открываем список мобильных платформ.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
