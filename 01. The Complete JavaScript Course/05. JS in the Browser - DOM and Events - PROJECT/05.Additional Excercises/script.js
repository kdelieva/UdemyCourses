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

const escAlert = function(e) {
    if(e.key === 'Escape') {
        alertText.classList.add("hidden");
    }
}

document.addEventListener('keydown', escAlert);