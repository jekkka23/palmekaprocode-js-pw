export class ModalDialogsPage {
// Экспортируем класс страницы окон.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Модальные окна']");
    // Находим заголовок тренажера.
    this.openSmallButton = page.locator("xpath=//button[@id='small-modal']");
    // Находим кнопку открытия маленького окна.
    this.smallDialog = page.locator("xpath=//div[@id='small-modal-dialog']//section[@role='dialog']");
    // Находим диалог внутри подложки маленького окна.
    this.closeButton = this.smallDialog.locator("xpath=.//button[normalize-space(.)='Закрыть']");
    // Находим кнопку с точным текстом внутри этого диалога.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/modal-dialogs");
    // Открываем страницу с сохраненной сессией.
  }
  // Завершаем метод open.
  async showSmall() {
  // Объявляем действие открытия окна.
    await this.openSmallButton.click();
    // Нажимаем кнопку маленького окна.
  }
  // Завершаем метод showSmall.
  async closeSmall() {
  // Объявляем действие закрытия окна.
    await this.closeButton.click();
    // Закрываем открытый диалог.
  }
  // Завершаем метод closeSmall.
}
// Завершаем класс страницы.
