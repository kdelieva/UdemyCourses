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
