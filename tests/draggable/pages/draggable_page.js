export class DraggablePage {
// Экспортируем страницу этого тренажера.
  constructor(page) {
  // Получаем вкладку текущего теста.
    this.page = page;
    // Сохраняем вкладку для перехода и событий браузера.
    this.heading = page.locator("xpath=//h1[normalize-space(.)='Перетаскивание']");
    // Находим заголовок тренажера через XPath.
    this.box = page.locator("xpath=//div[@id='drag-box']");
    // Находим блок для перемещения.
    this.position = page.locator("xpath=//div[@id='drag-position']/p");
    // Находим показанные координаты.
  }
  // Завершаем подготовку локаторов.
  async open() {
  // Объявляем переход на тренажер.
    await this.page.goto("/practice/draggable");
    // Открываем страницу. Вход уже сделала функция login в спеке.
  }
  // Завершаем метод open.
  async act() {
  // Объединяем действия пользователя на этом экране.
    this.before = await this.position.textContent();
// Запоминаем исходные координаты.
    const box = await this.box.boundingBox();
// Снимаем положение самого блока.
    if (!box) throw new Error("Блок не найден");
// Проверяем, что есть координаты для мыши.
    await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
// Ставим указатель в центр блока.
    await this.page.mouse.down();
// Зажимаем кнопку для начала pointer-перемещения.
    await this.page.mouse.move(box.x + box.width / 2 + 90, box.y + box.height / 2 + 55, { steps: 8 });
// Переносим блок внутри рабочей области.
    await this.page.mouse.up();
// Завершаем перетаскивание.
  }
  // Завершаем действие.
}
// Завершаем класс страницы.
