export class ResizablePage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Изменение размера']");
    // Находим заголовок тренажера через XPath.
    this.box = page.locator("xpath=//div[@id='resize-box-free']");
    // Находим свободно растягиваемый блок.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/resizable");
    // Открываем его с сохраненной сессией.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    await this.box.evaluate((node) => node.scrollIntoView({ block: "start", behavior: "instant" }));
// Мгновенно прокручиваем блок выше баннера, чтобы мышь не опередила плавный скролл.
    this.before = await this.box.boundingBox();
// Запоминаем исходные координаты и размеры блока.
    if (!this.before) throw new Error("Блок не найден");
// Останавливаем тест, если элемент не виден и размеры неизвестны.
    await this.page.mouse.move(this.before.x + this.before.width - 5, this.before.y + this.before.height - 5);
// Наводим указатель на ручку изменения размера.
    await this.page.mouse.down();
// Зажимаем левую кнопку мыши.
    await this.page.mouse.move(this.before.x + this.before.width + 75, this.before.y + this.before.height + 45, { steps: 8 });
// Тянем угол вправо и вниз.
    await this.page.mouse.up();
// Отпускаем ручку блока.
    this.after = await this.box.boundingBox();
// Снимаем размеры после перетаскивания.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
