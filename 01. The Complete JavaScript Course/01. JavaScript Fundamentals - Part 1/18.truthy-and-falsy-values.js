//Falsy values are values that are nott exactly false, but will come false when we try to convert them into a boolean.
//And in JavaScript there are only 5 falsy values: 0, ''. undefined, Null, NaN. They are not false initially, but they will come a falsy when try to convert them to Boolean. For example when use it in with logical operators or using if-else conditions.
// Everything else is called truthy values

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false
console.log('--------------------');

//Example
// const money = 0;
const money = 100;
if(money) {
    console.log("Don't spend it at all ;)");
}else {
    console.log("You should get a job."); 
}

//Another example
// let height;
let height = 123;

if(height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED!');    
}



