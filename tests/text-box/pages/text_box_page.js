export class TextBoxPage {
// Экспортируем класс страницы для хелпера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода на тренажер.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Текстовые поля']");
    // Находим заголовок тренажера по точному тексту.
    this.name = page.locator("xpath=//form[@id='text-box-form']//input[@id='full-name']");
    // Находим поле имени по id внутри формы.
    this.email = page.locator("xpath=//form[@id='text-box-form']//input[@type='email']");
    // Находим поле почты по type внутри той же формы.
    this.submitButton = page.locator("xpath=//form[@id='text-box-form']//button[@type='submit']");
    // Находим кнопку отправки внутри формы.
    this.result = page.locator("xpath=//div[@id='text-box-output']");
    // Находим блок, который появится после отправки формы.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем действие открытия тренажера.
    await this.page.goto("/practice/text-box");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async submit(name, email) {
  // Получаем значения из хелпера и начинаем ввод.
    await this.name.fill(name);
    // Вводим имя, переданное тестом.
    await this.email.fill(email);
    // Вводим почту, переданную тестом.
    await this.submitButton.click();
    // Отправляем форму, чтобы появился результат.
  }
  // Завершаем метод submit.
}
// Завершаем класс; ассерты добавим в хелпер.
