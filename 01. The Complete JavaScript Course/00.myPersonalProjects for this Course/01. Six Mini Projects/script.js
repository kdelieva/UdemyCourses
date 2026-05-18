"use strict";
const bill = document.querySelector("input");
const percentTip = document.querySelector(".tip-bold");
const selectedButton = document.querySelector('.selected');

bill.addEventListener("input", () => {
    const tip = Number(bill.value);
    percentTip.innerHTML = `${tip.toFixed(2)} eur`;
});

selectedButton.addEventListener("click", () => {
    const tip = Number(bill.value * (tipValue / 100));
    percentTip.innerHTML = `${tip.toFixed(2)} eur`;
});
