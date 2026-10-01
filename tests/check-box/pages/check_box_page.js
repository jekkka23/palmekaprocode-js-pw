export class CheckBoxPage {
// Экспортируем класс для хелпера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода на тренажер.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Чекбоксы']");
    // Находим заголовок открытого тренажера.
    this.desktop = page.locator("xpath=//div[@id='check-box-tree']//label[normalize-space(.)='Рабочий стол']/input[@type='checkbox']");
    // Находим родительский input внутри label с точной подписью.
    this.notes = page.locator("xpath=//div[@id='check-box-tree']//label[normalize-space(.)='Заметки']/input[@type='checkbox']");
    // Находим первый дочерний input по подписи label.
    this.commands = page.locator("xpath=//div[@id='check-box-tree']//label[normalize-space(.)='Команды']/input[@type='checkbox']");
    // Находим второй дочерний input по подписи label.
    this.result = page.locator("xpath=//div[@id='check-box-result']/p");
    // Находим строку выбранных пунктов внутри блока результата.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем действие открытия тренажера.
    await this.page.goto("/practice/check-box");
    // Открываем страницу с сохраненной сессией.
  }
  // Завершаем метод open.
  async selectDesktop() {
  // Объявляем действие выбора родительского пункта.
    await this.desktop.check();
    // Выбираем "Рабочий стол"; приложение выберет его потомков.
  }
  // Завершаем метод selectDesktop.
}
// Завершаем класс страницы.
