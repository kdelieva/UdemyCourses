// Задача 1: Проверка на скорост
// Пътен полицай има нужда от софтуер.

// Създай променлива speed.

// Ако скоростта е над 50, отпечатай: "Твърде бързо! Спри!".

// В противен случай отпечатай: "Скоростта е в нормите. Приятен път!".

console.log("Excercise 01: Speed Checker:");
// let speed = 50;
let speed = 60;

if(speed > 50) {
    console.log(`The speed is ${speed} km/h. That is pretty much! Stop!`);
}else {
    console.log(`The speed is ${speed} km/h. That is OK. Have a nice way.`);
}

console.log("-----------------");

// Задача 2: Подобреният BMI Калкулатор (Подобно на Challenge 2)
// Използвай кода си от предишните задачи за пресмятане на BMI на Марк и Джон.

// Вместо само да отпечатваш true/false, използвай if / else, за да отпечаташ точно кой има по-висок индекс.

// Форматът трябва да бъде: "BMI на Марк (28.3) е по-висок от този на Джон (23.9)!" или обратното.

console.log("Excercise 02: BMI Calculator PRO");

console.log("First Data");

let markWeight = 78;
const markHeight = 1.69;

let johnWeight = 92;
const johnHeight = 1.95;

const markBodyMassIndex = markWeight / markHeight ** 2;
const johnBodyMassIndex = johnWeight / johnHeight ** 2;

if(markBodyMassIndex > johnBodyMassIndex) {
    console.log(`Mark's BMI is higher than John's BMI. The result is: ${markBodyMassIndex} and John's BMI is: ${johnBodyMassIndex}.`);
}else {
    console.log(`John's BMI is higher than Mark's BMI. Mark BMI is: ${markBodyMassIndex} and the John BMI is: ${johnBodyMassIndex}`);
}

console.log("---------------------------------");
console.log("Data Second");
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let markWeightSecond = 95;
const markHeightSecond = 1.88;

let johnWeightSecond = 85;
const johnHeightSecond = 1.76;

const markBodyMassIndexSecond = markWeightSecond / markHeightSecond ** 2;
const johnBodyMassIndexSecond = johnWeightSecond / johnHeightSecond ** 2;

if(markBodyMassIndexSecond > johnBodyMassIndexSecond) {
    console.log(`Mark's BMI is higher than John's BMI. The result is of Mark's BMI is: ${markBodyMassIndexSecond} and John's BMI is: ${johnBodyMassIndexSecond}`);
}else {
    console.log(`John's BMI is higher than Mark's BMI. Mark's BMI is: ${markBodyMassIndexSecond} and the John's BMI is: ${johnBodyMassIndexSecond}`);
}

console.log("----------------------------------");
console.log("Excercise 03: Even/Odd Checker");

// Задача 3: Проверка за четно и нечетно
// Създай променлива number.

// Използвай оператора за остатък при деление %, за да провериш дали числото е четно.

// Ако е четно, отпечатай: "Числото е четно". Ако не е — "Числото е нечетно".

let num = 7;

if(num % 2 === 0) {
    console.log(`The number ${num} is Even.`);
}else {
    console.log(`The number ${num} is Odd.`);
}

console.log("-----------------------------------");
console.log("Excercise 04: Fruits Shop");

// Задача 4: Магазин за плодове
// Имаш променлива money и applePrice.

// Изчисли колко ябълки можеш да купиш.

// Ако можеш да купиш поне 5 ябълки, отпечатай: "Имаш достатъчно за цяла торба!".

// Ако не, изчисли колко още пари не ти достигат, за да купиш тези 5 ябълки, и отпечатай: "Трябват ти още [сума] лв.".

let money = 5;
// let money = 25;
let appplePrice = 1.49;
let numberApples = 5;

let totalApplePrice = numberApples * appplePrice;
let leftedMoney = money - totalApplePrice;

if(leftedMoney >= 0) {
    console.log(`Your money ${money} eur are enough to buy a bag with apples. The buyed apples are ${numberApples}, the rice of each apple is ${appplePrice} and the lefted money are ${leftedMoney} eur.`);
}else {
    console.log(`You need more money. The sum you need is ${Math.abs(leftedMoney)} eur.`);
}

console.log("----------------------------------");
console.log("Excercise 05: Day or Night");

// Задача 5: Ден или нощ
// Създай променлива hour (стойност от 0 до 23).

// Ако часът е между 6 и 18 (включително), отпечатай: "Сега е светло".

// В противен случай отпечатай: "Сега е тъмно".

// let hour = 15;
 let hour = 0;
if(hour >= 6 && hour <= 18) {
    console.log('Now is light. ☀️')
}else {
    console.log("Now is dark. 🌙");
}

console.log("----------------------------------");
console.log("Excercise 06: Pool Thermometer");

// Задача 6: Термометър за басейн
// Създай променлива temp.

// Ако температурата е над 25 градуса, отпечатай: "Водата е идеална за плуване!".

// Ако е между 15 и 25 градуса (включително), отпечатай: "Водата е хладна, но става.".

// Ако е под 15 градуса, отпечатай: "Твърде студено е!".

// let temp = 16;
// let temp = 26;
let temp = 13;

if(temp > 25) {
    console.log('The water is ideal for swimming. 🏊');
}else if(temp >= 15 && temp <= 25) {
    console.log("The water is cool, but it's ok. 🥶");
}else {
    console.log("Too cold water. ❄️");
}

console.log("----------------------------------");
console.log("Excercise 07: Cinema system for Discount");

let age = 5;
let isStudent = true;
let ticketPrice;

if(age < 12) {
    ticketPrice = 5;
} else if(isStudent) {
    ticketPrice = 8;
}else {
    ticketPrice = 12;
}

console.log(`The ticket Price is: ${ticketPrice}`);