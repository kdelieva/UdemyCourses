// Задача 1: Интелигентен Светофар (Switch & Logic)
// Създай система за регулиране на трафика. Имаш променливи light (red, yellow, green) и isEmergencyVehicle (boolean).

// Ако светлината е red, но isEmergencyVehicle е true, отпечатай: "Emergency! Clear the intersection!".

// Ако светлината е red и няма линейка, отпечатай: "Stop".

// Използвай switch за основните цветове, но вгради логика за спешния случай.

console.log("👉 Excercise 01: Intelligent Traffic Light👈");

let light = "yellow";
let isEmergencyVehicle = true;

if (isEmergencyVehicle) {
  console.log("Emergency! Clear the intersection!");
} else {
  switch (light) {
    case "red":
      console.log("Stop!");
      break;
    case "yellow":
      console.log("Ready to Go...");
      break;
    case "green":
      console.log("Go!");
      break;
    default:
      console.log(
        "The Traffic Lights not worked... Look at the sign to determine who has priority.",
      );
  }
}

console.log("--------------------------------------");
console.log("👉 Excercise 02: Tip Calculator Advanced👈");
// Задача 2: Калкулатор на бакшиши (Advanced Ternary)
// Стивън иска калкулатор за бакшиши.

// Ако сметката е между 50 и 300, бакшишът е 15%.
// Ако е над 300, бакшишът е 20%.
// Ако е под 50, бакшишът е 0%.

// Условие: Използвай само един тернарен оператор (може да е вложен), за да изчислиш променливата tip. Отпечатай: "The bill was [bill], the tip was [tip], and the total value [bill + tip]".

let bill = 20;
let tip = 0;

tip =
  bill <= 300 && bill >= 50
    ? bill * (15 / 100)
    : bill > 300
      ? bill * (20 / 100)
      : 0;

let endSum = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${endSum} eur.`,
);

console.log("--------------------------------------");
console.log("👉 Excercise 03: Password Test👈");
// Задача 3: Проверка на парола (Complex Boolean)
// Имаш password (string). Паролата е валидна само ако:

// Дължината ѝ е поне 8 символа.
// Съдържа символа $ или #.
// Не съдържа думата "password" (малки или големи букви).
// Отпечатай "Secure" или "Insecure".

let password = "PAqSSWORD#$";

let toLowerCase = password.toLowerCase();

let lenght = password.length >= 8;
let symbolsInclude = password.includes("$") || password.includes("#");
let isWordInclude = !toLowerCase.includes("password");

let checker = lenght && symbolsInclude && isWordInclude ? "Secure" : "Insecure";

console.log(checker);

console.log("--------------------------------------");
console.log("👉 Excercise 04: Fitness Tracker👈");
// Задача 4: Фитнес тракер (Logic & Statements)
// Имаш stepsCount и isWeekend (boolean).

// Целта за делничен ден е 10,000 крачки.
// Целта за уикенда е 15,000 крачки.
// Направи проверка дали целта е постигната. Ако не е, пресметни колко точно крачки остават до целта и ги отпечатай.

let stepsCount = 7000;
let isWeekend = true;
let target = isWeekend ? 15000 : 10000;

let goal =
  stepsCount >= target
    ? "Goal Reached!"
    : `Not Reached! You need ${target - stepsCount} steps more.`;

console.log(goal);

console.log("--------------------------------------");
console.log("👉 Excercise 05: Fruit Shop👈");
// Задача 5: Магазин за плодове (Nested Switch/If)
// Имаш fruit (apple, banana, orange) и isBio (boolean).
// Базови цени: Apple = 2.00, Banana = 1.50, Orange = 3.00.
// Ако плодът е Bio, цената се увеличава с 50% (умножаваш по 1.5).
// Изчисли крайната цена за 1кг от съответния плод.

let fruit = "bdwwdana";
let isBio = true;
let price = 0;

let applePrice = 2;
let bananaPrice = 1.5;
let orangePrice = 3;

switch (fruit) {
  case "apple":
    price = applePrice;
    break;
  case "banana":
    price = bananaPrice;
    break;
  case "orange":
    price = orangePrice;
    break;
  default:
    price = 0;
}

let endPrice;

if (price > 0 && isBio) {
  endPrice = price += price * (50 / 100);
  console.log(`1kg ${fruit} is ${endPrice} eur.`);
} else if (price > 0) {
  endPrice = price;
  console.log(`1kg ${fruit} is ${endPrice} eur.`);
} else {
  console.log(`We haven't got such fruits as ${fruit}!`);
}

