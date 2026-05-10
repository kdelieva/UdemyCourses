//Function Declaration - when use function keyword
//Other example

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function Expressions - anonymous function, because there isnt name after function keyword. Can not invoke the function before initialization, before define it.

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);