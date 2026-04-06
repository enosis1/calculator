// Create state variables
let displayValue = "";
let numberOne = null;
let operator = null;
let justOperated = false;
let replaceDisplay = false;

// Get DOM variables
const display = document.querySelector("#display");
const buttons = document.querySelector(".buttons");
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

// What happens for a calculation?
//
// When a number button is pressed:
//    If replaceDisplay is true:
//      Replace the displayValue variable with the button value
//      Set the display (DOM) to the displayValue
//      Set replaceDisplay to false
//    Else:
//      The button value is appended to the displayValue variable.
//      Display (DOM) gets updated to match displayValue variable.
// When an operator is pressed:
//    If numberOne is not null:
//      Set the operator button that is pressed to the operator variable
//      Run the operate function with numberOne, the current displayValue and the operator to displayValue
//      Update the display (DOM) to displayValue
//      Set the replaceDisplay variable to true.
//    Else:
//      Get the DOM display value and set it to the numberOne variable.
//      Set the replaceDisplay variable to true.
// When the equals operator is pressed
//    Set justOperated variable to true
//    Call operate function with numberOne, operator and current displayValue

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

function handleClear() {}

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
