const buttons = document.querySelector(".buttons");
const output = document.querySelector(".output > input");
const decimal = document.querySelector("#decimal");

buttons.addEventListener("click", updateDisplay);

let number1;
let number2;
let operator;

function updateDisplay(e) {
  const value = e.target;
  if (output.value.includes(".")) {
    decimal.disabled = true;
  }

  if (value.classList.contains("number")) {
    output.value += value.textContent;
  }
}

function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

function operate(number1, operator, number2) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "x") {
    return multiply(number1, number2);
  } else {
    return divide(number1, number2);
  }
}
