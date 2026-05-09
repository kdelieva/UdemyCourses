console.log("👉Excercise 01: Password Security👈");
// Задача 1: Сигурност на парола (Complex Logic)
// Създай система, която проверява дали една парола е силна.
// Имаш променливи password (string) и passwordLength (number).
// Паролата е валидна, ако:
// Е по-дълга от 8 знака И съдържа знака @ или #.
// Ако е валидна, отпечатай: "Strong password!".
// Ако е между 5 и 8 знака, отпечатай: "Medium password".
// В останалите случаи: "Weak password".
// Жокер: Използвай .includes('@') за проверката на знака.

// let password = 'pass1234';
// let password = 'someCoolPass@#';
// let password = 'pass11';
let password = "pass11sdfgikjfdoigjdfg";
let passwordLength = password.length;

const passIncludes = password.includes("@") || password.includes("#");

if (passIncludes && passwordLength > 8) {
  console.log("Strong Password!");
} else if ((passwordLength >= 5 && passwordLength <= 8) || passwordLength > 8) {
  // + edge case => password > 8 symbols is strong by default and without special symbols
  console.log("Medium password.");
} else {
  console.log("Weak Password!");
}

console.log("---------------------------------------");
console.log("👉Excercise 02: Who will pay the Bill👈");
// Задача 2: Кой ще плати сметката? (Truthiness & Coercion)
// Трима приятели отиват на вечеря. Имаш friend1Name = 'Ivan', friend1Money = 50, friend2Name = '', friend2Money = 100, friend3Name = 'Petar', friend3Money = 0.

// Напиши логика, която проверява: ако името на приятеля е Truthy (не е празен низ) И парите му са над 0, той може да плати.

// Използвай if / else if, за да провериш тримата подред.

// Отпечатай първия, който отговаря на условията.

const firstFriendName = "Ivan";
let firstFriendMoney = 50;

const secondFriendName = "";
let secondFriendMoney = 100;

const thirdFriendName = "Petar";
let thirdFriendMoney = 0;

if (firstFriendName && firstFriendMoney > 0) {
  console.log(
    `${firstFriendName} can pay the bill, because has got enough money. Total: ${firstFriendMoney} eur.`,
  );
} else if (secondFriendName && secondFriendMoney > 0) {
  console.log(
    `${secondFriendName} can pay the bill, because has got enough money. Total: ${secondFriendMoney} eur.`,
  );
} else if (thirdFriendName && thirdFriendMoney > 0) {
  console.log(
    `${thirdFriendName} can pay the bill, because has got enough money. Total: ${thirdFriendMoney} eur.`,
  );
}

console.log("---------------------------------------");
console.log("👉Excercise 03: University Admission👈");
// Задача 3: Прием в университет (Boolean Logic)
// Кандидатстваш в университет. Имаш три критерия:
// avgGrade (число).
// hasDiploma (boolean).
// isSportsman (boolean).
// Трябва да отпечаташ "Accepted", ако:
// Оценката е над 5.50 И има диплома.
// ИЛИ ако оценката е над 4.50 И има диплома И е спортист.
// В противен случай: "Rejected".
let avgGrade = 4.56;
let hasDiploma = true;
let isSportsman = false;

let firstCase = avgGrade > 5.5 && hasDiploma;
let secondCase = avgGrade > 4.5 && hasDiploma;

if (firstCase || (secondCase && isSportsman)) {
  console.log("Accepted");
} else {
  console.log(
    `Rejected, because Average Grade is: ${avgGrade} and isSportsman = ${isSportsman}`,
  );
}

console.log("---------------------------------------");
console.log("👉Excercise 04: Smart Home - Thermostat👈");
// Задача 4: Smart Home – Термостат (Short-circuiting)
// Имаш променливи currentTemp, isRaining и manualOverride (boolean).
// Климатикът се включва ("AC On"), ако:
// Температурата е над 30 градуса.
// ИЛИ ако температурата е над 25 градуса и НЕ вали.
// Но ако manualOverride е true, климатикът винаги се включва, независимо от времето.
// Напиши логиката с минимален брой if проверки.

let currentTemp = 25;
let isRaining = true;
let manualOverride = false;

let fCase = currentTemp > 30;
let sCase = currentTemp >= 25 && !isRaining;

if (fCase || sCase || manualOverride) {
  console.log("AC On");
} else {
  console.log("AC OFF");
}

