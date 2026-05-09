//let and const is introduced in ES6

let age = 30;

//reasigned a value to a variable or mutated the variable age in this case
age = 31;

//const is used when we not change the value of variable in future
const birthYear = 1991;
// birthYear = 1990;
//const is immutable
console.log(birthYear);

// const job;
//we can't add variable without initializing it...
// console.log(job);

//Best practice is to use const by default and if the variable must change to use let

//we must know how work var for legacy reasons - var is the old way to declare variable before ES6

var job = 'programmer';
console.log(job);

job = 'teacher';
console.log(job);

//Basically not use var

// Not good idea to not use declare variable for example

lastName = "Schmedtmann";
console.log(lastName);
//it will work but still is not good idea