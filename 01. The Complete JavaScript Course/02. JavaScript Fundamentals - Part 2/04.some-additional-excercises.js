'use strict'
console.log("👉Excercise 01: ATM Simulator👈");
// Симулатор на банкомат: Създай функционален израз withdrawMoney, който приема balance (текуща наличност) и amount (сума за теглене).

// Ако сумата е над 500 лв, върни "Daily limit exceeded".
// Ако сумата е по-голяма от наличността, върни "Insufficient funds".
// Ако всичко е наред, върни остатъка след тегленето.

const withdrawMoney = function (balance, amountForWithdraw) {
    const result = amountForWithdraw >= 500 ? "Daily Limit exceeded" :  amountForWithdraw > balance ? "Insufficient funds" : balance - amountForWithdraw;

    return result;
}

const atmResult = withdrawMoney(500, 400);
console.log(atmResult);

console.log("-----------------------------------");
console.log("👉Excercise 02: Function Architect👈");
// Архитект на функции: Напиши функция describeCountry, която приема country, population и capital. След това напиши втора функция, която приема масив от обекти (или просто я извикай три пъти с различни параметри) и връща форматиран стринг. Предизвикателството: Направи така, че ако населението е над 10 милиона, функцията автоматично да добавя "is a big country" в стринга.

function describeCountry(country, population, capital) {
    let info = `The country ${country} has got capital ${capital} and population from`;
    return info;
}

const countryInfo = describeCountry("Bulgaria", 6.5, "Sofia");
const population = function (newPopulation) {
    if(newPopulation > 10) {
        return `${countryInfo} ${newPopulation} millions people with make it a Big Contry.`;
    }else {
        return `${countryInfo} ${newPopulation} millions people.`
    }
}

console.log(population(12));
console.log(population(19));
console.log(population(6));


console.log("-----------------------------------");
console.log("👉Excercise 03: Age Filter👈");
// Условие:
// Напиши функция (избери сама дали да е Declaration или Expression), която се казва checkWorkEligibility.

// Функцията трябва да приема един параметър: age (възраст).
// Вътре във функцията провери дали възрастта е по-голяма или равна на 18 И по-малка или равна на 65.
// Функцията трябва да връща true, ако човекът е в трудоспособна възраст, и false, ако не е.
// Извикай функцията няколко пъти с различни числа (напр. 15, 25, 70) и изпиши резултатите в конзолата.

const checkWorkEligibility = function (age) {
    const result = age >= 18 && age <= 65;
    return result;
}

console.log(`Is the human can work? The answer is: ${checkWorkEligibility(15)}, because the age is 15.`);
console.log(`Is the human can work? The answer is: ${checkWorkEligibility(25)}, because the age is 25.`);
console.log(`Is the human can work? The answer is: ${checkWorkEligibility(70)}, because the age is 70.`);

console.log("-----------------------------------");
console.log("👉Excercise 04: Name Corrector👈");
// Коректор на имена: Напиши функция, която приема име (напр. "jOnAs" или "pEtEr"). Функцията трябва да връща името в правилен формат — първата буква главна, останалите малки ("Jonas").

function nameCorrector(firstName) {
    const toLowerLetters = firstName.toLowerCase();
    const toArray = toLowerLetters.split(''); 
    toArray[0] = toArray[0].toUpperCase();
    
    return toArray.join('');
}

console.log(nameCorrector("jOnAs"));
console.log(nameCorrector("pEtEr"));

console.log("-----------------------------------");
console.log("👉Excercise 05: Toll Tax👈");
// Пътна такса (Tol-Tax): Създай функция, която изчислява такса за преминаване по мост. Параметри: vehicleType ("car", "truck", "bike") и isHoliday (boolean).

// Кола: 5 лв.
// Камион: 15 лв.
// Мотор: 2 лв.
// Ако е празник (isHoliday е true), всички такси се удвояват.

function tollTaxCalculator(vehicleType, isHoliday) {
    let price = 0;

    switch(vehicleType) {
        case 'car': price = 5; break;
        case 'truck': price = 15; break;
        case 'motorcycle': price = 2; break;
    }

    return isHoliday ? price * 2 : price;
}

const dataOne = tollTaxCalculator('truck', false);
const dataTwo = tollTaxCalculator('motorcycle', true);
const dataThree = tollTaxCalculator('car', true);

console.log(`The Toll Tax is: ${dataOne}`);
console.log(`The Toll Tax is: ${dataTwo}`);
console.log(`The Toll Tax is: ${dataThree}`);

console.log("-----------------------------------");
console.log("👉Excercise 06: Smart Watch👈");
// Умен будилник: Напиши функция, която приема day (стринг) и isAsleep (boolean). Ако е "Saturday" или "Sunday" и isAsleep е true, върни "Keep sleeping". Ако е делничен ден и е true, върни "Alarm ringing!".

