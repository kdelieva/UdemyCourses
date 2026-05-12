"use strict";

//Objects Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function(birthYear) { //we MUST USED function EXPRESSION!! Not Declaration...
  //     return 2037 - birthYear;
  // }

  // calcAge: function() {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas["calcAge"](2000));
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//Small CHALLENGE

console.log(jonas.getSummary());
