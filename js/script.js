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

let operand1;
let operator;
let operand2;

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
