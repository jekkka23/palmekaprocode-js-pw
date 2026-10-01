export class PracticeFormPage {
// Экспортируем страницу учебной формы.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода на страницу.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Учебная форма']");
    // Находим заголовок тренажера.
    this.firstName = page.locator("xpath=//form[@id='student-form']//input[@id='first-name']");
    // Находим поле имени без совпадений с другими подписями.
    this.lastName = page.locator("xpath=//form[@id='student-form']//input[@id='last-name']");
    // Находим поле фамилии.
    this.gender = page.locator("xpath=//form[@id='student-form']//input[@id='gender-female']");
    // Находим один вариант пола.
    this.phone = page.locator("xpath=//form[@id='student-form']//input[@id='mobile-number']");
    // Находим обязательный телефон.
    this.birthDate = page.locator("xpath=//form[@id='student-form']//input[@id='birth-date']");
    // Находим обязательную дату рождения.
    this.region = page.locator("xpath=//form[@id='student-form']//select[@id='region']");
    // Находим список регионов.
    this.city = page.locator("xpath=//form[@id='student-form']//select[@id='city']");
    // Находим зависимый список городов.
    this.submitButton = page.locator("xpath=//form[@id='student-form']//button[@id='submit-student-form']");
    // Находим кнопку отправки.
    this.summary = page.locator("xpath=//div[@id='student-summary-modal']//section[@role='dialog']");
    // Находим итоговое окно, которое появится после отправки.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход к учебной форме.
    await this.page.goto("/practice/practice-form");
    // Открываем тренажер с сохраненной сессией.
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
