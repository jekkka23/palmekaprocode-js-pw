import { test, expect } from "@playwright/test";
// Подключаем запуск теста и проверки результата.
test("команды Playwright проверяют три тренажера", async ({ page }) => {
// Получаем новую вкладку для одного самостоятельного теста.
  await page.goto("/login");
  // Открываем форму входа с адресом из baseURL.
  await page.locator("xpath=//form[contains(@class, 'auth-form')]//input[@name='email']").fill("test-auto@palmekaprocode.ru");
  // Находим поле почты готовым XPath и вводим логин учебного аккаунта.
  await page.locator("xpath=//input[@id='login-password']").fill("test-auto");
  // Находим поле пароля по id и вводим учебный пароль.
  await page.locator("xpath=//form[contains(@class, 'auth-form')]//button[@type='submit']").click();
  // Отправляем форму входа.
  await expect(page).toHaveURL((process.env.BASE_URL || "https://palmekaprocode.ru") + "/account");
  // Проверяем кабинет на том же адресе, который задан для теста.
  await page.goto("/practice/text-box");
  // Переходим к текстовой форме с той же сессией.
  const name = page.locator("xpath=//input[@id='full-name']");
  // Сохраняем локатор поля имени; как составить XPath, узнаем в отдельном блоке.
  const email = page.locator("xpath=//input[@id='user-email']");
  // Сохраняем локатор поля почты.
  await name.fill("Анна Тестовая");
  // Заменяем содержимое поля именем ученицы.
  await email.fill("anna@example.ru");
  // Вводим почту в обязательное поле.
  await expect(name).toHaveValue("Анна Тестовая");
  // Проверяем значение input до отправки формы.
  await page.locator("xpath=//button[@id='submit-text-box']").click();
  // Отправляем заполненную форму.
  await expect(page.locator("xpath=//div[@id='text-box-output']")).toContainText("anna@example.ru");
  // Проверяем почту в появившемся блоке результата.
  await page.goto("/practice/check-box");
  // Открываем дерево чекбоксов, не повторяя вход внутри этого теста.
  await page.locator("xpath=//input[@id='check-desktop']").check();
  // Выбираем Рабочий стол: сайт также отметит дочерние пункты.
  await expect(page.locator("xpath=//input[@id='check-notes']")).toBeChecked();
  // Проверяем выбранные Заметки.
  await expect(page.locator("xpath=//input[@id='check-commands']")).toBeChecked();
  // Проверяем выбранные Команды.
  await expect(page.locator("xpath=//div[@id='check-box-result']/p")).toHaveText("Рабочий стол, Заметки, Команды");
  // Сверяем полный результат выбора.
  await page.goto("/practice/select-menu");
  // Открываем тренажер списков в той же вкладке.
  const role = page.locator("xpath=//select[@id='select-role']");
  // Находим список ролей по готовому XPath.
  await role.selectOption("mentor");
  // Выбираем option с value mentor, который показывается как Наставник.
  await expect(role).toHaveValue("mentor");
  // Проверяем значение HTML-списка.
  await expect(page.locator("xpath=//div[@id='select-result']")).toContainText("Роль: mentor");
  // Сверяем значение, выведенное приложением в результате.
});
// Завершаем самостоятельный тест.
