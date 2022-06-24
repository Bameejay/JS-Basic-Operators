// read numbers in the program
const num1 = parseFloat(prompt('Enter number 1: '))
const num2 = parseFloat(prompt('Enter number 2: '))

const operator = prompt('Enter operator: (+, -, /, *)')
let result = 0
if (isNaN(num1) || isNaN(num2)) {
    alert('Invalid number!');
} else {
    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '*':
            result = num1 * num2
            break;
        default:
            alert('Invalid operator')
    }
    document.write(`${num1} ${operator} ${num2} = ${result}`)
}