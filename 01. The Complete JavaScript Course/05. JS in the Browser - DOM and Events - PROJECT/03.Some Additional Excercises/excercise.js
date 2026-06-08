'use strict';

// EXCERCISE 01
// Твоята задача (JavaScript):
// Селектирай бутона с клас change-btn и му закачи addEventListener за събитие 'click'.
// Когато бутонът бъде кликнат, селектирай заглавието с клас main-title и промени неговия текстов съдържател (textContent) на "Ученето на DOM е забавно!".

let changeBtn = document.querySelector('.change-btn');

changeBtn.addEventListener('click', function() {
    const title = document.querySelector('.main-title');
    title.textContent = 'Ученето на DOM е забавно!'
});

// EXCERCISE 02
// Твоята задача (JavaScript):

// Създай променлива let count = 0; извън слушателя за събития (за да пази текущото състояние).
// Селектирай бутона click-btn и му добави addEventListener за клик.

// При всеки клик:
// Увеличи променливата count с 1.
// Селектирай елемента с клас clicks-count и промени неговия textContent да показва текущата стойност на count.

let count = 0;
const click = document.querySelector('.click-btn');

click.addEventListener('click', function() {
    count++;
    let countNumber = document.querySelector('.clicks-count');
    countNumber.textContent = count;
});

// EXCERCISE 03
// Твоята задача (JavaScript):
// Селектирай бутона submit-btn и му закачи слушател за събитие 'click'.
// Вътре във функцията:
// Селектирай инпут полето с клас user-input и вземи това, което потребителят е написал, като използваш .value (напр. let text = inputElement.value;).
// Селектирай спан елемента с клас result-text и промени неговия textContent да бъде равен на взетия текст от инпута.

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', function() {
    let userInput = document.querySelector('.user-input').value;
    let resultText = document.querySelector('.result-text');
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

const styleBtn = document.querySelector('.style-btn');

styleBtn.addEventListener('click', function() {
    let box = document.querySelector('.box');
    box.style.backgroundColor = 'green';
    box.style.width = '200px';
    box.style.height = '200px';
});


// EXCERCISE 05
// Селектирай бутона с клас reset-btn и му добави клик събитие.
// Вътре във функцията трябва да върнеш нещата в начално състояние:
// Промени текста на заглавието status-text обратно на "Опитай да познаеш...".
// Промени стойността (value) на инпута score-input да бъде празен стринг "" (така се изчиства инпут поле).