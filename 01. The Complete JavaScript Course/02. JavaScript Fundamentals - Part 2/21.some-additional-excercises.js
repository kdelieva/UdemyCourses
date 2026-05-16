"use strict";

console.log('👉Excercise 01: Numbers Filter👈');
// Задача 1: Филтър за числа (Упражнение за continue) 🔢
// Условие:
// Имаш масив с различни типове данни: const mixedData = [12, "Ivan", true, 45, "Tech", 7, false, 100];.
// Напиши for цикъл, който обхожда масива, но:

// Ако елементът НЕ е число, цикълът трябва да го прескочи (използвай continue).

// Всички намерени числа трябва да се умножат по 2 и да се прибавят в нов масив onlyNumbers.

// Тест:
// Накрая onlyNumbers трябва да съдържа: [24, 90, 14, 200].

const mixedData = [12, "Ivan", true, 45, "Tech", 7, false, 100];

const onlyNumbers = [];

for(let i=0; i < mixedData.length; i++) {
    let arrayElement = mixedData[i];

    if(typeof arrayElement !== "number") continue;
    let newNum = arrayElement * 2;
    onlyNumbers.push(newNum);
}

console.log(onlyNumbers);

console.log("--------------------------------------");
console.log('👉Excercise 02: Special Element Searcher👈');
// Задача 2: Търсач на специален елемент (Упражнение за break) 🔍
// Условие:
// Имаш масив от стрингове (продукти в склад): const warehouse = ["ябълка", "банан", "ПОРТОКАЛ", "круша", "лимон"];.
// Напиши for цикъл, който търси продукта "ПОРТОКАЛ".

// Цикълът трябва да проверява всеки елемент.

// В момента, в който намери "ПОРТОКАЛ", трябва да изпише в конзолата: "Намерен на позиция [индекс]!" и веднага да прекрати работата си (използвай break), за да не хаби компютърна памет за останалите елементи.

const warehouse = ["ябълка", "банан", "ПОРТОКАЛ", "круша", "лимон"];

for(let i = 0; i < warehouse.length; i++) {
    let product = warehouse[i];

    if(product === "ПОРТОКАЛ") {
        console.log(`Намерен е на позиция ${i}!`);
        break;
    }

}


console.log("--------------------------------------");
console.log('👉Excercise 03: Voices Counter👈');
// Задача 3: Преброяване на гласове (Обект + Цикъл) 🗳️
// Условие:
// Имаш масив от булеви стойности, представляващи анкета (дали хората харесват JS):
// const votes = [true, true, false, true, false, true, true];

// Създай обект results, който изглежда така:

// JavaScript
// const results = {
//   yes: 0,
//   no: 0
// };
// Напиши for цикъл, който минава през масива votes. Ако елементът е true, увеличи results.yes с 1. Ако е false, увеличи results.no с 1.

const votes = [true, true, false, true, false, true, true];

const results = {
    yes: 0,
    no: 0
};

for(let i = 0; i < votes.length; i++) {
    let voteStatus = votes[i];

    if(voteStatus) {
        results.yes += 1;
    }else {
        results.no += 1;
    }
}

console.log(results);


console.log("--------------------------------------");
console.log('👉Excercise 04: Average Score Calculation👈');
// Задача 4: Изчисляване на средна оценка (Масив от обекти) 🎓

// Условие:
// Имаш масив със студенти:

// JavaScript
// const students = [
//   { name: "Anna", grade: 5.50 },
//   { name: "Alex", grade: 4.20 },
//   { name: "Maria", grade: 6.00 }
// ];
// Напиши for цикъл, който събира оценките (grade) на всички студенти. След цикъла изчисли средната оценка (общата сума, разделена на броя на студентите) и я принтирай.

const students = [
  { name: "Anna", grade: 5.50 },
  { name: "Alex", grade: 4.20 },
  { name: "Maria", grade: 6.00 }
];

let studentsGrades = 0;

for(let i = 0; i < students.length; i++) {
    let student = students[i];
    studentsGrades += Number(student.grade);
}

const averageGrade = studentsGrades / students.length;
console.log(`The average Grade of the students is: ${averageGrade.toFixed(2)}`);


console.log("--------------------------------------");
console.log('👉Excercise 05: Data Types Changes👈');
// Задача 5: Смяна на типа данни (Mutate Array) 🔄
// Условие:
// Имаш масив с цени в стрингов формат: const stringPrices = ["10", "25.50", "40", "5.75"];.
// Напиши for цикъл, който променя оригиналния масив, като превръща всеки стринг в истинско число (използвай Number() или parseFloat()).