const smartWatch = function (day, isAsleep) {
    let weekendBoolean = false;
    let workBoolean = false;
    switch(day) {
        case 'Saturday':
        case "Sunday":
            weekendBoolean = true;
        break;
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            workBoolean = true;
        break;
    }

    if(workBoolean && isAsleep) {
        return "Alarm ringing";
    }else if(weekendBoolean && isAsleep) {
        return "Keep sleeping";
    }else {
        return 'Alarm is OFF';
    }
}

const firstStatus = smartWatch('Wednesday', true);
const secondStatus = smartWatch('Sunday', false);
console.log(firstStatus);
console.log(secondStatus);


console.log("-----------------------------------");
console.log(`👉Excercise 07: Stock Availability👈
    `);
// Проверка на наличност в склад: Напиши функция, която приема orderedQuantity и stockQuantity. Ако поръчаното е повече от наличното, върни колко бройки не достигат. Ако е налично, върни "Order processed".

function stockAvailability(orderedQuantity, stockQuantity) {
    if(orderedQuantity > stockQuantity) {
        return String(Math.abs(orderedQuantity - stockQuantity));
    }else {
        return "Order processed."
    }
}

const firstData = stockAvailability(23, 15);
const secondData = stockAvailability(17, 19);
const thirdData = stockAvailability(23, 23);


console.log(`Status: ${firstData}
---
Status: ${secondData}
---
Status: ${thirdData}`);


console.log("-----------------------------------");
console.log(`👉Excercise 08: Fuel Calculator👈`);
// Калкулатор на разход за гориво: Напиши функционален израз, който приема distance (км), consumption (разход на 100 км) и pricePerLiter. Върни общата сума за пътуването.

const fuelCalculator = function (distance, consumption, pricePerLiter) {
    return `The consumation is ${(((distance * consumption) / 100) * pricePerLiter).toFixed(2)} eur total fuel price cost.`
}

const data1 = fuelCalculator(10, 4, 2.23);
console.log(data1);


console.log("-----------------------------------");
console.log(`👉Excercise 09: Sport Analyzer👈`);
// Спортен анализатор: Създай функция scoreStatus, която приема точките на един играч.
// Под 10: "Amateur"
// 10-30: "Pro"
// Над 30: "Legend"
// Направи я като Function Expression.
//Изискване: Използвай вложени тернарни оператори (без if/else).

const scoreStatus = function (points) {
    const result = 0;

    return `${points >= 0 && points < 10 ? "Amateur" : points >= 10 && points <= 30 ? "Pro" : points > 30 ? "Legend" : "Error"}`
}

const aPoints = scoreStatus(100);
const bPoints = scoreStatus(5)
const cPoints = scoreStatus(16)
const dPoints = scoreStatus(-5)


console.log(aPoints);
console.log(bPoints);
console.log(cPoints);
console.log(dPoints);


console.log("-----------------------------------");
console.log(`👉Excercise 10: Mysterious function👈`);
// Мистериозна функция (Debug task): Създай функция, която приема три числа. Тя трябва да връща най-голямото от тях, но без да използваш Math.max(). Използвай само if/else логика вътре във функцията.

function maxNumber(firstNum, secondNum, thirdNum) {
    let result = '';
    if(firstNum > secondNum && firstNum > thirdNum) {
        result = `First Number ${firstNum} is biggest`;
    }else if(secondNum > firstNum && secondNum > thirdNum) {
        result = `Second Number ${secondNum} is biggest`;
    }else if(thirdNum > firstNum && thirdNum > secondNum) {
        result = `Third Number ${thirdNum} is biggest`;
    } else {
        result = `The number ${firstNum} is equal to the other two!`;
    }

    return result;
}

const resultOne = maxNumber(4, 12, 0);
const resultTwo = maxNumber(24, 16, 4);
const resultThree = maxNumber(-5, 10, 100);
const resultFour = maxNumber(1, 1, 1);

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
console.log(resultFour);


console.log("-----------------------------------");
console.log(`👉Excercise 10: Mysterious function👈`);
// Задача 10 (Финална): Генератор на потребителско име
// Тази задача ще тества умението ти да "сглобяваш" различни части от данни в едно цяло.

// Условие:
// Напиши функция generateUsername, която приема два параметъра: firstName (стринг) и birthYear (число).

// Част 1: Вземи само първите 3 букви от името и ги направи малки.
// Част 2: Вземи само последните две цифри от годината (напр. от 1991 искаме "91").

// Подсказка: Превърни годината в стринг със String(birthYear) и използвай .slice(-2).

// Резултат: Съедини двете части и върни готовото потребителско име.

// Пример:
// generateUsername("Maria", 1998) трябва да върне "mar98".
// generateUsername("Ivan", 2005) трябва да върне "iva05".

function generateUsername(firstName, birthYear) {
    const firstThreeLeters = firstName.slice(0, 3).toLowerCase();
    const latestNums = String(birthYear).slice(2);

    return firstThreeLeters + latestNums;

}

const dataFirst = generateUsername("Jonas", 1991);
const dataSecond = generateUsername("Georgi", 1984);
const dataThird = generateUsername("MArYa", 2005);

console.log(dataFirst);
console.log(dataSecond);
console.log(dataThird);