//LOGICAL OPERATORS

let hasDriversLicense = true; //A
let hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //true

hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

hasGoodVision= true;
let shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive. 👍')
} else {
    console.log('Someone else should drive... 🤷‍♀️');
}

const isTired = true; // C
console.log(hasDriversLicense &&  hasGoodVision && isTired); //true

shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if(shouldDrive) {
    console.log('Sarah is able to drive. 👍')
} else {
    console.log('Someone else should drive... 🤷‍♀️');
}