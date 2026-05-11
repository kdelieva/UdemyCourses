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
    return (2026 - birthYear) >= 18;
}

const firstResult = adultChecker(2009);
console.log(`In first case the answer is: ${firstResult}.`);

//Second Case - Function Expression
const ageChecker = function(birthYear) {
    return (2026 - birthYear) >= 18;
}

const resultSecond = ageChecker(1945);
console.log(`In second case the answer is ${resultSecond}.`);


console.log("----------------------------------------");
console.log("👉Excercise 03: Tip Calculator👈");

// 3. Калкулатор на бакшиш (Arrow Function + Ternary)
// Създай arrow function calcTip, която приема сумата на сметката. Ако сметката е между 50 и 300 лв., бакшишът е 15%. В противен случай е 20%. Функцията трябва да връща само сумата на бакшиша.

const calcTip = billSum => (billSum >= 50 && billSum <= 300) ? billSum * (15 / 100) : billSum * (20 / 100);

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

const calcTax = price => price * (20 / 100);
const totalBill = price => {
    let sum = calcTax(price) + price;
    return `Total price with VAT: ${sum.toFixed(2)} eur.`;
}

console.log(totalBill(price));


console.log("----------------------------------------");
console.log("👉Excercise 05: Currency Calculator👈");

// 5. Валутен калкулатор (Function Expression)
// Създай функционален израз convertCurrency, който приема amount и currencyType ("USD" или "GBP").

// Ако е "USD", курсът е 1.80.
// Ако е "GBP", курсът е 2.10.
// Върни закръглен резултат до втория знак.

let usdValue = 1.80;
let gbpValue = 2.10;

const convertCurrency = function (amount, currencyType) {
    let result;
    let text = currencyType.toLowerCase();

    if(text === "usd") {
        result = (amount * usdValue).toFixed(2);
    }else if(text === 'gbp') {
        result = (amount * gbpValue).toFixed(2);
    }else {
        result = 'Invalid Currency';
    }

    return result;
}

let money = convertCurrency(150, "UsD");
console.log(money);

money = convertCurrency(10, "gbP");
console.log(money);

money = convertCurrency(150, "BGN");
console.log(money);