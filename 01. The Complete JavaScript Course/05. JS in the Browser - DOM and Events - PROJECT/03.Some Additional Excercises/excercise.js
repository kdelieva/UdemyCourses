"use strict";

// EXCERCISE 01
// Твоята задача (JavaScript):
// Селектирай бутона с клас change-btn и му закачи addEventListener за събитие 'click'.
// Когато бутонът бъде кликнат, селектирай заглавието с клас main-title и промени неговия текстов съдържател (textContent) на "Ученето на DOM е забавно!".

let changeBtn = document.querySelector(".change-btn");

changeBtn.addEventListener("click", function () {
  const title = document.querySelector(".main-title");
  title.textContent = "Ученето на DOM е забавно!";
});

// EXCERCISE 02
// Твоята задача (JavaScript):

// Създай променлива let count = 0; извън слушателя за събития (за да пази текущото състояние).
// Селектирай бутона click-btn и му добави addEventListener за клик.

// При всеки клик:
// Увеличи променливата count с 1.
// Селектирай елемента с клас clicks-count и промени неговия textContent да показва текущата стойност на count.

let count = 0;
const click = document.querySelector(".click-btn");

click.addEventListener("click", function () {
  count++;
  let countNumber = document.querySelector(".clicks-count");
  countNumber.textContent = count;
});

// EXCERCISE 03
// Твоята задача (JavaScript):
// Селектирай бутона submit-btn и му закачи слушател за събитие 'click'.
// Вътре във функцията:
// Селектирай инпут полето с клас user-input и вземи това, което потребителят е написал, като използваш .value (напр. let text = inputElement.value;).
// Селектирай спан елемента с клас result-text и промени неговия textContent да бъде равен на взетия текст от инпута.

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function () {
  let userInput = document.querySelector(".user-input").value;
  let resultText = document.querySelector(".result-text");
  resultText.textContent = userInput;
});

// EXCERCISE 04
// Твоята задача (JavaScript):

// Селектирай бутона с клас style-btn и му добави клик събитие.
// Когато се кликне, селектирай елемента с клас box и промени:
// Неговия фонов цвят (background-color) на "green".
// Неговата ширина (width) на "200px".
// Неговата височина (height) на "200px".
// Жокер: Напомням, че в JavaScript CSS свойствата, които имат тире (като background-color), се пишат в камилски стил (camelCase) -> style.backgroundColor.

const styleBtn = document.querySelector(".style-btn");

styleBtn.addEventListener("click", function () {
  let box = document.querySelector(".box");
  box.style.backgroundColor = "green";
  box.style.width = "200px";
  box.style.height = "200px";
});

// EXCERCISE 05
// Селектирай бутона с клас reset-btn и му добави клик събитие.
// Вътре във функцията трябва да върнеш нещата в начално състояние:
// Промени текста на заглавието status-text обратно на "Опитай да познаеш...".
// Промени стойността (value) на инпута score-input да бъде празен стринг "" (така се изчиства инпут поле).

let resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", function () {
  let statusText = document.querySelector(".status-text");
  statusText.textContent = "Опитай да познаеш...";

  let score = document.querySelector(".score-input");
  score.value = "";
});

// EXCERCISE 06
// Задача 6: Валидация "Празен инпут" (Проверка за празно поле) ⚠️
// Селектирай бутона check-btn и му добави клик събитие.

// Вътре в него вземи стойността (value) на инпута name-input.

// Направи if / else проверка:

// Ако инпутът е празен (т.е. стойността е равна на ""), промени текста на параграфа message на "Моля, въведете име!" и му сложи червен цвят на текста.

// Ако има въведено нещо, промени текста на message на "Успешно изпратено!" и му сложи зелен цвят на текста.

const checkBtn = document.querySelector(".check-btn");

checkBtn.addEventListener("click", function () {
  let name = document.querySelector(".name-input").value;

  let message = document.querySelector(".message");

  if (name === "") {
    message.textContent = "Моля, въведете име!";
    message.style.color = "red";
  } else {
    message.textContent = "Успешно изпратено!";
    message.style.color = "green";
  }
});

