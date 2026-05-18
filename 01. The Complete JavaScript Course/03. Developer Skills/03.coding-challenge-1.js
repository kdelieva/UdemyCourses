'use strict';

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
  let index = 0;
  let result = '... ';
  while (index < arr.length) {
    let currentTemp = Number(arr[index]);

    result += `${currentTemp}ºC in ${index + 1} days ... `;
    index++;
  }

  return result.slice(0, -1);
}

const testDataOne = [17, 21, 23];
const testDataTwo = [12, 5, -5, 0, 4];
console.log(printForecast(testDataOne));
console.log('----------');
console.log(printForecast(testDataTwo));