console.log("--------------------------------------");
console.log("👉 Excercise 06: Air Conditioners Expert👈");
// Задача 6: Експерт по климатици (Logical Operators)
// Трябва да решиш дали климатикът да се включи. Имаш temp, humidity и isEcoMode.
// Климатикът се включва, ако:
// Температурата е над 28 градуса.
// Температурата е над 25, но влажността (humidity) е над 60%.
// Обаче, ако isEcoMode е true, климатикът се включва само ако температурата е над 30 градуса, независимо от влажността.

let temp = 26;
let humidity = 60;
let isEcoMode = true;
let isTurn = false;

if (isEcoMode && temp > 30) {
  isTurn = true;
} else {
  if (temp > 28 || (temp > 25 && humidity >= 60)) {
    isTurn = true;
  }
}

console.log(`Air Conditioner status is: ${isTurn}`);


console.log("--------------------------------------");
console.log("👉 Excercise 07: Measurment Converter 👈");

// Задача 7: Преобразувател на мерни единици (Switch)
// Имаш value (число) и unit (string: "km", "miles", "m").
// Ако е "km", превърни го в метри (* 1000).
// Ако е "miles", превърни го в километри (* 1.6).
// Ако е "m", просто отпечатай стойността.
// Ако е нещо друго, отпечатай: "Unit not supported".

let value = 10;
let unit = "miles";
let result;

switch(unit) {
  case "km": result = `${value * 1000} meters`; break; // meters
  case "miles": result = `${value * 1.6} km`; break; //km
  case "m": result = `${value}`; break; //meters
  default: result = "Unit is not supported";
}

console.log(`The unit is: ${unit}, the value is: ${result}.`);


console.log("--------------------------------------");
console.log("👉 Excercise 08: Coctail Bar👈");
// Задача 8: Коктейл бар (Logical NOT & AND)
// Един коктейл е безплатен само ако са изпълнени всички условия:
// Клиентът е над 18 години.
// Клиентът НЕ е пиян (isDrunk = false).
// Денят е "Happy Hour" ИЛИ клиентът има купон за отстъпка.
// Напиши логиката, която решава дали клиентът получава "Free Drink".

let age = 19;
let isDrunk = false;
let isHappyHourDay = true;
let hasCoupon = true;

let hasFreeDrink = ((age > 18) && !isDrunk) && (isHappyHourDay || hasCoupon) ? "Free Drink 🍷" : "No Free Drink. 🤷‍♀️";

console.log(hasFreeDrink);

console.log("--------------------------------------");
console.log("👉 Excercise 09: Universiade👈");
// Задача 9: Универсиада (Comparison & Logic)
// Имаш три резултата на отбор А и три резултата на отбор Б.
// Пресметни средния им резултат.
// Отборът печели купата само ако неговият среден резултат е по-висок от този на другия И е поне 100 точки.
// Ако и двата имат над 100 точки и равен резултат -> "Draw".
// Във всички останали случаи -> "No winner".

let aTeamAvrResult = (105 + 5 + 25) / 3;
let bTeamAvrResult = (15 + 10 + 105) / 3;
let winner;

if((aTeamAvrResult > bTeamAvrResult) && (aTeamAvrResult >= 100)) {
  winner = `The winner is A Team with score ${aTeamAvrResult} 🏆.`;
} else if((aTeamAvrResult < bTeamAvrResult) && (bTeamAvrResult >= 100)) {
  winner = `The winner is B Team with score ${bTeamAvrResult} 🏆.`;
} else if((aTeamAvrResult === bTeamAvrResult) && (aTeamAvrResult > 100)) {
  winner = "Draw";
}else {
  winner = "No Winner 😢.";
}

console.log(winner);

console.log("--------------------------------------");
console.log("👉 Excercise 10: Status Break👈");
// Задача 10: Режим "Почивка" (Ternary & Expression)
// Имаш променлива hour (0-23). Използвай тернарен оператор, за да присвоиш на променлива status една от две стойности:
// "Working", ако часът е между 9 и 18 (включително).
// "Relaxing", във всички останали случаи.
// Отпечатай: "Currently I am [status]".

let hour = 15;
let status = (hour >= 9) && (hour <= 18) ? "Working 🏢" : "Relaxing 😌";

console.log(`Currently I am ${status}.`);