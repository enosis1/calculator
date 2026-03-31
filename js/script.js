function add(a, b) {
  return a * b;
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
