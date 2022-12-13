function add(x, y) {
	let sum = 0;
	return sum = x + y;
};

function subtract(x, y) {
	let sum = 0;
	return sum = x - y;
};

function multiply(x, y) {
	let sum = 1;
	return sum = x * y;
};

function divide(x, y) {
	let sum = 1;
	return sum = x / y;
};

function operate(operator, x, y) {
	if (operator === "+") {
		return add(x, y);
	} else if (operator === '-') {
		return subtract(x, y);
	} else if (operator === '*') {
		return multiply(x, y);
	} else {
		return divide(x, y);
	}
};