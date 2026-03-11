# calculator

Part of the Odin Project

## Learning Goals

As this is the final project of the [Foundations](https://www.theodinproject.com/paths/foundations/courses/foundations)
course this should be a good lesson for me to demonstrate the HTML, CSS and JavaScript knowledge
that I have gained from this project.

## Planning Phase

### Understanding the Problem

The goal will be creating a Web Based calculator. It will be similar to this online calculator
by [Calculator Soup](https://www.calculatorsoup.com/calculators/math/basic.php).

### Plan

Planning:

- Write the following functions that you find typically on calculators
  - `Add()`
  - `Subtract()`
  - `Multiply()`
  - `Divide()`
- A calculator operation will consist of a number, an operator and another number. Example being,
  3 + 5.
  - Create three variables one for each part of the operation.
- Create a function named `operate` that takes an operator and two numbers, then calls one of your functions (Add, Subtract, Multiply, Divide).
- Create the functions that update one of your number variables when the calculator's digit buttons are clicked. The calculator's UI should update when a button is clicked on the calculator.
- Lastly, make the calculator work. Store the first and second numbers from the users input and `operate()` on them.
  - There should be code to populate the calculator UI display. Once `operate` is called update the display with the result.
  - Figure out how to store all values per operation and call the operate function with them.
- Gotchas and bugs to be aware of
  - **Your calculator should not evaluate more than a single pair of numbers at a time.** For example, your calculator should function like this:
    1. Enter a number (`12`).
    2. Enter an operator (`+`).
    3. Enter a second number (`7`).
    4. Enter a second operator (`-`). At this point, it should evaluate the initial pair of numbers
       (`12 + 7`), then display the result (`19`).
    5. Enter another number (`1`).
    6. Enter another operator or equals sign (`=`). This should use the previous results (`19`) as the first number, the operator (`-`), and the new number (`1`) to calculate the equation `19 - 1`. You should see result (`18`) on the display.
  - Round numbers with long decimals so they don't overflow the display.
  - Display some type of error message if user tries to divide by 0.
  - Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user.
    - If you enter a number (`2`), followed by an operator button (`+`). You press the operator button (`+`) a second time. Your calculator should not evaluate this as (`2 + 2`) and should not display the result 4.
    - Your calculator should not run any operations if consecutive operator buttons are pressed.
    - When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!

#### Extra Credit

- Add support for floating point numbers. Add a `.` button to let users input decimals.
  - Don't allow for more than one decimal point. We shouldn't allow users to type a something like: `12.3.56.3`. Disable the `.` button if there's already a decimal in the display.
  - Add a "backspace" button for user mistakes.
  - Add keyboard support!
