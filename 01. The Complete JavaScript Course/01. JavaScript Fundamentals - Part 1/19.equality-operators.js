//== or ===

// const age = 19;
const age = 18;
if(age === '18') console.log('You just became an adult :D (strict)');

// === -> strict equality operator reuturn true or false. Compare for typpe and value
console.log(18 === 18);
console.log(18 === 19);

//== -> compare only value
console.log('18' == 18);
console.log('18' === 18);

if(age === 18) console.log('You just became an adult :D (loose)');

// const  favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);

// let favourite = Number("23"); //'23' == 23
// let favourite = "23"; // '23' !== 23
// let favourite = Number("7"); //'7' === 7
// let favourite = Number("5");
let favourite = Number("9");


if(favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if(favourite === 7) {
    console.log('7 is also a cool number.');
}else if(favourite === 9) {
    console.log('9 is also a cool number.');
}else {
    console.log('Number is not 23 or 7 or 9!');
}

favourite = Number('23');

if(favourite !== 23) {
    console.log('Why not 23?');
}