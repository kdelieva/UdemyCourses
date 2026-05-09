//Statements and Expressions -differences
//Expressions are piece of code that produced Values

//Example
3 + 4; //=> expression
1991 // => This is also expression, because produce value in JS
true && false && !false // =>also expression

//In other hand, the statements are  like bigger pice of code that is executed and its not produced values itself

//Examples:

if(23 > 10) { //this if block is statement, because no producing values
    const str = '23 is bigger';
}// here the if block end

//for example in template literals we can only use expressions, not statements
//Example:
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`); // ${2037 - 1991} and ${me} => these are expressions

