import { expect } from "@playwright/test";
// import берет готовую функцию из пакета Playwright.
// expect — это проверка: она ждет нужный результат и роняет тест, если результат другой.

const email = process.env.QA_EMAIL || "open-lesson@palmeka.ru";
// const создает постоянную переменную email. В ней лежит почта для входа.
// process.env.QA_EMAIL читает почту из терминала, если ее туда записали.
// Знак || значит: если слева пусто, возьми строку справа. Это учебная почта.

const password = process.env.QA_PASSWORD || "open-lesson";
// password — пароль того же аккаунта.
// process.env.QA_PASSWORD читает пароль из терминала, если он задан снаружи.
// По умолчанию используем учебный пароль для открытых уроков.

export async function login(page) {
// export отдает функцию наружу, чтобы спека могла написать login(page).
// async разрешает внутри слово await: так тест ждет, пока браузер закончит шаг.
// function login — имя функции. page — вкладка браузера, ее передает тест.
  await page.goto("/login");
  // await ждет окончания действия. Следующая строка начнется только после этого.
  // page.goto открывает адрес. "/login" — хвост адреса, страница входа.
  // Начало адреса, https://palmekaprocode.ru, записано в playwright.config.js как baseURL.
  await page.locator("xpath=//input[@name='email']").fill(email);
  // locator с префиксом xpath= ищет элемент через xpath.
  // //input выбирает поле, а @name='email' уточняет значение его атрибута name.
  // fill стирает то, что уже было в поле, и пишет туда значение email.
  await page.locator("xpath=//input[@name='password']").fill(password);
  // поле пароля ищем по тегу input и атрибуту name='password'.
  // так тест не путает поле пароля с кнопкой "Показать пароль".
  // fill пишет в поле значение password.
  await page.locator("xpath=//button[@type='submit' and normalize-space()='Войти']").click();
  // //button выбирает кнопку, @type='submit' указывает на отправку формы.
  // normalize-space() проверяет текст 'Войти' без лишних пробелов по краям.
  // click нажимает эту кнопку и отправляет форму.
  await expect(page).toHaveURL((process.env.BASE_URL || "https://palmekaprocode.ru") + "/account");
  // expect(page) проверяет всю вкладку, а не одно поле.
  // toHaveURL ждет, пока адрес станет адресом кабинета.
  // Плюс склеивает адрес сайта и путь /account.
  await expect(page.locator("xpath=//a[normalize-space()='Тренировочное поле']")).toBeVisible();
  // //a выбирает ссылку, normalize-space() проверяет текст 'Тренировочное поле'.
  // Эта ссылка видна в кабинете после входа.
  // toBeVisible ждет, пока ссылка появится на экране.
}
// Закрываем функцию login. Спека вызывает ее один раз в начале и потом открывает тренажер.
