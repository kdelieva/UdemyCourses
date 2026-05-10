'use strict';

//In most simple form functions are just a simple piece of code that can we reuse over and over in our code.

//Function Declaration
function logger() {
    console.log("My name is Jonas.");
}

logger(); //running, invoking, calling the function
console.log("--------------");
logger();
console.log("--------------");
logger();
console.log("--------------");

function fruitProcessor(apples, oranges) { //these words are called parameters
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // these number values are called arguments
console.log(appleJuice);
console.log(fruitProcessor(4, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
