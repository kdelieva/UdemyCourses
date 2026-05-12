"use strict";

console.log("👉Excercise 01: Operation: Urgent Replenishment👈");
// Задача 1: Операция "Спешно попълване"
// Имаш масив с поръчки: const orders = ["Pizza", "Pasta", "Salad"].

function ordersOperations() {
  const orders = ["Pizza", "Pasta", "Salad"];
  console.log(orders);

  // Добави "Burger" в началото на масива.
  orders.unshift("Burger");
  console.log(orders);

  // Добави "Fries" в края на масива.
  orders.push("Fries");
  console.log(orders);

  // Премахни първия и последния елемент едновременно (напиши кода така, че да се изпълнят един след друг).
  orders.shift();
  orders.pop();
  console.log(orders);

  // Провери на кой индекс се намира "Pasta" и го запиши в променлива.
  const pastaIndex = orders.indexOf("Pasta");
  const pastaVariable = orders[pastaIndex];
  console.log(pastaVariable);

  // Върни крайния масив.
  return orders;
}
console.log("Result: ", ordersOperations());

console.log("-----------------------------------")
console.log("👉Excercise 02: Security Filter👈");
// Задача 2: Филтър за сигурност
// Създай функция checkAccess, която приема масив от имена allowedUsers и името на нов потребител userName.

// Ако потребителят присъства в списъка, върни: "Access Granted, [Name]!".

// Ако го няма, добави го в края на масива и върни: "User [Name] added to waitlist.".

function checkAccess(allowedUsers, userName) {
    if(allowedUsers.includes(userName)) {
        return `Access Granted, ${userName}!`;
    } else {
        allowedUsers.push(userName);
        return `User ${userName} added to waitlist.`;
    }
}

const allowedUsers = ["Jonas", "Maria", "Peter"];

const checker = checkAccess(allowedUsers, 'Peter');
const checker2 = checkAccess(allowedUsers, 'test');

console.log(checker);
console.log(checker2);
console.log(allowedUsers);


console.log("-----------------------------------")
console.log("👉Excercise 03: Elements Rotation👈");
// Задача 3: Ротация на елементи
// Имаш масив const numbers = [10, 20, 30, 40].
// Напиши код, който взима последния елемент на масива и го премества на първо място. Масивът трябва да се промени трайно.

const numbers = [10, 20, 30, 40];
console.log(numbers);
const lastNumber = numbers.pop();

numbers.unshift(lastNumber);
console.log(numbers);


console.log("-----------------------------------")
console.log("👉Excercise 04: Excercises Stack👈");
// Задача 4: Стек от задачи (Undo/Redo логика)
// Имаш празен масив history.

// Добави три действия в него: "Open File", "Edit", "Save".
// Изтрий последното действие и го запази в променлива undoneAction.
// Добави в началото на масива ново действие: "Login".
// Върни масива и променливата undoneAction като общ резултат (може в стринг или като два отделни console.log).

const history = new Array();
history.push("Open File", "Edit", "Save");
const undoneAction = history.pop();
history.unshift("Login");

console.log(history, undoneAction);


console.log("-----------------------------------")
console.log("👉Excercise 05: Middle Element Manipulation👈");
// Задача 5: Манипулация на средния елемент
// Имаш масив с точно 3 елемента: const colors = ["Red", "Green", "Blue"].

// Смени стойността на средния елемент на "Yellow", но без да пишеш директно индекса 1 (използвай математическа формула за намиране на средата спрямо length).

// Провери дали "Green" все още съществува в масива.

const colors = ["Red", "Green", "Blue"];

const middleElement = Math.floor((colors.length - 1) / 2);

colors[middleElement] = "Yellow";
const greenChecker = colors.includes("Green");
console.log(colors, greenChecker);


console.log("-----------------------------------")
console.log("👉Excercise 06: School List Checker👈");
// Задача 6: Проверка на училищен списък
// Напиши функция updateStudentList, която приема масив от ученици и име на ученик.

// Ако името на ученика е по-дълго от 5 символа, го добави в началото на масива.

