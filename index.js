function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function percentage(a, b) {
    return (a / b) * 100;
}

let choice = parseFloat(prompt(
    "Enter a number to choose operation:\n1: Sum\n2: Multiply\n3: Divide\n4: Subtract\n5: Power\n6: Percentage"
));

if (choice >= 0 && choice <= 100000000000000) {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let result;

    switch (choice) {
        case 1:
            result = sum(num1, num2);
            break;
        case 2:
            result = multiply(num1, num2);
            break;
        case 3:
            result = divide(num1, num2);
            break;
        case 4:
            result = subtract(num1, num2);
            break;
        case 5:
            result = power(num1, num2);
            break;
        case 6:
            result = percentage(num1, num2) + "%";
            break;
    }

    alert("Result: " + result);
} else {
    alert("Invalid choice! Please enter a number from 1 to 6.");
}
