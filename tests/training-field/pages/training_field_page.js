export class TrainingFieldPage {
// Экспортируем класс, чтобы хелпер мог создать объект страницы.
  constructor(page) {
  // Получаем page - вкладку браузера, созданную Playwright для теста.
    this.page = page;
    // Сохраняем вкладку для метода open.
    this.field = page.locator("#training-field");
    // Находим основной блок тренировочного поля по id.
    this.textBoxCard = page.locator("#tool-text-box");
    // Находим карточку "Текстовые поля" в списке тренажеров.
    this.textBoxHeading = page.getByRole("heading", { name: "Текстовые поля" });
    // Находим заголовок, который должен появиться после перехода.
  }
  // Закрываем constructor: локаторы готовы, но сайт еще не открыт.
  async open() {
  // Объявляем действие открытия поля.
    await this.page.goto("/practice");
    // Открываем страницу поля относительно baseURL из конфига.
  }
  // Завершаем метод open.
  async openTextBox() {
  // Объявляем действие перехода к тренажеру.
    await this.textBoxCard.click();
    // Нажимаем карточку "Текстовые поля".
  }
  // Завершаем метод openTextBox.
}
// Завершаем класс; проверки результата будут в хелпере.
