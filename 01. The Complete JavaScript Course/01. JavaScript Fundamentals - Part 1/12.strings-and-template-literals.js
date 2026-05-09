const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

//Type cohersion

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + "!";

console.log(jonas);
console.log("------------");
//Template Literals added in ES6

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`Some 
multi-line
example`);