console.log("---------------------------------------");
console.log("👉Excercise 05: Convert Units👈");
// Задача 5: Преобразуване на мерни единици (Type Conversion)
// Създай конвертор, който приема value (може да е string или number) и unit (string - 'cm' или 'm').
// Първо превърни value в число.
// Ако unit е 'm', превърни го в сантиметри (умножи по 100).
// Ако крайният резултат е над 1000 см, отпечатай "Too long".
// Ако е под или точно 1000 см, отпечатай "Distance is okay".
// Ако value след преобразуването не е валидно число (е NaN), отпечатай "Invalid input".

let value = 0;
let valueToNumber = Number(value);

let unit = "m";
if (unit === "m") {
  valueToNumber *= 100; //in cm
}

if (Number.isNaN(valueToNumber)) {
  console.log("Invalid Input");
} else if (valueToNumber > 1000) {
  console.log("TOO LONG");
} else if (valueToNumber <= 1000) {
  console.log("Distance is OK");
}

console.log("---------------------------------------");
console.log("👉Excercise 06: Convert Units👈");
// Условие:
// Имаш age = 15 и hasMoney = true.
// Правила за цените:
// Под 12 години: 5 лв.
// От 12 до 18 години (включително): 10 лв.
// Над 18 години: 15 лв.
// Задачата:
// Първо определи цената на билета според възрастта и я запази в променлива ticketPrice.
// След това направи проверка: ако hasMoney е true, отпечатай: "You can watch the movie. Your ticket costs [ticketPrice] лв.".
// Ако е false, отпечатай: "You need more money!".

let age = 15;
let hasMoney = true;
let ticketPrice;

if (age < 12) {
  ticketPrice = 5;
} else if (age >= 12 && age <= 18) {
  ticketPrice = 10;
} else {
  ticketPrice = 15;
}

if (hasMoney) {
  console.log(`You can watch the movie. Your ticket costs ${ticketPrice} eur.`);
} else {
  console.log("You need more money!");
}

console.log("---------------------------------------");
console.log("👉Excercise 07: Bank Credit Algorithm👈");

// Задача 7: Алгоритъм за одобрение на банков заем
// Банкова институция използва автоматизирана система за оценка на риск при кредитиране. Трябва да създадеш логика, която обработва профила на клиент и връща решение.
// Данни:
// income (число) – месечен доход.
// creditScore (число) – рейтинг от 0 до 800.
// hasCriminalRecord (boolean) – съдебно минало.
// employmentYears (число) – стаж на текущата работа.

// Условия за одобрение:
// Клиентът получава "Loan Approved", ако:
// Няма съдебно минало.
// И отговаря на една от следните комбинации:
// Има доход над 3000 евро, независимо от стажа.
// Има доход над 2000 евро, кредитният му рейтинг е над 600 и работи на текущото място поне от 2 години.
// Има кредитен рейтинг над 750, дори ако доходът му е нисък, стига да работи поне от 1 година.
// Ако клиентът има съдебно минало, той винаги бива отхвърлен с "Loan Denied: Background check failed". В останалите случаи на неуспех, изпиши: "Loan Denied: Low eligibility".

let income = 400;
let creditScore = 650;
let hasCriminalRecord = true;
let employmentYears = 5;

let isApproved = false;

let firstApprovedVariant =
  income > 2000 && creditScore > 600 && employmentYears >= 2;
let secondApprovedVariant = creditScore > 750 && employmentYears >= 1;

if (!hasCriminalRecord) {
  if (income > 3000 || firstApprovedVariant || secondApprovedVariant) {
    isApproved = true;
  }

  if (isApproved) {
    console.log("Loan Approved");
  } else {
    console.log("Loan Denied: Low eligibility");
  }
} else {
  console.log("Loan Denied: Background check failed");
}

console.log("---------------------------------------");
console.log("👉Excercise 08: Road Toll👈");
// Задача 8: Пътна такса (Smart Toll System)
// Система за таксуване на магистрала изчислява сумата според типа превозно средство, теглото му и текущия ден от седмицата.

// Данни:
// vehicleType (string) – може да бъде 'car', 'truck' или 'bus'.
// weight (число) – тегло в тонове.
// dayOfWeek (string) – ден от седмицата.
// Логика на ценообразуване:
// Базова такса: Кола = 5 евро, Автобус = 12 евро, Камион = 20 евро.
// Добавка за тегло: Ако камионът тежи над 15 тона, се добавят 10 евро към базовата такса. Ако колата тежи над 2 тона (електрически SUV), се добавят 2 евро.
// Уикенд тарифа: През събота и неделя всички такси се увеличават с 25%.
// Специално правило: Ако превозното средство е непознат тип (различен от трите посочени), системата трябва да блокира с "Error: Unknown vehicle type".
// Изчисли финалната сума и я отпечатай във формат: "Vehicle: [type], Day: [day], Total: [price] EUR".

