import { test, expect } from "@playwright/test";
// test объявляет проверку. expect сравнивает факт с ожиданием.
import { login } from "../helpers/login.js";
// login — общий вход. Почта и пароль лежат в tests/helpers/login.js, в этой спеке их нет.

const pauseMs = 2000;
// pauseMs — длина паузы в миллисекундах. 2000 — это 2 секунды.
// Пауза нужна только для урока: чтобы успеть увидеть каждый шаг в открытом окне.
// Она ничего не проверяет. Проверку делает expect.

test("XPath находит поля и результат", async ({ page }) => {
// async разрешает await. page — новая вкладка браузера.
  console.log("Шаг: вхожу на сайт через общий хелпер login");
  // console.log печатает текст в терминал. В браузере этой строки не видно.
  await login(page);
  // Хелпер открывает /login и входит. Пароль в этой спеке не написан.
  await page.waitForTimeout(pauseMs);
  // waitForTimeout останавливает тест на pauseMs миллисекунд. Это пауза для просмотра, не проверка.

  console.log("Шаг: открываю тренажер Текстовые поля");
  await page.goto("/practice/text-box");
  // goto открывает адрес. /practice/text-box — страница «Элементы → Текстовые поля».
  // Начало адреса берется из baseURL в playwright.config.js.
  await page.waitForTimeout(pauseMs);

  console.log("Шаг: заполняю имя — Иван Петров");
  const name = page.locator("xpath=//form[@id='text-box-form']//input[@id='full-name']");
  // const создает переменную name. В ней лежит локатор, а не текст.
  // locator готовит поиск. xpath= говорит: строка дальше — это XPath.
  // //form — найти форму. [@id='text-box-form'] — именно эту форму.
  // //input[@id='full-name'] — поле «Имя и фамилия» внутри формы.
  await expect(name).toHaveCount(1);
  // toHaveCount(1) проверяет: путь нашел ровно одно поле. Если ноль или несколько, тест останавливается здесь.
  await name.fill("Иван Петров");
  // fill стирает старый текст и пишет «Иван Петров».
  await page.waitForTimeout(pauseMs);

  console.log("Шаг: заполняю почту — ivan@example.ru");
  const email = page.locator("xpath=//form[@id='text-box-form']//input[@type='email']");
  // Ищем поле почты по атрибуту type=email внутри той же формы.
  await expect(email).toHaveCount(1);
  await email.fill("ivan@example.ru");
  // Пишем учебную почту. Знак @ здесь — часть адреса почты, не команда XPath.
  await page.waitForTimeout(pauseMs);

  console.log("Шаг: заполняю текущий адрес");
  const currentAddress = page.locator("xpath=//form[@id='text-box-form']//textarea[@id='current-address']");
  // textarea — большое поле для нескольких строк. id current-address — «Текущий адрес».
  await expect(currentAddress).toHaveCount(1);
  await currentAddress.fill("улица Ленина, дом 10");
  await page.waitForTimeout(pauseMs);

  console.log("Шаг: заполняю адрес регистрации");
  const permanentAddress = page.locator("xpath=//form[@id='text-box-form']//textarea[@id='permanent-address']");
  // id permanent-address — поле «Адрес регистрации».
  await expect(permanentAddress).toHaveCount(1);
  await permanentAddress.fill("улица Мира, дом 5");
  await page.waitForTimeout(pauseMs);

  console.log("Шаг: нажимаю Отправить");
  const submit = page.locator("xpath=//form[@id='text-box-form']//button[@type='submit']");
  // button[@type='submit'] — кнопка отправки формы. Текст на ней — «Отправить».
  await expect(submit).toHaveCount(1);
  await submit.click();
  // click нажимает кнопку. После этого на странице появляется блок результата.
  await page.waitForTimeout(pauseMs);

  console.log("Шаг: проверяю блок результата");
  const result = page.locator("xpath=//div[@id='text-box-output']");
  // div[@id='text-box-output'] — блок «Результат». До нажатия кнопки его на странице нет.
  await expect(result).toContainText("Иван Петров");
  // toContainText ждет, пока в блоке появится этот текст.
  await expect(result).toContainText("ivan@example.ru");
  await expect(result).toContainText("улица Ленина, дом 10");
  await expect(result).toContainText("улица Мира, дом 5");
  console.log("Готово: все четыре поля нашлись в результате");
});
// Закрываем тест.
