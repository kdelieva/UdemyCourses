//Type convertion is when manually convert from one type in another

//Example:
const inputYear = "1991";
console.log(inputYear + 18, inputYear); //concatenation 199118

console.log(Number(inputYear) + 18); //manually convertion

console.log(Number("Jonas")); //NaN - means invalid number
console.log(typeof NaN);

console.log(typeof String(23), String(23));

//JavaScript can convert only in three types - to string, number and boolean
console.log("---------------");

//Type coercion is when JavaScript automatically convert types behind the scenes for us.

console.log("I am " + 23 + " years old."); //here the plus triggers coercion to string. When there is operation between string and number, the number will be converted to string.

console.log("I am " + String(23) + " years old."); //if use another programming language where there isnt autmatically coercion.

console.log("23" - "10" - 3); //converted to numbers because "-" operator trigger oposite operation.

console.log("23" * "2"); //46 - this is the only way * operator work. Te same is valid about "/".

console.log("23" / "2");

//small game :)
let n = "1" + 1; //'11' - converted to string
n = n - 1; // 10 - converted to number
console.log(n); //10

console.log(2 + 3 + 4 + "5"); // the answer is "95"
console.log('10' - '4' - '3' - 2 + '5'); // '15'