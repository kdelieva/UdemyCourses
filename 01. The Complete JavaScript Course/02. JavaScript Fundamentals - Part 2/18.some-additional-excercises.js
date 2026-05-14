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

// Свойство tasksThis context and Calculations: Масив от стрингове (напр. ["Learn Objects", "Drink Coffee"]).

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


console.log("---------------------------------------")
console.log("👉Excercise 06: This context and Calculations👈");
// Задача 6: Контекстът на this и калкулации ⌚
// Тази задача ще тества как използваш this за изчисления между две различни свойства.

// Условие:
// Създай обект smartWatch:
// Свойства: steps (напр. 3000) и goal (напр. 10000).

// Метод checkGoal:
// Методът трябва да изчисли колко стъпки остават до целта.
// Ако стъпките са по-малко от целта, върни: "Only [X] steps left!".
// Ако стъпките са равни или повече от целта, върни: "Goal reached!".

// Цел: Да упражниш изваждане на две стойности, достъпени чрез this.

const smartWatch = {
  steps: 3000,
  goal: 10000,

  checkGoal: function () {
    if(this.steps < this.goal) {
      const result = this.goal - this.steps;
      return `Only ${result} steps left.`;
    }else {
      return "Goal reached!";
    }
  }
}

const stepsResult = smartWatch.checkGoal();
console.log(stepsResult);


console.log("---------------------------------------")
console.log("👉Excercise 07: Ownership Change👈");
// Задача 7: Смяна на собственост 🏠
// Да видим как ще се справиш с обновяването на данни.

// Условие (напомняне):
// Създай обект house:

// Свойства: address (напр. "ул. Витоша 1") и owner (напр. "Иван").

// Метод transferOwnership, който приема newOwnerName.

// Променя owner на обекта.

// Връща: "The house at [address] is now owned by [newOwnerName]".

const house = {
  address: "Vitosha street 1",
  owner: "Ivan",

  transferOwnership: function (newOwnerName) {
    this.owner = newOwnerName;
    return `The house at ${this.address} is now owned by ${this.owner}`;
  }
};

const newOwner = house.transferOwnership("Georgi Georgiev");

console.log(newOwner);


console.log("---------------------------------------")
console.log("👉Excercise 08: Bracket Notation Manipulation👈");
// Задача 8: Манипулация през Bracket Notation 🔄
// Тази задача е важна, защото често ще ти се налага да "превключваш" състояния (например: пусната/спряна музика, прочетено/непрочетено съобщение).

// Условие:
// Напиши функция toggleStatus(task, propertyName), която приема обект и име на свойство.

// Функцията трябва да намери свойството в обекта (използвай []).

// Трябва да обърне булевата му стойност (true става false и обратно).

// Върни целия обект.
//Примерен тест:
// const myTask = { title: "Учене на JS", isDone: false };
// console.log(toggleStatus(myTask, "isDone")); // Трябва да върне { title: "Учене на JS", isDone: true }

function toggleStatus(task, propertyName) {
  const property = task[propertyName];
  task[propertyName] = !property;
  return task;
}

const myTask = {
  title: "Учене на JS",
  isDone: false
};

const result = toggleStatus(myTask, "isDone");
console.log(result);


console.log("---------------------------------------")
console.log("👉Excercise 09: StopWatch (Object Methods👈");

// Задача 9: Хронометър (Обектни методи) ⏱️
// Тук ще упражним логически проверки (if) и промяна на едно и също свойство от няколко различни метода.

// Условие (напомняне):
// Създай обект timer:

// Свойство seconds, което първоначално е 0.

// Метод start: добавя 10 към секундите.

// Метод reset: прави секундите отново 0.

// Метод stop: вади 5 от секундите, но ако резултатът ще е по-малък от 0, нека ги направи точно 0 (не искаме негативно време).

const timer = {
  seconds: 0,

  start: function () {
    this.seconds += 10;
    return this.seconds;
  },

  reset: function () {
    this.seconds = 0;
    return this.seconds;
  },

  stop: function () {
    const secondsNow = this.seconds;
    if(secondsNow >= 5) {
      this.seconds -= 5;
    }else {
      this.seconds = 0;
    }

    return this.seconds;
  }
};

console.log(timer.start());
console.log(timer.start());
console.log(timer.stop());
console.log(timer.reset());
console.log(timer.start());
console.log(timer);


console.log("---------------------------------------")
console.log("👉Excercise 10: Final Chord👈");
// Това е последното предизвикателство от тази серия. Тук ще комбинираме математика, създаване на нови свойства и стрингова интерполация.

// Условие:
// Създай обект user:

// Свойства: name, weight (кг) и height (метри, напр. 1.80).

// Метод calculateBMI:

// Изчисли индекса по формулата: weight / (height * height).

// Важно: Резултатът от изчислението трябва да се запази като ново свойство в обекта под името bmiValue.

// Методът трябва да връща стринга: "[name] has a BMI of [bmiValue]!".

// Защо правим това?
// В практиката често обектите "растат" по време на изпълнение на програмата – започват с малко данни, а след изчисления добавяме нови резултати към тях.

const user = {
  name: "Ivan Ivanov",
  weight: 80,
  height: 1.79,

  calculateBMI: function () {
    const bmi = this.weight / (this.height * this.height);
    this.bmiValue = bmi.toFixed(2);
    
    return `${this.name} has a BMI of ${this.bmiValue}!`;
  }
};

console.log(user.calculateBMI());
console.log(user);

