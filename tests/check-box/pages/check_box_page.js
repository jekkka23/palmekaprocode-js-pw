export class CheckBoxPage {
  // export позволяет подключить этот класс в другом файле через import.
  // class объявляет класс CheckBoxPage. В нем собраны локаторы и действия для страницы с чекбоксами.

    constructor(page) {
    // constructor запускается, когда мы пишем new CheckBoxPage(page).
    // page в скобках - вкладка браузера, которую мы передаем из теста.

     this.page = page;
    // this - текущий объект CheckBoxPage, который мы сейчас создаем.
    // точка дает доступ к его свойству page, а = сохраняет туда вкладку из параметра page.
    // теперь в других методах класса мы можем обратиться к этой вкладке через this.page.

    this.heading = page.locator("xpath=//h1[text()='Чекбоксы']");
    // page.locator() создает локатор. По нему Playwright найдет элемент, когда мы используем локатор.
    // префикс "xpath=" говорит Playwright, что дальше идет XPath.
    // //h1 ищет заголовок h1 по всей странице, а [text()='Чекбоксы'] проверяет его текст.

    this.desktop = page.locator("xpath=//label[text()='Рабочий стол']/input[@type='checkbox']");
    // //label[text()='Рабочий стол'] ищет подпись с точным текстом "Рабочий стол".
    // /input идет к input прямо внутри этого label, а [@type='checkbox'] проверяет его тип.

    this.notes = page.locator("xpath=//label[text()='Заметки']/input[@type='checkbox']");
    // по тому же правилу находим чекбокс внутри подписи "Заметки".

    this.commands = page.locator("xpath=//label[text()='Команды']/input[@type='checkbox']");
    // здесь подпись "Команды". Локатор сохраняем в отдельное свойство this.commands.

    this.result = page.locator("xpath=//div[@id='check-box-result']/p");
    // [@id='check-box-result'] ищет div с таким id. Символ @ обозначает атрибут HTML.
    // /p выбирает абзац прямо внутри этого div. В нем страница показывает выбранные пункты.
  }


  async open() {
    // open() - метод открытия тренажера. Пустые скобки означают, что ему не нужны аргументы.
    // async означает, что метод возвращает Promise, и позволяет использовать await внутри.

    await this.page.goto("/practice/check-box");
    // this.page берет вкладку, которую сохранили в constructor.
    // goto() открывает путь "/practice/check-box" относительно baseURL из конфига Playwright.
    // await ждет завершения перехода, прежде чем метод продолжит работу.
  }

  async selectDesktop() {
    // selectDesktop() выбирает родительский пункт "Рабочий стол".

  await this.desktop.check();
    // this.desktop берет сохраненный локатор, check() ставит галочку, await ждет завершения действия.
    // когда ставим галочку у "Рабочего стола", сайт сам отмечает "Заметки" и "Команды".
  }
}

