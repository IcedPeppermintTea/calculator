/*constants*/
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const calculatorButtons = document.querySelector(".buttons");
let num1, num2, operator; // to be used in actual calculations

// arrays with button options
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["%", "/", "*", "-", "+", "="]
const keys = ["AC", "B"]

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


