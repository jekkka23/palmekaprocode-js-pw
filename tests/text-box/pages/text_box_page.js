export class TextBoxPage {
// Экспортируем класс страницы для хелпера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода на тренажер.
    this.heading = page.locator("xpath=//h1[text()='Текстовые поля']");
    // Находим заголовок тренажера по точному тексту.
    this.name = page.locator("xpath=//input[@id='full-name']");
    // Находим поле имени по уникальному id.
    this.email = page.locator("xpath=//input[@id='user-email']");
    // Находим поле почты по уникальному id.
    this.submitButton = page.locator("xpath=//button[@id='submit-text-box']");
    // Находим кнопку отправки по уникальному id.
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
