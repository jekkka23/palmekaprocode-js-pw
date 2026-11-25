

//После check() на radio-yes приложение показывает ответ в radio-result. 
//Заблокированный radio-no имеет атрибут disabled, поэтому тест проверяет и доступный, и недоступный вариант.

//Радиокнопка пункт, из которого можно выбрать один вариант в группе с общим name.

//toBeDisabled ассерт, который ждет заблокированного состояния элемента.

//toHaveText ассерт для точного текста результата.

export class RadioButtonPage {
  // class объявляет класс RadioButtonPage. в нем собраны локаторы и действия для экрана "Радиокнопки".
  // export позволяет импортировать этот класс в хелпере.

  constructor(page) {
    // constructor вызывается при создании объекта через new RadioButtonPage(page).
    // в параметр page хелпер передает вкладку браузера, в которой идет тест.

    this.page = page;
    // this - созданный объект RadioButtonPage. в его свойстве page сохраняем переданную вкладку.
    // теперь метод open может обратиться к этой же вкладке через this.page.

    this.heading = page.locator("xpath=//h1[text()='Радиокнопки']");
    // page.locator создает локатор и сохраняем его в this.heading для проверки в хелпере.
    // xpath задает способ поиска. h1 - тег заголовка, а text() задает условие на его текст "Радиокнопки".

    this.yes = page.locator("xpath=//input[@id='radio-yes']");
    // this.yes хранит локатор ответа "Да". XPath указывает на элемент input со значением атрибута id "radio-yes".

    this.no = page.locator("xpath=//input[@id='radio-no']");
    // this.no хранит локатор ответа "Нет". по id "radio-no" находим нужный input, а в хелпере проверяем, что он заблокирован.

    this.result = page.locator("xpath=//div[@id='radio-result']/p");
    // this.result хранит локатор строки результата. XPath находит div с id "radio-result", затем его дочерний абзац p.
  }

    async open() {
    // open - наш метод для открытия тренажера. async позволяет использовать await внутри метода.

    await this.page.goto("/practice/radio-button");
    // goto открывает путь "/practice/radio-button" в сохраненной вкладке. await ждет завершения перехода.
  }

    async act() {
    // act - наш метод для выбора ответа. хелпер запускает его через screen.act().

    await this.yes.check();
    // check() выбирает радиокнопку "Да" и проверяет, что она отмечена. если она уже выбрана, повторного клика не будет.
  }
}

