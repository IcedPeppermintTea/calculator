/*constants*/
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const calculatorButtons = document.querySelector(".buttons");

// arrays with button options
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["%", "/", "*", "-", "+"]
const keys = ["=", "AC", "B"]

/*generate calculator buttons*/
numbers.forEach(num => {
    // create the button
    const btn = document.createElement("button");
    btn.textContent = num;
    btn.type = "button";
    btn.classList.add("num-button");

    // append to calculatorButtons
    calculatorButtons.appendChild(btn);
});

operators.forEach(op => {
    // create the button
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.type = "button";
    btn.classList.add("op-button");

    // append to calculatorButtons
    calculatorButtons.appendChild(btn);
});

keys.forEach(key => {
    // create the button
    const btn = document.createElement("button");
    btn.textContent = key;
    btn.type = "button";
    btn.classList.add("key-button");

    // append to calculatorButtons
    calculatorButtons.appendChild(btn);
});

const numButtons = document.querySelectorAll(".num-button");
const opButtons = document.querySelectorAll(".op-button");
let displayNum1 = document.querySelector("#num1");
let displayNum2 = document.querySelector("#num2");
let displayOperator = document.querySelector("#operator");
const result = document.querySelector(".result");

// to be used in actual calculations
let num1 = "";
let num2 = "";
let operator = "";
let currentInput = "first" // track calculator state, firstNum, secondNum, etc.


/* mathematical functions */
// add
function add(num1, num2) {
    return num1 + num2;
}
// subtract
function subtract(num1, num2) {
    return num1 - num2;
}
// multiply
function multiply(num1, num2) {
    return num1 * num2;
}
// divide
function divide(num1, num2) {
    return num1 / num2;
}
// modulo
function modulo(num1, num2) {
    return num1 % num2;
}

/*call appropriate mathematical action*/
function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
        case "%":
            modulo(num1, num2);
    }
}

// add event listeners for calculator num buttons
numButtons.forEach((button => {
    button.addEventListener("click", e => {
        if (currentInput == "first") {
            getFirstNum(e.target.textContent);
        }
        else if (currentInput == "second") {
            getSecondNum(e.target.textContent);
        }
    });
}));

// add event listener for calculator operator buttons
opButtons.forEach(button => {
    button.addEventListener("click", e => {
        getOperator(e.target.textContent);
    });
});

// get first value and display in screen
function getFirstNum(value) {
    num1 += value;
    displayNum1.textContent += num1;
}

// get operator value and display in screen
function getOperator(value) {
    operator = value;
    currentInput = "second";
    displayOperator.textContent = operator;
    console.log(operator);
}

// get second value and display in screen
function getSecondNum(value) {
    num2 += value;
    displayNum2.textContent += num2;
    console.log(num2);
}

