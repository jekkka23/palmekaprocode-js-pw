import { expect } from "@playwright/test";
// import берет готовую функцию из пакета Playwright.
// expect — это проверка: она ждет нужный результат и роняет тест, если результат другой.

const email = process.env.QA_EMAIL || "test-auto@palmekaprocode.ru";
// const создает постоянную переменную email. В ней лежит почта для входа.
// process.env.QA_EMAIL читает почту из терминала, если ее туда записали.
// Знак || значит: если слева пусто, возьми строку справа. Это учебная почта.

const password = process.env.QA_PASSWORD || "test-autotesttest";
// password — пароль того же аккаунта.
// process.env.QA_PASSWORD читает пароль из терминала, если он задан снаружи.
// На открытом уроке этот файл не открываем и значение пароля не зачитываем.

export async function login(page) {
// export отдает функцию наружу, чтобы спека могла написать login(page).
// async разрешает внутри слово await: так тест ждет, пока браузер закончит шаг.
// function login — имя функции. page — вкладка браузера, ее передает тест.
  await page.goto("/login");
  // await ждет окончания действия. Следующая строка начнется только после этого.
  // page.goto открывает адрес. "/login" — хвост адреса, страница входа.
  // Начало адреса, https://palmekaprocode.ru, записано в playwright.config.js как baseURL.
  await page.getByLabel("Электронная почта").fill(email);
  // getByLabel ищет поле по тексту подписи рядом с ним. Здесь подпись — «Электронная почта».
  // fill стирает то, что уже было в поле, и пишет туда значение email.
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  // Второе поле ищем по подписи «Пароль».
  // exact: true значит: подпись должна совпасть целиком.
  // Так тест не путает поле пароля с кнопкой «Показать пароль».
  // fill пишет в поле значение password.
  await page.getByRole("button", { name: "Войти" }).click();
  // getByRole ищет элемент по его роли. button — это кнопка.
  // name — видимый текст на кнопке, здесь «Войти».
  // click нажимает эту кнопку и отправляет форму.
  await expect(page).toHaveURL((process.env.BASE_URL || "https://palmekaprocode.ru") + "/account");
  // expect(page) проверяет всю вкладку, а не одно поле.
  // toHaveURL ждет, пока адрес станет адресом кабинета.
  // Плюс склеивает адрес сайта и путь /account.
  await expect(page.getByRole("link", { name: "Тренировочное поле" })).toBeVisible();
  // getByRole("link") ищет ссылку. name — ее текст, «Тренировочное поле».
  // Эта ссылка видна в кабинете после входа.
  // toBeVisible ждет, пока ссылка появится на экране.
}
// Закрываем функцию login. Спека вызывает ее один раз в начале и потом открывает тренажер.
