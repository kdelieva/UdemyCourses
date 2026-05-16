"use strict";

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

//Backwards loops
//0, 1, ..., 4
//4, 3, ..., 0
for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


//Nested Loops => Loops in Loops
for(let excercise = 1; excercise < 4; excercise++) {
    console.log(`------- Starting Excercise ${excercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}