// Берем test, чтобы Playwright нашел и запустил эту спеку.
import { test } from "@playwright/test";
// Подключаем хелпер, в котором лежат шаги проверки UI, API и БД.
import { runOpenLessonFullCycle } from "./helpers/functions_open_lesson.js";

// Объявляем один независимый автотест и получаем страницу браузера и API-клиент.
test("полный цикл: UI, API и БД показывают один учебный заказ", async ({ page, request }) => {
  // Задаем логин и пароль временного учебного аккаунта на время записи урока.
  const account = { email: "open-lesson@palmeka.ru", password: "open-lesson" };
  // Передаем страницу, API-клиент и аккаунт в хелпер полного цикла.
  await runOpenLessonFullCycle(page, request, account);
});
