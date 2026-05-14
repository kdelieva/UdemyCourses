"use strict";
console.log("👉Excercise 01: Programmer Profile👈");

// Задача 1: Профил на програмист
// Създай обект developer, който има свойства firstName, lastName и languages (масив от стрингове). Добави метод getBestLanguage, който винаги връща последния език от масива languages. Тествай го, като добавиш нов език в масива преди да извикаш метода.

const developer = {
  firstName: "Georgi",
  lastName: "Georgiev",
  languages: ["Bulgarian", "English", "German"],

  getBestLanguage: function () {
    const languagesLength = this.languages.length - 1;
    return this.languages[languagesLength];
  },
};

const lastLanguage = developer.getBestLanguage();

console.log(lastLanguage);
developer.languages.push("Spanish");
const newLanguage = developer.getBestLanguage();
console.log(newLanguage);


console.log("---------------------------------------")
console.log("👉Excercise 02: Dynamic Access👈");
// Задача 2: Динамичен достъп (Dot vs Bracket)
// Имаш обект car със свойства brand, model и year. Напиши функция getProperty, която приема два аргумента: обекта и име на свойство (като стринг). Функцията трябва да връща стойността на свойството. Използвай функцията, за да извлечеш model на колата.

const car = {
  brand: "Mazda",
  model: 323,
  year: 1999
};


const getProperty = function(objCar, propertyName) {
    return objCar[propertyName];
  }


const carBrand = getProperty(car, "brand");
const carModel = getProperty(car, "model");
const carYear = getProperty(car, "year");

console.log(`The ${carBrand} is Model: ${carModel} from year: ${carYear}.`);


console.log("---------------------------------------")
console.log("👉Excercise 03: Bank Account👈");
// Задача 3: Банкова сметка
// Създай обект account със свойства owner (име) и balance (число). Добави метод transaction, който приема сума (число). Ако числото е положително, го добави към баланса. Ако е отрицателно, го извади. Методът трябва да връща новия баланс.

const account = {
  owner: "Georgi",
  balance: 1000,

  transaction: function (sum) {
    this.balance += sum;
    return this.balance;
  }
};

const newTransaction = account.transaction(-150);

console.log(`The new Balance for ${account.owner} is: ${newTransaction} eur.`);


console.log("---------------------------------------")
console.log("👉Excercise 04: Valid Property Checker👈");
// Задача 4: Проверка за валидно свойство
// Напиши функция updateSettings, която приема обект settings и стринг key. Ако ключът key съществува в обекта, промени стойността му на "modified". Ако не съществува, го добави със стойност "new".


const objSettings = {};

function updateSettings(settings, key) {
  if(settings[key] !== undefined) {
     settings[key] = "modified";
    return settings;
  }else {
    settings[key] = 'new';
    return settings;
  }
}

const objFunction = updateSettings(objSettings, "test");
console.log(objFunction);


console.log("---------------------------------------")
console.log("👉Excercise 05: Tasks Manager👈");
// Мениджър на задачи 📋
// Представи си, че имаш обект, който следи твоите задачи за деня.

// Условие:
// Създай обект todoList:

// Свойство tasks: Масив от стрингове (напр. ["Learn Objects", "Drink Coffee"]).

// Метод addTask: Приема име на задача (стринг) и я добавя в масива tasks.

// Метод countTasks: Връща съобщение: "You have [брой] tasks to do!".

// Какво упражняваме тук?

// Достъп до масив чрез this.tasks.

// Използване на метода .push() върху масив, който е част от обект.

const toDoList = {
  tasks: ["Learn Objects", "Drink Coffee"],

  addTask: function(taskName) {
    const arr = this.tasks;
    arr.push(taskName)
    return toDoList;
  },

  countTasks: function() {
    const numberTasks = (this.tasks).length;
    return numberTasks;
  }
}

toDoList.addTask("Learn Functions");
const tasksTypes = toDoList["tasks"];
console.log(`We have got total Tasks: ${toDoList.countTasks()}, and they are:`, toDoList.tasks);