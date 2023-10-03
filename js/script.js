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

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)) {
      result = operate(operator.textContent, numberOne, numberTwo);
      text.textContent = result;
      numberOne = numberTwo;
      numberTwo = null;
    } else if (numberOne === null) {
      numberOne = +text.textContent;
      text.textContent = null;
    } else if (numberTwo === null && numberOne !== null) {
      text.textContent = null;
      numberTwo = +text.textContent;
      text.textContent = operate(operator.textContent, numberOne, numberTwo);
    }
  });
});

function operate(operator, operand1, operand2) {
  if (operator === "+") {
    return add(operand1, operand2);
  } else if (operator === "-") {
    return subtract(operand1, operand2);
  } else if (operator === "*") {
    return multiply(operand1, operand2);
  } else if (operator === "/") {
    return divide(operand1, operand2);
  } else if (operator === "=") {
    return;
  }
}

function displayNumber(e) {
  if (text.textContent.length >= 11) return;
  if (e.target.textContent === "." && text.textContent.includes(".")) return;
  text.textContent += e.target.textContent;
}

function clearNumber() {
  text.textContent = "";
  numberOne = null;
  numberTwo = null;
}

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
