const buttons = document.querySelector(".buttons");
const output = document.querySelector(".output > input");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");

buttons.addEventListener("click", updateDisplay);
equals.addEventListener("click", operate);

let defaultStatus = true;

let numberOne = null;
let numberTwo = null;
let operator = null;

function getOperator(e) {
  if (e.target.classList.contains("operator")) {
    return e.target.textContent;
  }
}

// Create the functions that update one of our number values when the calculator's number buttons
// are clicked. The calculator should update to reflect that number.
// When a number is clicked
//    If the currentValue is equal to numberOne
//        Clear the output
//    Append the number to the current display output
//    Update the currentValue to equal the number in the display
// When an operator is clicked
//    Get the operator that was clicked
//    Get the currentValue
//    If the currentValue is equal to numberOne
//        Clear the output
//    If numberOne is empty
//      Set the currentValue in the display to numberOne
//    Else if numberOne is not empty and numberTwo is empty
//       Set the currentValue in the display to numberTwo
//
//    If numberOne is not empty, operator is not empty and numberTwo is not empty
//      calculate numberOne and numberTwo with the operator
//      set the current display to that value
//      set numberOne to the current display
//      set numberTwo to null
//      set operator to newly clicked operator
//

function updateDisplay(e) {
  const currentButton = e.target;
  let currentValue = Number(output.value);

  if (e.target.localName !== "button") {
    return;
  }

  if (output.value.includes(".")) {
    decimal.disabled = true;
  }

  if (currentButton.classList.contains("number")) {
    if (currentValue === numberOne) {
      clearDisplay();
    }
    output.value += currentButton.textContent;
    currentValue = Number(output.value);
  } else if (currentButton.classList.contains("operator")) {
    if (numberOne === null) {
      numberOne = currentValue;
    } else if (numberOne !== null && numberTwo === null) {
      numberTwo = currentValue;
    }
    if (numberOne !== null && numberTwo !== null && operator !== null) {
      let displayValue = operate(numberOne, operator, numberTwo);
      output.value = displayValue;
      numberOne = displayValue;
      numberTwo = null;
    }
    operator = getOperator(e);
    currentValue = Number(output.value);
  }
}

function clearDisplay() {
  output.value = "";
}

function displayNumber() {
  output.value = operate(numberOne, operator, numberTwo);
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
