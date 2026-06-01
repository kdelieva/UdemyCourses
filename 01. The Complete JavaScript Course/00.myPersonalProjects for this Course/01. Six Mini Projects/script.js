"use strict";

const bill = document.querySelector(".bill");
let totalPrice = document.querySelector(".bill-total");
let people = document.querySelector("#people-number");
let pricePerPerson = document.querySelector(".per-person");

let percent = document.querySelectorAll("button");
let tipSum = document.querySelector(".tip-sum");

let perPerson = 0;
let tip = 0;

if (
  percent[0].addEventListener("click", function () {
    tip = Number(bill.value) * (Number(percent[0].value) / 100);
    tipSum.textContent = `${tip.toFixed(2)} eur`;

    perPerson = (Number(bill.value) + tip) / Number(people.value);
    totalPrice.textContent = `${(Number(bill.value) + tip).toFixed(2)} eur`;

    pricePerPerson.textContent = `${perPerson.toFixed(2)} eur`;

    percent[0].classList.add("selected");
    percent[1].classList.remove("selected");
    percent[2].classList.remove("selected");
    percent[3].classList.remove("selected");
  })
);

if (
  percent[1].addEventListener("click", function () {
    tip = 10;
    tipSum.textContent = tip;
    percent[1].classList.add("selected");
    percent[0].classList.remove("selected");
    percent[2].classList.remove("selected");
    percent[3].classList.remove("selected");
  })
);

if (
  percent[2].addEventListener("click", function () {
    tip = 15;
    tipSum.textContent = tip;
    percent[2].classList.add("selected");
    percent[0].classList.remove("selected");
    percent[1].classList.remove("selected");
    percent[3].classList.remove("selected");
  })
);

if (
  percent[3].addEventListener("click", function () {
    tip = 20;
    tipSum.textContent = tip;
    percent[3].classList.add("selected");
    percent[0].classList.remove("selected");
    percent[1].classList.remove("selected");
    percent[2].classList.remove("selected");
  })
);

bill.addEventListener("input", function () {
  perPerson = Number(bill.value) / 1;
  totalPrice.textContent = `${(Number(bill.value) + tip).toFixed(2)} eur`;

  pricePerPerson.textContent = `${perPerson.toFixed(2)} eur`;
});

people.addEventListener("input", function () {
  perPerson = Number(bill.value) / Number(people.value);

  pricePerPerson.textContent = `${perPerson.toFixed(2)} eur`;
});

// //Tip Calculator LOGIC
// const billValue = document.querySelector(".bill");
// let totalBill = document.querySelector(".bill-total");
// const billPerPerson = document.querySelector(".per-person");
// const tipValue = document.querySelector(".selected");
// const tipInside = document.querySelector(".tip-inside");
// const tipSum = document.querySelector(".tip-sum");
// const chooseBtn = document.querySelector(".tip-value");

// //Add bill to Tip
// billValue.addEventListener("input", function () {
//   let billSum = Number(billValue.value);
//   totalBill.textContent = `${billSum.toFixed(2)} eur`;
//   billPerPerson.textContent = `${billSum.toFixed(2) / 1} eur`;
// });

// // Select Button

// //Select Logic
// tipValue.addEventListener("click", function () {
//   const containsSelectedClass = (tipInside.textContent = `${tipValue.value}%`);
//   let billSum = Number(billValue.value);
//   const tip = Number(tipValue.value);
//   const totalTip = billSum * (tip / 100);
//   tipSum.textContent = `${totalTip.toFixed(2)} eur`;
//   totalBill.textContent = `${(billSum + totalTip).toFixed(2)} eur`;
//   billPerPerson.textContent = `${(billSum + totalTip).toFixed(2) / 1} eur`;

//   if (containsSelectedClass) {
//     tipValue.classList.remove("selected");
//   } else {
//     tipValue.classList.add("selected");
//   }
// });