// EXCERCISE 07
// Задача 7: Генериране на Рандом Число (Геймификация) 🎲
// В "Guess My Number!" тайното число се генерира с формулата: Math.trunc(Math.random() * 20) + 1. Нека направим бутон, който генерира случайно число при всяко кликване.

// Селектирай бутона roll-btn и му добави слушател за клик.

// Вътре във функцията създай променлива за рандом число между 1 и 100 включително.

// Жокер: Формулата за число до 100 е подобна на тази от курса – използваш Math.random(), умножаваш по 100, махаш десетичната запетая с Math.trunc() (или Math.floor()) и добавяш 1.

// Селектирай елемента lucky-number и промени неговия textContent да бъде новото генерирано число.

const rollBtn = document.querySelector(".roll-btn");

rollBtn.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 100) + 1;

  let luckyNumber = document.querySelector(".lucky-number");

  luckyNumber.textContent = randomNumber;
});

// EXCERCISE 08
// Задача 8: Игра на Топло и Студено (Сравнение на числа) 🌡️

// Нека тайното число е фиксирано извън цикъла: const secretCode = 7;

// Селектирай бутона guess-btn и му добави клик събитие.

// Вътре във функцията вземи стойността от инпута guess-input. ВНИМАНИЕ: Помни, че всичко, което идва от инпут, е стринг. Превърни го в число, като използваш Number(inputElement.value) (точно както прави Джонас).

// Направи if / else if / else проверка:

// Ако въведеното число е равно на secretCode, промени текста на hint-message на "🎉 Позна точно!".

// Ако въведеното число е по-голямо от secretCode, промени текста на "📈 Твърде високо!".

// Ако въведеното число е по-малко от secretCode, промени текста на "📉 Твърде ниско!".

const secretCode = 7;
const guessBtn = document.querySelector(".guess-btn");

guessBtn.addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess-input").value);

  let message = document.querySelector(".hint-message");
  if (guessNumber === secretCode) {
    message.textContent = "🎉 Позна точно!";
  } else {
    message.textContent =
      guessNumber > secretCode ? "📈 Твърде високо!" : "📉 Твърде ниско!";
  }
});

// EXCERCISE 09
// Задача 9: Превключвател на Световен режим (Клас за Стил / Toggle Class) 🌓
// Селектирай бутона toggle-btn и му добави клик събитие.

// Вътре във функцията селектирай елемента theme-box.

// Направи if / else проверка:

// Ако фоновият цвят на кутията (themeBox.style.backgroundColor) е равен на "black", тогава го промени на "white".

// В противен случай (else), го направи "black".

const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function () {
  let themeBox = document.querySelector(".theme-box");

  let themeColor = themeBox.style.backgroundColor;

  if (themeColor === "black") {
    themeBox.style.backgroundColor = "white";
  } else {
    themeBox.style.backgroundColor = "black";
  }
});

// EXCERCISE 10
// 🏆 Задача 10: Логика за Рекорд (Highscore)

// Създай променлива let highscore = 0; извън (преди) слушателя за събития, за да пази рекорда глобално.

// Селектирай бутона save-btn и му добави клик събитие.

// Вътре във функцията:

// Вземи текущия резултат от елемента с клас current-score. Внимание: Вземи го чрез .textContent и го превърни в число с Number(...) (защото текстът от HTML също идва като стринг).

// Направи проверка: Ако текущият резултат е по-голям от highscore:

// Презапиши променливата highscore с новия по-висок резултат.

// Селектирай елемента highscore-text и промени неговия textContent да показва новия рекорд.

let highscore = 0;

const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", function () {
  let currentScore = Number(
    document.querySelector(".current-score").textContent,
  );
  if (currentScore > highscore) {
    highscore = currentScore;
  }

  document.querySelector(".highscore-text").textContent = highscore;
});
