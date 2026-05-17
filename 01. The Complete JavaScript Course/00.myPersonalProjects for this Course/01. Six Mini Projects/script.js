"use strict";




















// 
// const bill = document.querySelector("#bill");
// const result = document.querySelector(".tip-bold"); 
// const buttons = document.querySelectorAll('.tip-percent');

// 
// function getSelectedTipPercent() {
//     const selectedButton = document.querySelector('.tip-percent.selected');
//     if (selectedButton) {
//         return Number(selectedButton.value); 
//     }
//     return 0;
// }

// function tipCalc(billValue, percentValue) {
//     return billValue * (percentValue / 100);
// }

//
// function updateUI() {
//     const billValue = Number(bill.value);
//     const percentValue = getSelectedTipPercent();
//     const finalTip = tipCalc(billValue, percentValue);
    
// 
//     result.textContent = `${finalTip.toFixed(2)} eur`;
// }

//
// bill.addEventListener("input", () => {
//     updateUI(); 
// });

// buttons.forEach(button => {
//     button.addEventListener('click', function(e) {
//         e.preventDefault(); // Спира презареждането на формата
        
//         const currentSelected = document.querySelector('.selected');
//         if (currentSelected) {
//             currentSelected.classList.remove('selected');
//         }

//         this.classList.add('selected');

// 
//         updateUI(); 
//     });
// });