// Ако е 5 или по-малко символа, го добави в края.

// Върни дължината на новия масив.
const studentsList = ["Peter", "Ivan", "Maria", "Georgi"];

function updateStudentList(studentsList, studentName) {
   
    if(studentName.length > 5) {
        return studentsList.unshift(studentName)
    }else {
         return studentsList.push(studentName);
    }
}

console.log('------------------');
console.log(studentsList);
console.log('------------------');
let result = updateStudentList(studentsList, "Ivanka");
console.log(result, studentsList);
console.log('------------------');
result = updateStudentList(studentsList, "A");
console.log(result, studentsList);


console.log("-----------------------------------")
console.log("👉Excercise 07: Information Fusion👈");
// Задача 7: Сливане на информация
// Имаш два масива: const fruits = ["Apple", "Banana"] и const veggies = ["Tomato", "Cucumber"].
// Създай нов масив food, който съдържа всички елементи от двата масива, като използваш само методите, които си учила до момента (без оператора ...).


const fruits = ["Apple", "Banana"];
const veggies = ["Tomato", "Cucumber"];

const food = new Array();
    food.push(fruits[0], fruits[1], veggies[0], veggies[1]);
console.log(food);

//Second Variant
const food2 = fruits.concat(veggies);
console.log(food2);


console.log("-----------------------------------")
console.log("👉Excercise 08: Price Search👈");
// Задача 8: Търсачка за цени
// Имаш масив const prices = [5.50, 10.00, 25.40, 100.00].
// Напиши функция, която приема този масив и едно число (лимит).

// Намери индекса на първата цена, която е точно равна на лимита.

// Ако такава цена съществува, върни: "Price found at index [index]".

// Ако не – върни "Not found".

const prices = [5.50, 10.00, 25.40, 100.00];
let limit = 10.00;

const search = (pricesArray, limitPrice) => {
    const result = pricesArray.indexOf(limit);
    if(result !== -1) {
        return `Price found at index ${result}.`;
    }else {
        return "Not found";
    }
}
console.log(search(prices, limit));

limit = 4;
console.log(search(prices, limit));


console.log("-----------------------------------")
console.log("👉Excercise 09: Team Rearrangement👈");
// Задача 9: Пренареждане на отбор
// Имаш отбор: const team = ["Peter", "Maria", "Ivan", "George"].

// Махни "Peter" от началото.
// Махни "George" от края.
// Добави ги обратно, но на разменени места ("George" в началото, "Peter" в края).

const team = ["Peter", "Maria", "Ivan", "George"];
console.log(team);
const firstName = team.shift();
const lastName = team.pop();
team.unshift(lastName);
team.push(firstName);
console.log(team);


console.log("-----------------------------------")
console.log("👉Excercise 10: Debit Card Validation👈");

// Задача 10: Валидация на дебитна карта
// Напиши функция, която приема масив от 4 числа (напр. [1234, 5678, 9012, 3456]).

// Провери дали масивът има точно 4 елемента.

// Провери дали елементът на индекс 0 започва с числото 4 (използвай знанията за стрингове от предните задачи върху елемента).

// Ако и двете са верни, върни true, иначе false.
const arr = [1234, 5678, 9012, 3456];

function validation(arr) {
    const arrLength = arr.length === 4;
    const firstArrNum = String(arr[0]);
    const firstStringNum = firstArrNum[0] === '4';

    return arrLength && firstStringNum;
}

console.log(validation(arr));

console.log("-----------------------------------")
console.log("👉Excercise 11: Party👈");

// const guests = ["Anna", "Bob", "Charlie"]

// Добави "Diana" накрая.

// Махни първия гост ("Anna").

// Провери дали "Bob" е първи (index 0).

// Ако е той, промени името му на "VIP: Bob".

// Изпиши масива.

const guests = ["Anna", "Andrew", "Bob", "Charlie"];
guests.push("Diana");
guests.shift();
const isBobFirst = guests.indexOf("Bob") === 0;
if(isBobFirst) {
    guests[0] = "VIP: Bob";
}

console.log(guests);