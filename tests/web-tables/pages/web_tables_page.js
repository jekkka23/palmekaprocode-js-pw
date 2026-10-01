export class WebTablesPage {
// Экспортируем страницу веб-таблицы.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и поиска строки.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Веб-таблица']");
    // Находим заголовок тренажера.
    this.addButton = page.locator("xpath=//button[@id='add-record']");
    // Находим кнопку открытия формы.
    this.firstName = page.locator("xpath=//form[@id='record-form']//input[@id='record-first-name']");
    // Находим поле имени.
    this.lastName = page.locator("xpath=//form[@id='record-form']//input[@id='record-last-name']");
    // Находим поле фамилии.
    this.email = page.locator("xpath=//form[@id='record-form']//input[@id='record-email']");
    // Находим поле почты.
    this.age = page.locator("xpath=//form[@id='record-form']//input[@id='record-age']");
    // Находим обязательный возраст.
    this.salary = page.locator("xpath=//form[@id='record-form']//input[@id='record-salary']");
    // Находим обязательную зарплату.
    this.department = page.locator("xpath=//form[@id='record-form']//input[@id='record-department']");
    // Находим поле отдела.
    this.saveButton = page.locator("xpath=//form[@id='record-form']//button[@id='save-record']");
    // Находим кнопку сохранения записи.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход к таблице.
    await this.page.goto("/practice/web-tables");
    // Открываем тренажер с сохраненной сессией.
  }
  // Завершаем метод open.
  async addRecord(data) {
  // Получаем данные новой строки из спеки.
    await this.addButton.click();
    // Открываем форму создания записи.
    await this.firstName.fill(data.firstName);
    // Вводим имя.
    await this.lastName.fill(data.lastName);
    // Вводим фамилию.
    await this.email.fill(data.email);
    // Вводим почту для поиска строки.
    await this.age.fill(data.age);
    // Вводим возраст.
    await this.salary.fill(data.salary);
    // Вводим зарплату.
    await this.department.fill(data.department);
    // Вводим отдел.
    await this.saveButton.click();
    // Сохраняем запись в таблице этой страницы.
  }
  // Завершаем метод addRecord.
  rowWithEmail(email) {
  // Получаем почту записи, которую надо проверить.
    return this.page.locator(`xpath=//table[@id='records-table']//tbody/tr[td[normalize-space(.)='${email}']]`);
    // Возвращаем строку с точной почтой в одной из ячеек.
  }
  // Завершаем метод поиска строки.
}
// Завершаем класс страницы.
