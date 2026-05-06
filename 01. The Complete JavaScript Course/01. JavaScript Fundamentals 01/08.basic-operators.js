//Basic Operators
//Math Operators, Logical Operators, Assigment Operators, Arithmetic Operators and etc....

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);
//2 ** 3 means 2 to the power 3 = 2 * 2 * 2

//Concatenation
const firstName = 'Jonas';
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

//typeof operator
console.log(typeof 34);

//Assignment Operator
let  x = 10 + 5; //15
console.log(x);
x += 10; // x = x + 10 => x = 15 + 10 = 25
console.log(x);
x *= 4; //x = x * 4 => x = 25 * 4 = 100
console.log(x);
x++; //x = x + 1;
console.log(x);
x--; //decrease the value with 1
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log('-----------');
console.log(ageSarah >= 18);

console.log('-----------');
const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log('-----------');
console.log(now - 1991 > now - 2018);