const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".number");
const equalsBtn = document.querySelector("#equals");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");

buttons.forEach((button) => {
  button.addEventListener("click", addNumberToDisplay);
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", setOperator);
});

equalsBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clear);

let numberOne = null;
let numberTwo = null;
let operator = null;

function clear() {
  numberOne = null;
  numberTwo = null;
  operator = null;
  display.value = "";
}

function evaluate() {
  let newValue;
  if (numberOne !== null && operator !== null) {
    newValue = operate(numberOne, operator, Number(display.value));
    console.log(typeof newValue);
    roundedValue = Math.round(newValue * 100000000) / 100000000;
    display.value = roundedValue;
    numberOne = roundedValue;
    numberTwo = null;
  }
}

function addNumberToDisplay(e) {
  const button = e.target;

  if (button.textContent === "." && display.value.includes(".")) {
    return;
  }
  if (display.value.length >= 9) {
    return;
  }
  if (numberOne === Number(display.value)) {
    display.value = "";
  }
  if (button.classList.contains("number")) {
    display.value += button.textContent;
  }
}

function setOperator(e) {
  if (numberOne === null) {
    numberOne = Number(display.value);
  } else if (numberOne === Number(display.value)) {
    operator = e.target.textContent;
    return;
  } else {
    numberTwo = Number(display.value);
  }
  if (numberOne !== null && numberTwo !== null && operator !== null) {
    evaluate();
  }
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