// Тест:
// След цикъла, console.log(stringPrices) трябва да покаже [10, 25.5, 40, 5.75] (като числа, без кавички).

const stringPrices = ["10", "25.50", "40", "5.75"];

for(let i = 0; i < stringPrices.length; i++) {
    let price = stringPrices[i];
    stringPrices[i] = Number(price);
}

console.log(stringPrices);


console.log("--------------------------------------");
console.log('👉Excercise 06: Sallary Scanner👈');
// Задача 6: Скенер за заплати 💸
// Условие:
// Имаш масив със заплати: const salaries = [1200, 2500, 900, 3400, 1500];.
// Напиши обект salaryManager със свойство taxFreeLimit: 2000 и метод calculateTaxes.
// Методът трябва с for цикъл да обходи заплатите. Ако заплатата е над taxFreeLimit, от нея трябва да се извадят 10% данък. Накрая методът връща нов масив с обновените заплати.

const salaries = [1200, 2500, 900, 3400, 1500];

const salaryManager = {
    taxFreeLimit: 2000,

    calculateTaxes: function (salariesArr) {

        const newSalaries = [];
            for(let i = 0; i < salariesArr.length; i++) {
            let salary = salariesArr[i];

            if(salary > this.taxFreeLimit) {
                salary = salary - (salary * ( 10 / 100));
                newSalaries.push(salary);
            }else {
                newSalaries.push(salary);
            }
        }

        return newSalaries;
    }
};

const salariesNew = salaryManager.calculateTaxes(salaries);
console.log(salariesNew);


console.log("--------------------------------------");
console.log('👉Excercise 07: Longest word👈');
// Задача 7: Най-дългата дума 📝
// Условие:
// Имаш масив от думи: const words = ["JS", "Python", "Java", "C++", "JavaScript"];.
// Напиши цикъл, който намира коя е думата с най-голяма дължина (използвай .length върху самите стрингове) и я отпечатай в конзолата.

const words = ["JS", "Python", "Java", "C++", "JavaScript"];

let longestWord = '';

for(let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if(currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }
}

console.log(longestWord);


console.log("--------------------------------------");
console.log('👉Excercise 08: Filter Blacklist👈');
// Задача 8: Филтър "Черен списък" (Blacklist) 🚫
// Условие:
// Имаш масив от потребители: const users = ["User1", "Admin", "User2", "Moderator", "User3"];.
// Напиши цикъл, който прехвърля потребителите в нов масив approvedUsers, ОСВЕН ако потребителят не е "Admin" или "Moderator" (тях ги прескочи с continue).

const users = ["User1", "Admin", "User2", "Moderator", "User3"];

const approvedUsers = [];

for(let i = 0; i < users.length; i++) {
    let user = users[i];

    if(user === "Admin" || user === "Moderator") continue;

    approvedUsers.push(user);
}

console.log(approvedUsers);


console.log("--------------------------------------");
console.log('👉Excercise 09: Capital Accumulation (Interest)👈');
// Задача 9: Натрупване на капитал (Лихва) 📈
// Условие:
// Имаш първоначална сума let money = 1000;.
// Напиши for цикъл, който симулира 5 години. Всяка година (всяка итерация на цикъла) парите се увеличават с 5% лихва (т.е. money = money * 1.05). Накрая изпиши колко пари ще имаш след 5 години.

let money = 1000;
const years = 5;

let endSum = money;

for(let year = 1; year <= years; year++) {
    endSum += endSum * (5 / 100);
}

console.log(`First year the money are ${money.toFixed(2)} eur and for ${years} years the interest is ${(endSum - money).toFixed(2)} eur and the total Sum with interest is: ${endSum.toFixed(2)} eur.`);


console.log("--------------------------------------");
console.log('👉Excercise 10: Titles Corrector👈');
// Задача 10: Коректор на заглавия (Data Clean) 🪥
// Условие:
// Имаш масив със заглавия, които са написани с малки букви: const titles = ["home", "about us", "contact"];.
// Напиши цикъл, който променя всяка дума така, че да започва с главна буква.

const titles = ["home", "about us", "contact"];

for(let i = 0; i < titles.length; i++) {
    let currentTitle = titles[i];
    let firstLetter = currentTitle[0].toUpperCase();
    let newTitle = firstLetter + currentTitle.slice(1);

    titles[i] = newTitle;
}

console.log(titles);
