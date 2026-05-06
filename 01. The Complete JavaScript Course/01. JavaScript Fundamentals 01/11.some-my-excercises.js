// Задача 1: Калкулатор за Бакшиши (Основи)
// Стивън иска да сметне бакшиша за сметката си.

// Създай променлива bill и ѝ задай стойност (например 100).

// Създай променлива tipPercentage и ѝ задай стойност (например 15).

// Изчисли стойността на бакшиша в нова променлива tipAmount.

// Изчисли общата сума (total) и я отпечатай в конзолата чрез Template Literal в следния формат:

// "Сметката е 100 лв., бакшишът е 15 лв., общо трябва да платите 115 лв."

console.log("Baksheesh Calculator");
let bill = 100;
let tipPercentage = 15;

let tipAmount = bill * (tipPercentage / 100);

let total = bill + tipAmount;
console.log(`The Bill with tip baksheesh is: ${total}eur.`);

console.log("-------------------------");

// Задача 2: Проверка за шофьорска книжка (Логика)
// Трябва да автоматизираме проверка за минимална възраст.

// Създай променлива birthYear (напр. 2010).

// Създай променлива currentYear (2026).

// Изчисли възрастта в променлива age.

// Създай булева променлива canDrive, която да съхранява резултата от проверката: дали възрастта е по-голяма или равна на 18?

// Отпечатай в конзолата: "Може ли потребителят да кара? [true/false]".

const birthYear = 2010;
let currentYear = 2026;

let age = currentYear - birthYear;

let canDrive = age >= 18;

console.log(`Can the user drive a car: ${canDrive}. The user age is: ${age}`);

console.log("--------------------------");

// Задача 3: Сравнение на разстояния (Математика)
// Двама атлети бягат. Трябва да разберем дали единият е избягал повече от другия.

// Атлет А: скорост speedA = 12 км/ч, време timeA = 2 часа.

// Атлет Б: скорост speedB = 15 км/ч, време timeB = 1.5 часа.

// Изчисли изминатото разстояние за двамата (Разстояние = Скорост * Време).

// Създай променлива isAthleteAFaster, която да е true, ако Атлет А е изминал по-голямо разстояние от Атлет Б, и false в противен случай.

// Отпечатай резултата.

let speedA = 12;
let timeA = 2;

let speedB = 15;
let timeB = 1.5;

let distanceA = speedA * timeA;
let distanceB = speedB * timeB;

let isAthleteAFaster = distanceA > distanceB;

console.log(`Is Athlete A faster than Athlete B? The answer is: ${isAthleteAFaster}, because Athlete A distance is: ${distanceA} and Athlete B distance is: ${distanceB}`);

console.log("-----------------------------------");

// Задача 4: Конвертор на температури (Математика и Приоритет)
// Трябва да създадеш програма, която преобразува градуси от Фаренхайт към Целзий.

// Създай променлива fahrenheit и ѝ задай стойност (например 95).

// Формулата за преобразуване е: (Фаренхайт - 32) * 5 / 9.

// Изчисли резултата в променлива celsius.

// Създай булева променлива isHot, която е true, ако градусите по Целзий са над 30.

// Отпечатай: "{fahrenheit} градуса по Фаренхайт са {celsius} по Целзий. Жега ли е? {isHot}".

console.log("Temperature Converter");
let fahrenheit = 95;
let celsius = (fahrenheit - 32) * 5 / 9;

let isHot = celsius > 30;

console.log(`${fahrenheit} degree in Fahrenheit are ${celsius} celsius. Is it Hot? The answer is: ${isHot}.`);

console.log('------------------------------');
// Задача 5: Спестовна касичка (Сложни оператори)
// Представи си, че спестяваш пари, но имаш и разходи.

// Започваш с начален капитал savings = 1000.

// Получаваш лихва от 5% върху тези пари (използвай променлива interestRate = 5).

// След като получиш лихвата, си купуваш нов телефон за 300 единици.

// Задание: Актуализирай променливата savings стъпка по стъпка (използвай математическите оператори за презаписване на стойност).

// Накрая провери дали ти остават повече от 700 единици и отпечатай резултата.

console.log("Saving Bank Excercise");
let savings = 1000;
let interestRate = 5;

savings += (savings * (interestRate / 100));
savings -= 300;

let howMuchMoney = savings > 700;

console.log(`The money that left after receiving interest Rate and then buying a new mobile phone is ${savings}. Are they more than 700? The answer is: ${howMuchMoney}.`);

console.log("---------------------------------------------");

// Задача 6: Предизвикателство "Средна оценка"
// Имаш оценките на двама ученици по два предмета.

// Ученик А: Математика 5, История 6.

// Ученик Б: Математика 4, История 5.

// Изчисли средната оценка на всеки ученик (сборът на оценките делен на броя им).

// Направи сравнение: isStudentABetter – дали средната оценка на Ученик А е по-висока от тази на Ученик Б.

// Отпечатай съобщение, което включва имената и резултата от сравнението.

console.log("Average Grade Excercise");
let mathA = 5;
let historyA = 6;

let mathB = 4;
let historyB = 5;

let studentAResult = (mathA + historyA) / 2;
let studentBResult = (mathB + historyB) / 2;

let isStudentABetter = studentAResult > studentBResult;

console.log(`The Average grade of student A is: ${studentAResult} and the average grade of student B is: ${studentBResult}. So the student A Result is better than student B or not? The answer is: ${isStudentABetter}.`);