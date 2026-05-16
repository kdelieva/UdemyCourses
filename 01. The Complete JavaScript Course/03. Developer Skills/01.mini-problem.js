'use strict';

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperaturesSecond = [2, 10, 20, 30, -5, "error", "nice"]

// 1) Understanding the Problem
    // - What is temperature amplitude? Answer: Difference between highest and lowest temp
    // - How to compute Max and Min temperatures?
    //- What's a sensor error? And what to do?

// 2) Breaking it into sub-problems
    // - How to ignore errors? - OK
    // - Find max value in temp array - OK
    // - Find min value in temp array - OK
    //- Subtract min from max (amplitude) and return it - OK

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

//Jonas Solution
const calcTempAmplitude1 = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
        if(temps[i] > max) max = curTemp;
        if(temps[i] < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const amplitude1 = calcTempAmplitude1(temperatures);
console.log(amplitude1);

const calcTempAmplitude2 = function (temps1, temps2) {
    let merged = temps1.concat(temps2);
    
    let max = merged[0];
    let min = merged[0];
    for(let i = 0; i < merged.length; i++) {
        const curTemp = merged[i];
        if(typeof curTemp !== 'number') continue;
        if(merged[i] > max) max = curTemp;
        if(merged[i] < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const amplitude2 = calcTempAmplitude2(temperatures, temperaturesSecond);
console.log(amplitude2);


//My Solution
const mergedSecond = [...temperatures, ...temperaturesSecond];

const calcTempAmplitude3 = function (temps) {
    let maxValue = Number.MIN_VALUE;
    let minValue = Number.MAX_VALUE;
    for(let i = 0; i < temps.length; i++) {
        let currentValue = temps[i];
        let numberType = typeof currentValue === "number";

        if(currentValue > maxValue && numberType) {
            maxValue = currentValue;
        }else if(minValue > currentValue && numberType) {
            minValue = currentValue;
        }
    }
    
    let subtract = maxValue - minValue;
    console.log(maxValue, minValue);
    return subtract;
};

const myAmplitude = calcTempAmplitude3(mergedSecond);
console.log(myAmplitude);