// Functions for a basic calculator
// Add, subtract, multiply, divide

function add(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

function subtract(a, b) {
  return a - b;
}

function multiply(...nums) {
  return nums.reduce((sum, num) => sum * num);
}

function divide(a, b) {
  return a / b;
}

let operator;
let operand1;
let operand2;

let operators = document.querySelectorAll(".operator");

function operate(operator, operand1, operand2) {
  if (operator === "+") {
    return add(operand1, operand2);
  } else if (operator === "-") {
    return subtract(operand1, operand2);
  } else if (operator === "*") {
    return multiply(operand1, operand2);
  } else if (operator === "/") {
    return divide(operand1, operand2);
  }
}

let text = document.querySelector(".calc-output");
const clear = document.querySelector(".clear");
const btns = document.querySelectorAll(".operand");

clear.addEventListener("click", clearNumber);

btns.forEach((btn) => {
  btn.addEventListener("click", displayNumber);
});

function displayNumber(e) {
  if (text.textContent.length >= 11) {
    return;
  } else if (e.target.textContent === ".") {
    text.textContent += e.target.textContent;
  } else {
    text.textContent += +e.target.textContent;
  }
}

function clearNumber() {
  text.textContent = "";
}
