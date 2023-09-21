// Functions for a basic calculator
// Add, subtract, multiply, divide
let text = document.querySelector(".calc-output");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const operands = document.querySelectorAll(".operand");

clear.addEventListener("click", clearNumber);

operands.forEach((operand) => {
  operand.addEventListener("click", displayNumber);
});

let numberOne = "";
let numberTwo = "";

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (numberOne === "") {
      numberOne = +text.textContent;
      text.textContent = "";
    } else if (numberTwo === "") {
      numberTwo = +text.textContent
      text.textContent = ""
    }
    if (numberOne && numberTwo) {
    text.textContent = operate(operator.textContent, +numberOne, +numberTwo)
    }
  });
});

function handleNumbers() {}

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
  numberOne = "";
  numberTwo = "";
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
