// Functions for a basic calculator
// Add, subtract, multiply, divide
let text = document.querySelector(".calc-output");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const operands = document.querySelectorAll(".operand");
const equal = document.querySelector(".equals");

clear.addEventListener("click", clearNumber);

operands.forEach((operand) => {
  operand.addEventListener("click", displayNumber);
});

let numberOne = null;
let numberTwo = null;
let result;
let operand;

operators.forEach((operator) => {
  operator.addEventListener("click", handleNumber);
});

function handleNumber(e) {
  if (numberOne === null || operand === "") {
    numberOne = +text.textContent;
    operand = e.target.textContent;
  } else if (numberTwo === null && numberOne !== null) {
    numberTwo = +text.textContent;
    result = operate(operand, numberOne, numberTwo);
    text.textContent = result;
    numberOne = +result;
    numberTwo = null;
    operand = "";
  }
}

function operate(operator, operand1, operand2) {
  if (operator === "+") {
    return add(operand1, operand2);
  } else if (operator === "-") {
    return subtract(operand1, operand2);
  } else if (operator === "x") {
    return multiply(operand1, operand2);
  } else if (operator === "/") {
    return divide(operand1, operand2);
  }
}

function displayNumber(e) {
  let numberOneString;
  if (text.textContent.length >= 15) return;
  if (e.target.textContent === "." && text.textContent.includes(".")) return;
  if (numberOne !== null) {
    numberOneString = numberOne.toString();
  }
  if (text.textContent === numberOneString) {
    text.textContent = "";
  }
  text.textContent += e.target.textContent;
}

function clearNumber() {
  text.textContent = "";
  numberOne = null;
  numberTwo = null;
  operand = "";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
