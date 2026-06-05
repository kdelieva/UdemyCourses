"use strict";

const bill = document.querySelector(".bill");
let totalPrice = document.querySelector(".bill-total");
let people = document.querySelector("#people-number");
let pricePerPerson = document.querySelector(".per-person");

let percent = document.querySelectorAll("button");
let tipSum = document.querySelector(".tip-sum");

let perPerson = 0;
let tip = 0;

for (let i = 0; i < percent.length; i++) {
    
    percent[i].onclick = function(event) {
      let clickedValue = event.target.value;
      let calculatedTip = (Number(bill.value) * (Number(clickedValue)) / 100);
      
      tipSum.textContent = `${calculatedTip.toFixed(2)} eur`;

      let totalSum = 0;
      totalSum = (Number(bill.value) + calculatedTip);
      totalPrice.textContent = `${totalSum.toFixed(2)} eur`;

      let peopleNum = Number(people.value);
      

      if(!peopleNum) {
          pricePerPerson.textContent = `${totalSum.toFixed(2)} eur`;
      }else {
        pricePerPerson.textContent = `${(totalSum / peopleNum).toFixed(2)} eur`;
      }
      
      let isContains = percent[i].classList.contains('selected');

        for(let j = 0; j < percent.length; j++) {
          percent[j].classList.remove('selected');
        }
          
          if(!isContains) {
            let clickedBtn = event.target;
            clickedBtn.classList.add('selected');
          }else {
          for(let j = 0; j < percent.length; j++) {
            percent[j].classList.remove('selected');
          }
        }  
    };
    
}