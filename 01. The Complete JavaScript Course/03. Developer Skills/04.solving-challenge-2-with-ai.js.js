'use strict';

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

//My MANUAL Solution
function workData(arr) {
  let data;
  let totalWorkedHours = 0;
  let maxWorkedHours = arr[0];
  let workedDays = 0;
  let weekWorkHours = '';
  let dayNumber = 0;
  let day = '';

  for (let i = 0; i < arr.length; i++) {
    let currentHours = Number(arr[i]);
    totalWorkedHours += currentHours;

    if (currentHours > maxWorkedHours) {
      maxWorkedHours = currentHours;
      dayNumber = i;
    }

    if (currentHours > 0) {
      workedDays++;
    }
  }
  let averageDailyHours = totalWorkedHours / arr.length;

  if (totalWorkedHours >= 35) {
    weekWorkHours = 'Full-Time Work';
  } else {
    weekWorkHours = 'Not Full-Time Work';
  }

  if (dayNumber === 0) {
    day = 'Monday';
  } else if (dayNumber === 1) {
    day = 'Tuesday';
  } else if (dayNumber === 2) {
    day = 'Wednesday';
  } else if (dayNumber === 3) {
    day = 'Thursday';
  } else if (dayNumber === 4) {
    day = 'Friday';
  } else if (dayNumber === 5) {
    day = 'Saturday';
  } else if (dayNumber === 6) {
    day = 'Sunday';
  }

  data = `Total hours worked: ${totalWorkedHours}
Average daily hours: ${averageDailyHours.toFixed(1)}
The day with the most hours worked is number: ${dayNumber + 1} - ${day} with max Worked Hours: ${maxWorkedHours}
Number of days worked: ${workedDays}   
The week was ${weekWorkHours}!`;

  return data;
}

const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const gptData = [8, 7.5, 9, 0, 6, 5, 0];

console.log(workData(testData));
console.log(analyzeWorkWeek(testData));
//Jonas and my AI Solution

function analyzeWorkWeek(hours) {
  const totalHours = hours.reduce((sum, day) => sum + day, 0);

  const averageDailyHours = Number((totalHours / hours.length).toFixed(1));

  const maxHours = Math.max(...hours);
  const mostWorkedDay = hours.indexOf(maxHours);

  const daysWorked = hours.filter(day => day > 0).length;

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    mostWorkedDay,
    daysWorked,
    isFullTime,
  };
}

// Example usage
console.log('-----------------------------');
console.log(workData(gptData));
console.log(analyzeWorkWeek(gptData));
