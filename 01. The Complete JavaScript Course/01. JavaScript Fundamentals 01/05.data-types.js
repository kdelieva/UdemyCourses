//There is 7 primitive data types:
// - Number - example: let someNumber = 23;
// - String - example: let firstName = 'Jonas';
// - Boolean - true or false - example: let children = true;

// These 3 are more important ^

// - But there also 4 more:
// - Undefined - example - let age;
// - Null - empty value as Undefined
// - BigInt - for very bigger numbers

//One line-comment

/* Multi
line
comment*/

console.log(true);
console.log('------');
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof Operator show the type of value
console.log(typeof true);
console.log('------');
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

//Dynaming Typing in action
javascriptIsFun = 'YES!';
console.log('------');
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log('------');
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


//Bug is that typeof null is object, null is not object!
console.log(typeof null);