//  My JavaScript Fundamentals Project
// Each part has comments to help you follow along.


// Part 1: Basics


// Grab button and input
let greetBtn = document.getElementById("greetBtn");
let nameInput = document.getElementById("nameInput");
let greetMsg = document.getElementById("greetMsg");

greetBtn.addEventListener("click", function() {
  let name = nameInput.value; // variable
  if (name) { // conditional
    greetMsg.textContent = "Hello, " + name + "! ";
  } else {
    greetMsg.textContent = "Please enter your name!";
  }
});


// Part 2: Functions

// Function 1: Find the square of a number
function findSquare(num) {
  return num * num;
}

let squareBtn = document.getElementById("squareBtn");
let squareResult = document.getElementById("squareResult");

squareBtn.addEventListener("click", function() {
  let result = findSquare(4);
  squareResult.textContent = "The square of 4 is " + result;
});

// Function 2: Simple string formatter
function makeExciting(text) {
  return text + "!!! 🎉";
}
console.log(makeExciting("JavaScript is fun")); // logs to console


// Part 3: Loops


let numbersBtn = document.getElementById("numbersBtn");
let numberList = document.getElementById("numberList");

numbersBtn.addEventListener("click", function() {
  numberList.innerHTML = ""; // clear list

  // For loop example: show numbers 1–5
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    numberList.appendChild(li);
  }
});

// While loop example: log countdown
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}


// Part 4: DOM Manipulation


// Change background color on button click
let colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "#f5f5f5" : "lightblue";
});

// Add items (friends) dynamically
let addFriendBtn = document.getElementById("addFriendBtn");
let friendsList = document.getElementById("friendsList");
let friendCounter = 1;

addFriendBtn.addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "Friend " + friendCounter;
  friendsList.appendChild(li);
  friendCounter++;
});
