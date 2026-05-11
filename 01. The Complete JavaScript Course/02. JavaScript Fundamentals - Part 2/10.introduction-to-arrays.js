'use strict';

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//Arrays are Data Structure
const friends = ["Michael", "Steven", "Peter"]; //Literal Syntax
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

// Arrays are 0-based
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //.length is property and is not 0-based!
console.log(friends[friends.length - 1]);

//Arrays are mutatable (changeble). Example: 
friends[2] = "Jay";
console.log(friends);

//Only primitive variables are immutable (not changeble) with const. For example string, number or boolean, but Arrays are not primitive! But we cant replace the entire array!!!
//For example:
// friends = ["Bob", "Alice"];

const firstName = 'Jonas';
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);
console.log(jonas.length);

//Small Array Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);