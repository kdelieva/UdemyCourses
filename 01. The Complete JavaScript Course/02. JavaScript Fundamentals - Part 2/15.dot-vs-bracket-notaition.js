"use strict";

const jonas = {
    firstName: 'Jonas', // keys(properties) / values
    lastName: "Schmedtmann", // key / value
    age: 2037 - 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

//Dot notation
console.log(jonas.lastName);

//Bracket Notation - here ca use expressions
console.log('------------');
console.log(jonas["lastName"]);

console.log('------------');
const nameKey = "Name";
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.['last' + nameKey]);

let data = "job";
// console.log(jonas.data); //undefined
console.log(jonas[data]);

data = 'someWord';
if(jonas[data]) {
    console.log(jonas[data]);
}else {
    console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}

jonas.location = "Portugal";
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//Challenge
console.log(`${jonas.firstName} has ${(jonas.friends).length} friends, and his best friend is called ${jonas.friends[0]}.`);

//The . is operator and have priority over left to right