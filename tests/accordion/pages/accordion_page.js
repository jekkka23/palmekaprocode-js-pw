export class AccordionPage {
// Экспортируем страницу аккордеона.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Аккордеон']");
    // Находим заголовок тренажера.
    this.button = page.locator("xpath=//button[@id='accordion-automation']");
    // Находим кнопку пункта про автоматизацию.
    this.panel = page.locator("xpath=//div[@id='accordion-panel-automation']");
    // Находим панель с текстом этого пункта.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем открытие тренажера.
    await this.page.goto("/practice/accordion");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async toggleAutomation() {
  // Объявляем переключение одного пункта.
    await this.button.click();
    // Нажимаем кнопку: открываем или закрываем панель.
  }
  // Завершаем метод toggleAutomation.
}
// Завершаем класс страницы.
