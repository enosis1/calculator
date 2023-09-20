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
