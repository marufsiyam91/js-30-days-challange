// Task 01:  Write a function to check if a number is even or odd and log the result to the console.
function checkOddEven(num) {
    if (num % 2 === 0) {
        console.log(`the given number is even`)
    }
    else {   
        console.log(`the given number is odd`)
    }
}

checkOddEven(8)

// Task 02:  Write a function to calculate the square of a number and return the result.
function square(value) {
    const square = value * value
    return square
}

console.log(square(5))

//Task 03:  Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (value1, value2) {
    value1 > value2 ? console.log(`${value1} is the maximum number`) : console.log(`${value2} is the maximum number`)
}

findMax(15, 30)

// Task 04:  Write a function expression to concatenate two strings and return the result.
const concatString = function (str1, str2) {
    // const concatedString = str1 + ' ' + str2;
    const concatedString = str1.concat(str2);
    return concatedString
}

console.log(concatString('srting', ' concated'))

// Task 05:  Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (num1, num2) => {
    const sum = num1 + num2
    return sum
}

console.log(calculateSum(5, 8))

// Task 06:  Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkChar = (string, subString) => {
    const result = string.includes(subString) ? true : false
    return result
}

console.log(checkChar('logarithm', 'ri'))