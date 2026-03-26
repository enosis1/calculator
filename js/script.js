const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");

buttons.forEach((button) => {
  button.addEventListener("click", addNumberToDisplay);
});

operators.forEach((button) => {
  button.addEventListener("click", setOperator);
});

equals.addEventListener("click", evaluate);
let numberOne = null;
let numberTwo = null;
let operator = null;

function evaluate() {
  let newValue;
  if (numberOne !== null && operator !== null) {
    newValue = operate(numberOne, operator, Number(display.value));
    display.value = newValue;
  }
}

function addNumberToDisplay(e) {
  const button = e.target;

  if (numberOne === Number(display.value)) {
    display.value = "";
  }
  if (button.classList.contains("number")) {
    display.value += button.textContent;
  }
}

function setOperator(e) {
  numberOne = Number(display.value);
  operator = e.target.textContent;
}

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
function divide(numberOne, numberTwo) {
  if (numberTwo === 0) {
    return "Cannot divide by 0.";
  }
  return numberOne / numberTwo;
}

function operate(numberOne, operator, numberTwo) {
  if (operator === "+") {
    return add(numberOne, numberTwo);
  } else if (operator === "-") {
    return subtract(numberOne, numberTwo);
  } else if (operator === "x") {
    return multiply(numberOne, numberTwo);
  } else {
    return divide(numberOne, numberTwo);
  }
}
