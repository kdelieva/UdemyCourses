"use strict";

//Excercise 01
// При клик върху бутона show-error, премахни класа hidden от параграфа error-msg.

// При клик върху бутона close-error, добави обратно класа hidden върху същия параграф.

const showError = document.querySelector(".show-error");
const closeError = document.querySelector(".close-error");
const errorMessage = document.querySelector(".error-msg");

const show = function () {
  errorMessage.classList.remove("hidden");
};

const close = function () {
  errorMessage.classList.add("hidden");
};

showError.addEventListener("click", show);
closeError.addEventListener("click", close);

//Excercise 02
// Селектирай всички бутони с клас alert-btn едновременно (внимавай кой метод за селектиране използваш тук).

// Използвай стандартен for цикъл, за да преминеш през всеки един от бутоните.

// Закачи слушател за събитие 'click' на всеки бутон.

// При клик върху който и да е от бутоните, премахни класа hidden от параграфа alert-text.
const excrciseNumber = document.querySelector(".excecise-number");
const alertBtn = document.querySelectorAll(".alert-btn");
const alertText = document.querySelector(".alert-text");

const removeHiddenClass = function () {
  alertText.classList.remove("hidden");
};

for (let i = 0; i < alertBtn.length; i++) {
  let btn = alertBtn[i];
  btn.addEventListener("click", removeHiddenClass);
}

const escAlert = function (e) {
  if (e.key === "Escape") {
    alertText.classList.add("hidden");
  }
};

document.addEventListener("keydown", escAlert);

//Excercise 03
// JS Условие:Селектирай двата елемента.Закачи клик събитие на бутона.При клик използва метод, който автоматично добавя класа hidden към параграфа, ако го няма, или го премахва, ако е там.

const toggleBtn = document.querySelector(".toggle-btn");
const textBox = document.querySelector(".text-box");

const myParagraphFunc = function () {
  textBox.classList.toggle("hidden");
};

toggleBtn.addEventListener("click", myParagraphFunc);

//Excercise 04
// JS Условие:Селектирай дива.Закачи глобален слушател за събития на целия документ (document), който следи за натискане на клавиш от клавиатурата.Ако натиснатият клавиш е "Escape" и overlay няма клас hidden, добави му класа hidden.

const overlay = document.querySelector(".overlay");

const overlayFunction = function (e) {
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
  }
};

document.addEventListener("keydown", overlayFunction);

//Excercise 05
// JS Условие:Селектирай всички бутони наведнъж.Обходи ги с цикъл и им сложи клик слушател.При клик, първо обходи всички бутони отново, за да премахнеш от тях класа active.След това добави класа active само на бутона, който е бил кликнат (използвай this или e.currentTarget).

const tabButtons = document.querySelectorAll(".tab-btn");

for (let i = 0; i < tabButtons.length; i++) {
  let tabBtn = tabButtons[i];
  tabBtn.addEventListener("click", function () {
    for (let j = 0; j < tabButtons.length; j++) {
      let insideBtn = tabButtons[j];
      insideBtn.classList.remove("active");
    }

    this.classList.add("active");
  });
}

//Excercise 06
// JS Условие:Селектирай всички заглавия.Използвай цикъл, за да им сложиш клик слушател.При клик върху заглавие, намери следващия му елемент в HTML дървото (потърси свойството nextElementSibling) и превключи (toggle) неговия клас hidden.

const accHeader = document.querySelectorAll(".acc-header");

const toggleAcc = function (e) {
  let content = e.currentTarget.nextElementSibling;

  content.classList.toggle("hidden");
};

for (let i = 0; i < accHeader.length; i++) {
  accHeader[i].addEventListener("click", toggleAcc);
}

//Excercise 07
// JS Условие:Създай променлива в JS, която пази броя кликове (започни от 0).При всеки клик увеличавай променливата с 1 и променяй текста в параграфа.Ако броячът достигне 10, добави клас disabled на бутона.

let count = 0;

const counterBtn = document.querySelector(".counter-btn");
const counterNumber = document.querySelector(".counter-text");

const counterChecker = function () {
     count++;

  if (count === 10) {
    counterBtn.classList.add("disabled");
  }
    counterNumber.textContent = count;
};
counterBtn.addEventListener("click", counterChecker);
