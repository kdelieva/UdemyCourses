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










// Коректор на имена: Напиши функция, която приема име (напр. "jOnAs" или "pEtEr"). Функцията трябва да връща името в правилен формат — първата буква главна, останалите малки ("Jonas").

// Пътна такса (Tol-Tax): Създай функция, която изчислява такса за преминаване по мост. Параметри: vehicleType ("car", "truck", "bike") и isHoliday (boolean).

// Кола: 5 лв.

// Камион: 15 лв.

// Мотор: 2 лв.

// Ако е празник (isHoliday е true), всички такси се удвояват.

// Умен будилник: Напиши функция, която приема day (стринг) и isAsleep (boolean). Ако е "Saturday" или "Sunday" и isAsleep е true, върни "Keep sleeping". Ако е делничен ден и е true, върни "Alarm ringing!".

// Проверка на наличност в склад: Напиши функция, която приема orderedQuantity и stockQuantity. Ако поръчаното е повече от наличното, върни колко бройки не достигат. Ако е налично, върни "Order processed".

// Калкулатор на разход за гориво: Напиши функционален израз, който приема distance (км), consumption (разход на 100 км) и pricePerLiter. Върни общата сума за пътуването.

// Спортен анализатор: Създай функция scoreStatus, която приема точките на един играч.

// Под 10: "Amateur"

// 10-30: "Pro"

// Над 30: "Legend"

// Направи я като Function Expression.

// Мистериозна функция (Debug task): Създай функция, която приема три числа. Тя трябва да връща най-голямото от тях, но без да използваш Math.max(). Използвай само if/else логика вътре във функцията.