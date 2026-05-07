// Задача 1: Калкулатор от Input
// Представи си, че получаваш годината на раждане като текст: const inputYear = '1995';.

// Превърни inputYear в число.

// Изчисли на колко години ще е човекът през 2026 г.

// Отпечатай: „Човекът е на [години] години“.

console.log("👉Input Calculator👈");

const inputYear = '1995';
const inputYearToNum = Number(inputYear);

const calcAge = 2026 - inputYearToNum;

console.log(`The human will be ${calcAge}-years old in 2026.`);

console.log('-------------');

// Задача 2: Текст към Булево

// Създай променлива val = ''; (празен низ).

// Превърни я ръчно в Boolean и я отпечатай.

// Промени стойността на val = 'Hello'; и направи същото. Каква е разликата?

console.log("👉Text to Boolean👈");

let val = '';
let toBoolean = Boolean(val);
console.log(toBoolean);
val = "Hello";
toBoolean = Boolean(val);
console.log(toBoolean);

console.log("--------------------------------");
console.log("👉Math riddles👈");

// Задача 3: Математически загадки
// Предположи (без да стартираш кода първо) какъв ще е резултатът от следните операции и после ги провери с console.log:

// '10' - '4' - '3' + 2
console.log('10' - '4' - '3' + 2); // 5

// '10' + '4' - '3' + 2
console.log('10' + '4' - '3' + 2); // 103

// 5 + 6 + '4' + 9 - 4 - 2
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

console.log("--------------------------------");
console.log("👉String Logic👈");

// Задача 4: Логика на низове
// Имаш: const n = '1' + 1;.
// Каква е стойността и типът на n?
// Извади 1 от n (n = n - 1) и виж какво става. Обясни си защо.

let n = '1' + 1;
console.log(n, typeof n); // 11, string

n = n -1;
console.log(n, typeof n); // 10, number
//В първият случай имаме string и число, чрез знака "+" ги долепяме, затова получаваме 11 и string.
//Във вторият случай имаме string и число, обаче имаме знак "-", който работи само с числа, затова вадим единицата от стринга 11 и получаваме 10, а типът е number. Type coercion.

console.log("--------------------------------");
console.log("👉Availability Checker👈");

// Задача 5: Проверка за наличност
// Създай променлива money = 0;.
// Използвай if/else, за да провериш променливата.
// Ако е Truthy, отпечатай „Имаш пари!“, ако е Falsy – „Нямаш нищо!“.
// Тествай със стойности: 0, 500, undefined, null, 'JavaScript'.

// let money = 0; // ✅ falsy
// let money = 500; // ❌ falsy - my error - truthy
// let money = undefined; // ❌ truthy - my error - falsy
// let money = null; // ✅ falsy
let money = 'JavaScript'; // ❌ falsy - my error - truthy

if(money) {
    console.log("You have a money");
} else {
    console.log("You haven't nothing");
}

console.log("--------------------------------");
console.log("👉Emtpy string👈");

// Задача 6: Празен низ
// Създай променлива userName = '';.
// Напиши if/else: ако името съществува (Truthy), отпечатай „Здравей, [userName]“, ако е празно (Falsy) – „Моля, въведете име“.

let userName = '';

if(userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Please type a name...'); // => I the console will print this result, because empty string is falsy value.
}

console.log("--------------------------------");
console.log("👉Age Checker👈");

// Задача 7: Проверка на години
// Имаш променлива age = '18';.
// Напиши if проверка, която проверява дали age === 18 (строго равенство).
// Виж дали работи. Ако не, превърни age в число преди проверката.

let age = '18';

if(age === 18) {
    console.log('The person is adult.');
} else {
    age = Number(age);
    console.log('Now the person is adult!');
}

console.log("--------------------------------");
console.log("👉Restaurant Bill👈");
// Задача 8: Сметката в ресторанта
// const bill = '100';
// const tip = 15;
// Изчисли общата сума (bill + tip). Внимавай за Coercion! Резултатът трябва да е 115, а не 10015.

const bill = '100';
const tip = 15;

let billToNum = Number(bill);

let endBill = billToNum + (billToNum * (tip / 100));

console.log(`The bill is: ${endBill.toFixed(2)} eur.`);

console.log("--------------------------------");
console.log("👉Auto If convertion👈");

// Задача 9: Автоматично превръщане в If
// Какво ще изпише конзолата и защо?
// if (23 - 10 - 13) {
//     console.log('Да');
// } else {
//     console.log('Не');
// }

if (23 - 10 - 13) {
    console.log('Да');
} else {
    console.log('Не');
}

//The result from if is 0, and i think this is falsy value, so the answer i "Не" - or will be executed else statement.

console.log("--------------------------------");
console.log("👉Final circuit👈");
// Задача 10: Финалната верига
// Създай променлива height. Не ѝ давай стойност (undefined).
// Напиши if/else проверка: ако е дефинирана, отпечатай височината, ако не – „Височината не е зададена“.
// Дай стойност 0 на height. Какво се случва с твоя if и защо това може да е проблем?

let height;

if(height) {
    console.log(height);
}else {
    console.log('The height is not given.');
    height = 0;
    if(height) {
        console.log(height);
    }else {
        console.log('The height is not given.');
    }
}

//Винаги ще се изпълнява else-а при тези условия, тъй като и двете стойности са falsy. Ако се използваше цикъл, щеше да е безкраен.