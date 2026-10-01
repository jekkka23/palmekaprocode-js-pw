export class SelectablePage {
// Экспортируем страницу выбора элементов.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Выбор элементов']");
    // Находим заголовок тренажера.
    this.first = page.locator("xpath=//div[@id='selectable-list']//button[@id='selectable-1']");
    // Находим первый пункт выбора.
    this.third = page.locator("xpath=//div[@id='selectable-list']//button[@id='selectable-3']");
    // Находим третий пункт выбора.
    this.result = page.locator("xpath=//div[@id='selection-result']/p");
    // Находим только строку результата без заголовка блока.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход к тренажеру.
    await this.page.goto("/practice/selectable");
    // Открываем страницу с сохраненной сессией.
  }
  // Завершаем метод open.
  async chooseFirstAndThird() {
  // Объявляем выбор двух пунктов.
    await this.first.click();
    // Выбираем первый пункт.
    await this.third.click();
    // Выбираем третий пункт.
  }
  // Завершаем метод chooseFirstAndThird.
  async removeFirst() {
  // Объявляем снятие первого пункта.
    await this.first.click();
    // Повторный клик снимает выбор первого пункта.
  }
  // Завершаем метод removeFirst.
}
// Завершаем класс страницы.
