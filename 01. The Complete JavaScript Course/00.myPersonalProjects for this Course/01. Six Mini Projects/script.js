"use strict";
const bill = document.querySelector("input");
const percentTip = document.querySelector(".tip-bold");
const selectedButton = document.querySelector(".selected");
const tipPerc = document.querySelector(".tip-inside");

bill.addEventListener("input", () => {
  const tip = Number(bill.value);
  percentTip.innerHTML = `${tip.toFixed(2)} eur`;
});

selectedButton.addEventListener("click", () => {
  const tip = Number(bill.value * (Number(selectedButton.value) / 100));
  percentTip.innerHTML = `${tip.toFixed(2)} eur`;
  tipPerc.innerHTML = `${Number(selectedButton.value)}%`;
});