let vehicleType = "bus";
let weight = 5;
let dayOfWeek = "Sunday";

let carBaseTax = 5;
let busBaseTax = 12;
let truckBaseTax = 20;

let endPrice;

if (vehicleType === "car" || vehicleType === "bus" || vehicleType === "truck") {
  if (vehicleType === "car" && weight > 2) {
    carBaseTax += 2;
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
      carBaseTax += carBaseTax * (25 / 100);
    }
    endPrice = carBaseTax;
  } else if (vehicleType === "truck" && weight > 15) {
    truckBaseTax += 10;
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
      truckBaseTax += truckBaseTax * (25 / 100);
    }
    endPrice = truckBaseTax;
  } else if (vehicleType === "bus") {
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
      busBaseTax += busBaseTax * (25 / 100);
    }
    endPrice = busBaseTax;
  }
  console.log(
    `Vehicle: ${vehicleType}, Day: ${dayOfWeek}, Total: ${endPrice} EUR`,
  );
} else {
  console.log("Error: Unknown vehicle type");
}


console.log("---------------------------------------");
console.log("👉Excercise 09: School Scholarship System👈");
// Задача 9: Система за училищни стипендии
// Трябва да прецениш дали един ученик има право на социална или отлична стипендия. Един ученик може да има право и на двете, но получава само по-високата от тях.

// Данни:
// averageGrade (число).
// familyIncome (число).
// minSalary (число) – минимална работна заплата.

// Критерии:
// Социална стипендия: Доходът на семейството е по-малък от минималната заплата И успехът е над 4.50. Сумата е 35% от минималната заплата.
// Стипендия за отличен успех: Успехът е равен или по-голям от 5.50. Сумата е успехът, умножен по 25.

// Резултат:
// Ако няма право на нито една, изпиши: "No scholarship".
// Ако има право и на двете, изчисли коя е по-голяма и отпечатай нея: "You get [име] scholarship: [сума] BGN".
// Ако сумите са равни, предимство има отличната стипендия.

let averageGrade = 4.5;
let familyIncome = 1240;
let minSalary = 620;
let firstName = "Georgi";

let socialScholarship = 0;
let excellentScholarship = 0;

if((familyIncome < minSalary) && (averageGrade > 4.5)) {
    socialScholarship = minSalary * (35 / 100);
}

if(averageGrade >= 5.5) {
    excellentScholarship = averageGrade * 25;
}

if((excellentScholarship === 0) && (socialScholarship === 0)) {
  console.log("No scholarship.");
} else if(excellentScholarship >= socialScholarship) {
    console.log(`You get ${firstName} Excellent scholarship: ${excellentScholarship} BGN`);
}else if(excellentScholarship < socialScholarship) {
    console.log(`You get ${firstName} Social scholarship: ${socialScholarship} BGN`);
}

console.log("---------------------------------------");
console.log("👉Excercise 10: Registration Form Validation👈");
// Задача 10: Валидация на форма за регистрация (Complex Logic)
// Създаваш логика за проверка на потребителски данни в уеб сайт.

// Данни:
// username (string).
// email (string).
// age (число).
// isAdmin (boolean).

// Изисквания за валидност:
// Потребителското име трябва да е между 5 и 15 символа.
// Имейлът трябва да съдържа задължително @ И . (точка).
// Възрастта трябва да е положително число.
// Специален случай: Ако isAdmin е true, възрастта и името нямат значение (винаги са валидни), но имейлът винаги трябва да е валиден.

// Отпечатай "Registration successful", ако условията са спазени. В противен случай отпечатай "Registration failed: [причина]" (причината трябва да е първото невалидно поле, което срещнеш).

// Данни:
// username = "User123"
// email = "test@mail.com"
// age = 25
// isAdmin = false

let username = "User123";
let email = "test@mail.com";
let nAge = 25;
let isAdmin = false;

let isValid = false;

let isUserValid = username.length >= 5 && username.length <= 15;
let isEmailValid = email.includes("@") && email.includes(".");
let isAgeValid = nAge >= 0;

if(isAdmin) {
    if(isEmailValid) {
        isValid = true;
    }
} else if(isUserValid && isEmailValid && isAgeValid) {
    isValid = true;
}

if(isValid) {
    console.log("Registration successful");
} else {
    if(!isUserValid) {
         console.log(`Registration failed: Invalid User Name`);
    }else if(!isEmailValid) {
        console.log(`Registration failed: Invalid Email`);
    }else if(!isAgeValid) {
         console.log(`Registration failed: Invalid Age `);
    } 
}