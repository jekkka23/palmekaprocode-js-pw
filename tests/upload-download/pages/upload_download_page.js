export class FilesPage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Загрузка и скачивание']");
    // Находим заголовок тренажера через XPath.
    this.upload = page.locator("xpath=//div[@id='file-playground']//input[@id='upload-file']");
    // Ищем input для выбора файла.
    this.uploadedName = page.locator("xpath=//p[@id='uploaded-file-name']");
    // Ищем строку выбранного имени.
    this.downloadLink = page.locator("xpath=//a[@id='download-file']");
    // Ищем ссылку скачивания по id.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/upload-download");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.upload.setInputFiles({ name: "lesson.txt", mimeType: "text/plain", buffer: Buffer.from("Учебный файл") });
// Создаем текстовый файл в памяти и выбираем его в форме.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
