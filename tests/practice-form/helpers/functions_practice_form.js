import { test, expect } from "@playwright/test";
// Подключаем шаги и ассерты.
import { PracticeFormPage } from "../pages/practice_form_page.js";
// Подключаем страницу формы.
export async function runPracticeFormCase(page, data) {
// Экспортируем флоу с данными из спеки.
  const form = new PracticeFormPage(page);
  // Создаем объект страницы для текущей вкладки.
  await test.step("Шаг 1. Открыть учебную форму", async () => {
  // Начинаем шаг открытия.
    await form.open();
    // Открываем тренажер.
    await expect(form.heading).toBeVisible();
    // Проверяем нужный заголовок.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Заполнить и отправить форму", async () => {
  // Начинаем шаг работы с данными.
    await form.submit(data);
    // Страница заполнит все обязательные поля и отправит форму.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить итоговое окно", async () => {
  // Начинаем проверку результата.
    await expect(form.summary).toBeVisible();
    // Дожидаемся появления итогового окна.
    const student = form.summary.locator("xpath=.//tr[th[normalize-space(.)='Ученик']]/td");
    // Находим значение в строке с заголовком Ученик.
    await expect(student).toHaveText(`${data.firstName} ${data.lastName}`);
    // Сравниваем имя и фамилию с данными из спеки.
    const location = form.summary.locator("xpath=.//tr[th[normalize-space(.)='Регион и город']]/td");
    // Находим значение в строке региона и города.
    await expect(location).toHaveText(`${data.region}, ${data.city}`);
    // Проверяем выбранную пару из данных спеки.
  });
  // Завершаем проверку результата.
}
// Завершаем хелпер.
