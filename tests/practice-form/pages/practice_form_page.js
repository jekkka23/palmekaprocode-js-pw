export class PracticeFormPage {
// Экспортируем страницу учебной формы.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода на страницу.
    this.heading = page.locator("xpath=//h1[text()='Учебная форма']");
    // Находим заголовок тренажера.
    this.firstName = page.locator("xpath=//input[@id='first-name']");
    // Находим поле имени без совпадений с другими подписями.
    this.lastName = page.locator("xpath=//input[@id='last-name']");
    // Находим поле фамилии.
    this.gender = page.locator("xpath=//input[@id='gender-female']");
    // Находим один вариант пола.
    this.phone = page.locator("xpath=//input[@id='mobile-number']");
    // Находим обязательный телефон.
    this.birthDate = page.locator("xpath=//input[@id='birth-date']");
    // Находим обязательную дату рождения.
    this.region = page.locator("xpath=//select[@id='region']");
    // Находим список регионов.
    this.city = page.locator("xpath=//select[@id='city']");
    // Находим зависимый список городов.
    this.submitButton = page.locator("xpath=//button[@id='submit-student-form']");
    // Находим кнопку отправки.
    this.summary = page.locator("xpath=//section[@aria-labelledby='student-summary-title']");
    // Находим итоговое окно, которое появится после отправки.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход к учебной форме.
    await this.page.goto("/practice/practice-form");
    // Открываем тренажер. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async submit(data) {
  // Получаем значения из спеки через хелпер.
    await this.firstName.fill(data.firstName);
    // Вводим имя.
    await this.lastName.fill(data.lastName);
    // Вводим фамилию.
    await this.gender.check();
    // Выбираем вариант "Женский".
    await this.phone.fill(data.phone);
    // Вводим телефон из десяти цифр.
    await this.birthDate.fill(data.birthDate);
    // Вводим дату в формате ГГГГ-ММ-ДД.
    await this.region.selectOption({ label: data.region });
    // Выбираем регион, после чего становится доступен город.
    await this.city.selectOption({ label: data.city });
    // Выбираем город из списка этого региона.
    await this.submitButton.click();
    // Отправляем заполненную форму.
  }
  // Завершаем метод submit.
}
// Завершаем класс страницы.
