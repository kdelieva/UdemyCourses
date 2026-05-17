'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // C) FIX
    // value: Number(prompt("Degrees celsius: "))
    value: 10,
  };

  // B) FIND
  console.table(measurement);
  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

//Using a Debugger
const calcTempAmplitudeBug = function (temps1, temps2) {
  let merged = temps1.concat(temps2);

  //BUG => = 0
  let max = 0;
  let min = 0;

  for (let i = 0; i < merged.length; i++) {
    const curTemp = merged[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(merged);
  console.log(max, min);

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(amplitudeBug);
