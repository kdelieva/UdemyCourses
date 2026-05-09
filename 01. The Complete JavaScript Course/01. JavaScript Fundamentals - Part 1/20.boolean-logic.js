//Boolean Logic - AND, OR & NOT Opperators

//👉 AND operator 👈
//A - true AND (&&) B - true => true
//A - true AND (&&) B - false => false
//A - false AND (&&) B - true => false
//A - false AND (&&) B - false => false

//👉 OR operator 👈
//A - true OR (||) B - true => true
//A - true OR (||) B - false => true
//A - false OR (||) B - true => true
//A - false OR (||) B - false => false

//👉 NOT operator 👈
//A - true NOT (!A) B - true => false
//A - true NOT (!A) B - false => false
//A - false NOT (!A) B - true => true
//A - false NOT (!A) B - false => false
//A - true NOT (!B) B - true => false
//A - true NOT (!B) B - false => true
//A - false NOT (!B) B - true => false
//A - false NOT (!B) B - false => false

//Examples
let age = 16;

let result = !(age >= 20) && (age <=30);
if(result) {  //TRUE
    console.log(`!(False) => True AND True = ${result}`);
}

result = (age >= 20) && !(age <=30);
if(result) {  //False
    console.log(result);
}else {
    console.log(`False AND !(TRUE) => False = ${result}`)
}

result = (age >= 20) && (age <=30);
if(result) {  //False
    console.log(result);
}else {
    console.log(`False AND TRUE = ${result}`)
}

result = !(age >= 20) && !(age <=30);
if(result) {  //False
    console.log(result);
}else {
    console.log(`!(False) => TRUE AND !(True) => FALSE = ${result}`)
}