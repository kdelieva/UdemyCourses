// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

console.log("First Data");

let markWeight = 78;
const markHeight = 1.69;

let johnWeight = 92;
const johnHeight = 1.95;

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

const markBodyMassIndex = markWeight / markHeight ** 2;
const johnBodyMassIndex = johnWeight / johnHeight ** 2;

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

const markHigherBMI = markBodyMassIndex > johnBodyMassIndex;
console.log(`Is Mark Higher BMI than John? The result is: ${markHigherBMI}`);
console.log(`Mark BMI is: ${markBodyMassIndex} and the John BMI is: ${johnBodyMassIndex}`);

console.log("---------------------------------");
console.log("Data Second");
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let markWeightSecond = 95;
const markHeightSecond = 1.88;

let johnWeightSecond = 85;
const johnHeightSecond = 1.76;

const markBodyMassIndexSecond = markWeightSecond / markHeightSecond ** 2;
const johnBodyMassIndexSecond = johnWeightSecond / johnHeightSecond ** 2;

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
const markHigherBMISecond = markBodyMassIndexSecond > johnBodyMassIndexSecond;
console.log(`Is Mark Higher BMI than John? The result is: ${markHigherBMISecond}`);
console.log(`Mark BMI is: ${markBodyMassIndexSecond} and the John BMI is: ${johnBodyMassIndexSecond}`);