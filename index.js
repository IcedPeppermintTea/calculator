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
const keyButtons = document.querySelectorAll(".key-button");
let displayNum1 = document.querySelector("#num1");
let displayNum2 = document.querySelector("#num2");
let displayOperator = document.querySelector("#operator");
let result = document.querySelector(".result");

// to be used in actual calculations
let num1 = "";
let num2 = "";
let operator = "";
let currentInput = "first" // track calculator state, firstNum, secondNum, etc.


/* mathematical functions */
// add
function add(num1, num2) {
    return Number(num1) + Number(num2);
}
// subtract
function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}
// multiply
function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}
// divide
function divide(num1, num2) {
    if (Number(num2) === 0) {
        return null;
    }
    return Number(num1) / Number(num2);
}
// modulo
function modulo(num1, num2) {
    return Number(num1) % Number(num2);
}

/*call appropriate mathematical action*/
function operate() {
    let output;
    // display nothing when calculation is invalid
    if (num1.length === 0 || num2.length === 0){
            return;
        }
    switch(operator) {
        case "+":
            output = add(num1, num2);
            break;
        case "-":
            output = subtract(num1, num2);
            break;
        case "*":
            output = multiply(num1, num2);
            break;
        case "/":
            output = divide(num1, num2);
            break;
        case "%":
            output = modulo(num1, num2);
            break;
    }

    // round output when it contains long decimals
    output =  Math.round(output * 100) / 100;

    // snarky comment for zero division case
    if (output === null) {
        result.textContent = "...really?";
        clear();
    }
    else {
        clear(); // clear variables for next iteration
        num1 = output; 
        result.textContent = num1;
        displayNum1.textContent = num1;
        currentInput = "result";
        console.log(currentInput)
    }
}

// add event listeners for calculator num buttons
numButtons.forEach((button => {
    button.addEventListener("click", e => {
        // override result if user gives new number 
        if (currentInput === "result" && operator.length === 0) {
            clear()
            getFirstNum(e.target.textContent);
        }
        // if user giving the first number, display it
        else if (currentInput == "first") {
            getFirstNum(e.target.textContent);
        }
        //if user giving the second number, display it
        else if (currentInput == "second") {
            getSecondNum(e.target.textContent);
        }
    });
}));

// add event listener for calculator operator buttons
opButtons.forEach(button => {
    button.addEventListener("click", e => {
        getOperator(e.target.textContent);
        currentInput = "second"
    });
});

// add event listener for key buttons
keyButtons.forEach(button => {
    button.addEventListener("click", e => {
        switch (e.target.textContent) {
            case "=":
                operate(num1, num2, operator);
                break;
            case "AC":
                clear();
                result.textContent="";
                break;
            case "B":
                break;
        }
    });
});

// get first value and display in screen
function getFirstNum(value) {
    num1 += value;
    displayNum1.textContent = num1;
}

// get operator value and display in screen
function getOperator(value) {
    // check if a number has already been chose
    if (num1.length === 0) {
        return;
    }
    // if operator is clicked after a pair of numbers - calculate them first
    else if (num2.length !== 0 && operator.length !== 0) {
        operate(num1, num2, operator);
    }
    // operator is clicked after first number
    else {
        operator = value;
        displayOperator.textContent = operator;
    }
}

// get second value and display in screen
function getSecondNum(value) {
    num2 += value;
    displayNum2.textContent = num2;
    console.log(num2.length);
}

// clear variables for next iteration 
function clear() {
    num1 = "";
    displayNum1.textContent = "";
    num2 = "";
    displayNum2.textContent = "";
    operator = "";
    displayOperator.textContent = "";
    currentInput = "first";
}

