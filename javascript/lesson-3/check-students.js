import { makeStudentEmail } from "./student-data.js";
// Подключаем функцию из соседнего файла по ее имени.
const firstEmail = makeStudentEmail(17);
// Вызываем импортированную функцию с первым номером.
const secondEmail = makeStudentEmail(18);
// Вызываем ту же функцию со вторым номером.
console.log("Первый адрес:", firstEmail);
// Печатаем результат первого вызова.
console.log("Второй адрес:", secondEmail);
// Печатаем результат второго вызова.
