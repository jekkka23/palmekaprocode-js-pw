import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и ассерты.
import { TrainingFieldPage } from "../pages/training_field_page.js";
// Путь ../ поднимает нас из helpers к папке training-field, затем ведет в pages.
export async function runTrainingFieldCase(page) {
// Экспортируем флоу, который спека вызовет с текущей вкладкой.
  const field = new TrainingFieldPage(page);
  // Создаем объект страницы для переданной вкладки.
  await test.step("Шаг 1. Открыть тренировочное поле", async () => {
  // Даем первому действию имя, которое появится в отчете.
    await field.open();
    // Открываем /practice через метод страницы.
    await expect(field.field).toBeVisible();
    // Проверяем, что основной блок поля виден ученику.
  });
  // Завершаем первый шаг после успешной проверки.
  await test.step("Шаг 2. Открыть текстовые поля", async () => {
  // Начинаем второй шаг того же теста, а не новый test.
    await field.openTextBox();
    // Переходим по карточке тренажера.
    await expect(field.textBoxHeading).toBeVisible();
    // Проверяем заголовок открытого тренажера.
  });
  // Завершаем второй шаг.
}
// Завершаем хелпер; если ассерт не прошел, упадет вся спека.
