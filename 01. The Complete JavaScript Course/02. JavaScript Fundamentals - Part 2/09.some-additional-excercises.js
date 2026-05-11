"use strict";

console.log("👉Excercise 01: Celsius to Fahrenheit👈");
// 1. Температурен конвертор (Arrow Function)Създай arrow function celsiusToFahrenheit, която приема градуси по Целзий и връща градуси по Фаренхайт.Формула: Celsius times X 1.8 + 32

const celsiusToFahrenheit = (celsiusDegrees) => celsiusDegrees * 1.8 + 32;

let fahrenheitTemp = celsiusToFahrenheit(25);
console.log(fahrenheitTemp);

fahrenheitTemp = celsiusToFahrenheit(1);
console.log(fahrenheitTemp);

console.log("----------------------------------------");
console.log("👉Excercise 02: AdultChecker👈");

// 2. Проверка за пълнолетие (Expression vs Declaration)
// Напиши една и съща функция по двата начина (Declaration и Expression). Тя трябва да приема birthYear и да връща true, ако човекът е на или над 18 години, и false, ако не е. (Използвай текущата 2026 година).

//First Case - Function Declaration
function adultChecker(birthYear) {
  return 2026 - birthYear >= 18;
}

const firstResult = adultChecker(2009);
console.log(`In first case the answer is: ${firstResult}.`);

//Second Case - Function Expression
const ageChecker = function (birthYear) {
  return 2026 - birthYear >= 18;
};

const resultSecond = ageChecker(1945);
console.log(`In second case the answer is ${resultSecond}.`);

console.log("----------------------------------------");
console.log("👉Excercise 03: Tip Calculator👈");

// 3. Калкулатор на бакшиш (Arrow Function + Ternary)
// Създай arrow function calcTip, която приема сумата на сметката. Ако сметката е между 50 и 300 лв., бакшишът е 15%. В противен случай е 20%. Функцията трябва да връща само сумата на бакшиша.

const calcTip = (billSum) =>
  billSum >= 50 && billSum <= 300 ? billSum * (15 / 100) : billSum * (20 / 100);

let bill = calcTip(70);
console.log(`The tip is: ${bill} eur.`);

bill = calcTip(20);
console.log(`The tip is: ${bill} eur.`);

console.log("----------------------------------------");
console.log("👉Excercise 04: Restaurant Review👈");
// 4. Ревю на ресторант (Functions calling Functions)
// Създай две функции:

// calcTax(price): връща 20% ДДС върху дадена цена.
// totalBill(price): извиква calcTax, добавя данъка към оригиналната цена и връща крайния стринг: "Total price with VAT: X.XX BGN".

let price = 150;

const calcTax = (price) => price * (20 / 100);
const totalBill = (price) => {
  let sum = calcTax(price) + price;
  return `Total price with VAT: ${sum.toFixed(2)} eur.`;
};

console.log(totalBill(price));

console.log("----------------------------------------");
console.log("👉Excercise 05: Currency Calculator👈");

// 5. Валутен калкулатор (Function Expression)
// Създай функционален израз convertCurrency, който приема amount и currencyType ("USD" или "GBP").

// Ако е "USD", курсът е 1.80.
// Ако е "GBP", курсът е 2.10.
// Върни закръглен резултат до втория знак.

let usdValue = 1.8;
let gbpValue = 2.1;

const convertCurrency = function (amount, currencyType) {
  let result;
  let text = currencyType.toLowerCase();

  if (text === "usd") {
    result = (amount * usdValue).toFixed(2);
  } else if (text === "gbp") {
    result = (amount * gbpValue).toFixed(2);
  } else {
    result = "Invalid Currency";
  }

  return result;
};

let money = convertCurrency(150, "UsD");
console.log(money);

money = convertCurrency(10, "gbP");
console.log(money);

money = convertCurrency(150, "BGN");
console.log(money);

console.log("----------------------------------------");
console.log("👉Excercise 06: Name Corrector👈");
// 6. Коректор на имена (String manipulation)
// Напиши функция, която приема име (напр. "jOnAs" или "pEtEr"). Функцията трябва да връща името в правилен формат — първата буква главна, останалите малки ("Jonas").

