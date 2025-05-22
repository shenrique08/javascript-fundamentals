

function calculator(num1, num2, operator) {
    let result
    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            return 'Invalid operator'
    }

    return result
}

// Test cases

console.log(calculator(5, 3, '+')) // 8
console.log(calculator(5, 3, '-')) // 2
console.log(calculator(5, 3, '*')) // 15
console.log(calculator(5, 3, '/')) // 1.6666666666666667
console.log(calculator(5, 3, '%')) // 'Invalid operator'
console.log(calculator(5, 3, '')) // 'Invalid operator'
