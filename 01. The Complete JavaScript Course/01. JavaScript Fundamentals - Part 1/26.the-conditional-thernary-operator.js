//Thernary Operator (Conditional) - the name is 'Thernary" because has got three parts - the condition, the if part and else part.

const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷.") : console.log("I like to drink water 💧."); 

const drink = age >= 18 ? 'wine 🍷' : "water 💧";
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = "water 💧";
}
console.log('--------------');
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : "water 💧"}`);