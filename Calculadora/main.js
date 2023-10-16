document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("#buttons button");

    let currentInput = "";
    let currentOperator = "";
    let firstOperand = null;
    let operationDisplay = "";

    const operatorSymbols = {
        add: "+",
        subtract: "-",
        multiply: "x",
        divide: "÷"
    };

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const action = button.dataset.action;
            const buttonValue = button.textContent;

            if (!action) {
                currentInput += buttonValue;
                operationDisplay += buttonValue;
                display.value = operationDisplay;
            } else if (action === "decimal") {
                if (!currentInput.includes(".")) {
                    currentInput += ".";
                    operationDisplay += ".";
                    display.value = operationDisplay;
                }
            } else if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
                if (currentInput !== "") {
                    if (firstOperand === null) {
                        firstOperand = parseFloat(currentInput);
                        currentOperator = action;
                        operationDisplay += ` ${operatorSymbols[action]} `;
                        display.value = operationDisplay;
                        currentInput = "";
                    } else {
                        firstOperand = operate(firstOperand, parseFloat(currentInput), currentOperator);
                        currentOperator = action;
                        operationDisplay = `${firstOperand} ${operatorSymbols[action]} `;
                        display.value = operationDisplay;
                        currentInput = "";
                    }
                }
            } else if (action === "calculate") {
                if (currentInput !== "" && firstOperand !== null) {
                    currentInput = operate(firstOperand, parseFloat(currentInput), currentOperator);
                    operationDisplay = `${operationDisplay} ${currentInput}`;
                    display.value = currentInput;
                    firstOperand = null;
                }
            } else if (action === "clear") {
                currentInput = "";
                currentOperator = "";
                firstOperand = null;
                operationDisplay = "";
                display.value = "";
            } else if (action === "delete") {
                if (currentInput !== "") {
                    currentInput = currentInput.slice(0, -1);
                    operationDisplay = operationDisplay.slice(0, -1);
                    display.value = operationDisplay;
                }
            }
        });
    });

    function operate(a, b, operator) {
        switch (operator) {
            case "add":
                return (a + b).toString();
            case "subtract":
                return (a - b).toString();
            case "multiply":
                return (a * b).toString();
            case "divide":
                if (b === 0) {
                    return "Error";
                }
                return (a / b).toString();
            default:
                return b.toString();
        }
    }
});
