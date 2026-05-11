"use strict";

//Array Operations (Methods)
//Basic methods: push(), pop(), unshift(), shift(), indexOf(), inlcudes()

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//Add Elements

//Push Method - add element to the end of the array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//unshift() method add element at the beggining of the array
friends.unshift("John");
console.log(friends);

//Remove Elements

///.pop() - remove the last element from array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//shift() - remove the first element from the array

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

//.indexOf() -tell us Element Position
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//.includes() - return true if the element is in the array and false if isn't
friends.push(23); // test with strict equallity (===);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes("Steven")) {
    console.log("You have a friend called Steven.");
}