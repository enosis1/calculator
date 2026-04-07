// Create state variables
let displayValue = "";
let numberOne = null;
let operator = null;
let justOperated = false;
let replaceDisplay = false;

// Get DOM variables
const display = document.querySelector("#display");
const buttons = document.querySelector(".buttons");
const clear = document.querySelector(".clear");
clear.addEventListener("click", handleClear);
buttons.addEventListener("click", (e) => {
  let button = e.target;
  console.log(button.dataset);
  if (button.classList.contains("digit")) {
    handleDigit(button.textContent);
  } else if (button.dataset.value === "+") {
    handleOperator(button.dataset.value);
  } else if (button.dataset.value === "-") {
    handleOperator(button.dataset.value);
  } else if (button.dataset.value === "x") {
    handleOperator(button.dataset.value);
  } else if (button.dataset.value === "/") {
    handleOperator(button.dataset.value);
  } else if (button.dataset.value === "=") {
    handleEquals(button.dataset.value);
  } else if (button.classList.contains("clear")) {
    handleClear();
  }
});

function handleDisplay() {
  display.textContent = displayValue;
}

function handleDigit(digit) {
  if (replaceDisplay) {
    displayValue = digit;
    handleDisplay();
    replaceDisplay = false;
  } else {
    displayValue += Number(digit);
    handleDisplay();
  }
}

function handleOperator(op) {
  if (numberOne !== null && operator !== null) {
    displayValue = operate(Number(numberOne), operator, Number(displayValue));
    numberOne = String(displayValue);
    operator = op;
    handleDisplay();
    replaceDisplay = true;
  } else {
    numberOne = displayValue;
    operator = op;
    replaceDisplay = true;
  }
}

function handleEquals() {
  if (numberOne !== null && operator !== null) {
    displayValue = operate(Number(numberOne), operator, Number(displayValue));
    handleDisplay();
    numberOne = displayValue;
    operator = null;
    replaceDisplay = true;
    justOperated = true;
  } else {
    return;
  }
}

function handleClear() {
  displayValue = "";
  numberOne = null;
  operator = null;
  justOperated = false;
  replaceDisplay = false;
  handleDisplay();
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
  return b === 0 ? "Error" : a / b;
}

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "x":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}
