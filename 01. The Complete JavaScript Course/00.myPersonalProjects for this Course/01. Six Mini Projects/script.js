"use strict";

//Tip Calculator LOGIC
const billValue = document.querySelector(".bill");
let totalBill = document.querySelector(".bill-total");
const billPerPerson = document.querySelector(".per-person");
const tipValue = document.querySelector(".selected");
const tipInside = document.querySelector(".tip-inside");
const tipSum = document.querySelector(".tip-sum");
const chooseBtn = document.querySelector(".tip-value");

//Add bill to Tip
billValue.addEventListener("input", function () {
  let billSum = Number(billValue.value);
  totalBill.textContent = `${billSum.toFixed(2)} eur`;
  billPerPerson.textContent = `${billSum.toFixed(2) / 1} eur`;
});

// Select Button

//Select Logic
tipValue.addEventListener("click", function () {
  const containsSelectedClass = (tipInside.textContent = `${tipValue.value}%`);
  let billSum = Number(billValue.value);
  const tip = Number(tipValue.value);
  const totalTip = billSum * (tip / 100);
  tipSum.textContent = `${totalTip.toFixed(2)} eur`;
  totalBill.textContent = `${(billSum + totalTip).toFixed(2)} eur`;
  billPerPerson.textContent = `${(billSum + totalTip).toFixed(2) / 1} eur`;

  if (containsSelectedClass) {
    tipValue.classList.remove("selected");
  } else {
    tipValue.classList.add("selected");
  }
});