const firstName = "peTeR";

const nameCorrector = function (firstName) {
  const firstLetter = firstName.slice(0, 1).toUpperCase();
  const secondNamePart = firstName.toLowerCase();

  return firstLetter + secondNamePart.slice(1);
};

console.log(nameCorrector(firstName));

console.log("----------------------------------------");
console.log("👉Excercise 07: Toll Tax👈");
// 7. Пътна такса (Switch + Holiday logic)
// Създай функция calculateToll, която приема vehicleType ("car", "truck", "bike") и isHoliday (boolean).

// Базови цени: car: 5, truck: 15, bike: 2.
// Ако е празник, таксата се удвоява. Използвай switch вътре.

const vehicleType = "tddruck";
let isHoliday = true;

const carPrice = 5;
const truckPrice = 15;
const bikePrice = 2;

const calculateToll = (somePrice) => (isHoliday ? somePrice * 2 : somePrice);

let result;

switch (vehicleType) {
  case "car":
    result = calculateToll(carPrice);
    break;
  case "truck":
    result = calculateToll(truckPrice);
    break;
  case "bike":
    result = calculateToll(bikePrice);
    break;
  default:
    result = "Invalid Vehicle";
}

console.log(result);

console.log("----------------------------------------");
console.log("👉Excercise 08: Smart Alarm👈");
// 8. Умен будилник (Logical Operators)
// Напиши функция smartAlarm, която приема day (стринг) и isAsleep (boolean).

// Ако е делничен ден И спиш -> "Alarm ringing! Time for work."

// Ако е почивен ден И спиш -> "Keep sleeping, it's weekend."

// Във всички останали случаи -> "No alarm needed."

const smartAlarm = function (day, isAsleep) {
  const dayToLowerCase = day.toLowerCase();

  switch (dayToLowerCase) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      if (isAsleep) {
        return "Alarm Ringing. Time for work!";
      }
      break;
    case "saturday":
    case "sunday":
      if (isAsleep) {
        return "Keep sleeping, it's weekend!";
      }
      break;
    default:
      return "No alarm needed!";
  }
};

console.log(smartAlarm("MonDay", true));
console.log(smartAlarm("SaturdY", true));
console.log(smartAlarm("MonDay", false));
console.log(smartAlarm("dddd", false));

console.log("----------------------------------------");
console.log("👉Excercise 09: Salary Software👈");
// Финално предизвикателство (Задача 9): Софтуер за заплати
// Нека комбинираме всичко научено: Arrow functions, Logic, Math и String manipulation.

// Условие:
// Напиши функция calculateSalary, която приема три параметъра: employeeName, hoursWorked и hourlyRate.

// Име: Форматирай името така, че винаги да започва с главна буква, а останалите да са малки (напр. "mArIa" -> "Maria").

// Основна заплата: Пресметни я като hoursWorked * hourlyRate.

// Бонус: Ако служителят е работил повече от 160 часа, добави 10% бонус върху общата сума.

// Резултат: Върни стринг: "Employee [Name] earned [Total] eur this month." (Сумата да е закръглена до втория знак).

// Пример за тест:
// console.log(calculateSalary("pEtEr", 170, 20));
// (Трябва да изчисли 170 * 20 = 3400 + 10% бонус = 3740.00)

function calculateSalary(employeeName, hoursWorked, hourlyRate) {
    const firstLetter = employeeName.slice(0, 1).toUpperCase();
    const restOfTheName = employeeName.slice(1).toLowerCase();
    const newEmployeeName = firstLetter + restOfTheName;
    
    const basicSalary = hoursWorked * hourlyRate;
    
    let totalSalary = hoursWorked > 160 ? basicSalary + (basicSalary * (10 / 100)) : basicSalary;

    return `Employee ${newEmployeeName} earned ${totalSalary.toFixed(2)} eur this month.`
}

console.log(calculateSalary("pEtEr", 170, 20));