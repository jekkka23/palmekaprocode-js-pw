import { test, expect } from "@playwright/test";
// Подключаем именованные шаги и ассерты.
import { CheckBoxPage } from "../pages/check_box_page.js";
// Подключаем страницу из соседней папки pages.
export async function runCheckBoxCase(page) {
// Экспортируем законченный флоу для спеки.
  const tree = new CheckBoxPage(page);
  // Создаем объект страницы для текущей вкладки.
  await test.step("Шаг 1. Открыть дерево чекбоксов", async () => {
  // Начинаем проверку исходного состояния.
    await tree.open();
    // Открываем нужный тренажер.
    await expect(tree.heading).toBeVisible();
    // Проверяем заголовок экрана.
    await expect(tree.desktop).not.toBeChecked();
    // До действия родительский пункт не выбран.
  });
  // Завершаем первый шаг.
  await test.step("Шаг 2. Выбрать Рабочий стол", async () => {
  // Начинаем действие с родительским пунктом.
    await tree.selectDesktop();
    // Выбираем родителя через метод страницы.
  });
  // Завершаем второй шаг.
  await test.step("Шаг 3. Проверить дочерние пункты и результат", async () => {
  // Начинаем проверки состояния после клика.
    await expect(tree.desktop).toBeChecked();
    // Родительский пункт стал выбранным.
    await expect(tree.notes).toBeChecked();
    // Пункт "Заметки" тоже выбран.
    await expect(tree.commands).toBeChecked();
    // Пункт "Команды" тоже выбран.
    await expect(tree.result).toHaveText("Рабочий стол, Заметки, Команды");
    // Сравниваем весь список выбранных пунктов с ожидаемым.
  });
  // Завершаем проверку результата.
}
// Завершаем хелпер.
