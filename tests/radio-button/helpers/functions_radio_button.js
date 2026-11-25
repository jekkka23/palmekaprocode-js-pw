

import { test, expect } from "@playwright/test";
// import подключает test и expect, а from указывает пакет, из которого их берем.
// test нужен для именованных шагов, expect - для проверок.

import { RadioButtonPage } from "../pages/radio_button_page.js";
// RadioButtonPage - класс, в котором описаны элементы и действия на экране "Радиокнопки".

export async function runRadioButtonCase(page) {
  // function объявляет хелпер с именем runRadioButtonCase, а export позволяет импортировать его в спеке.
  // async позволяет использовать await внутри хелпера. в параметр page спека передает вкладку браузера.

  const screen = new RadioButtonPage(page);
  // new создает объект RadioButtonPage для этой вкладки. const сохраняет ссылку на него в переменной screen.
  // через screen дальше обращаемся к методам страницы и локаторам ее элементов.

    await test.step("Шаг 1. Открыть Радиокнопки", async () => {
    // test.step создает шаг с указанным названием. async-функция содержит действия этого шага.
    // await перед test.step ждет завершения всего шага, прежде чем тест перейдет к следующему.

    console.log('шаг 1. открываем экран Радиокнопки');
    await screen.open();
    // open - метод страницы, который открывает тренажер. await ждет завершения перехода.

    await expect(screen.heading).toBeVisible();
    // screen.heading указывает на заголовок "Радиокнопки". toBeVisible проверяет, что он виден.
  });

    await test.step("Шаг 2. Выполнить действие: Радиокнопки", async () => {

      console.log('шаг 2. выбираем ответ Да');
      await screen.act();
      // act - метод из RadioButtonPage. внутри него this.yes.check() выбирает радиокнопку "Да".
  });

    await test.step("Шаг 3. Проверить результат: Радиокнопки", async () => {

    console.log('шаг 3. проверяем выбор ответа Да');
    await expect(screen.yes).toBeChecked();
    // screen.yes указывает на радиокнопку "Да". toBeChecked проверяет, что после второго шага она выбрана.

    console.log('проверяем, что ответ Нет заблокирован');
    await expect(screen.no).toBeDisabled();
    // screen.no указывает на радиокнопку "Нет". toBeDisabled проверяет, что она заблокирована для выбора.

    console.log('проверяем текст результата');
    await expect(screen.result).toHaveText("Вы выбрали: Да");
    // screen.result указывает на строку результата. toHaveText сверяет весь ее текст с фразой "Вы выбрали: Да".
  });
}

