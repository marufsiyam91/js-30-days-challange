// Task 01:  Write a program to add two numbers and log the result to the console.
function addNums(a, b) {
    return a + b
}
console.log(addNums(5, 9))

//Task 02:  Write a program to substract two numbers and log the result to the console.
function substractNums(a, b) {
    return a - b
}
console.log(substractNums(5, 9))

//Task 03:  Write a program to multiply two numbers and log the result to the console.
function multiplyNums(a, b) {
    return a * b
}
console.log(multiplyNums(5, 9))

//Task 04:  Write a program to devide two numbers and log the result to the console.
function devideNums(a, b) {
    return a / b
}
console.log(devideNums(5, 9))

//Task 05:  Write a program to find the remainder when one number is divided by another and log the result to the console.
function reminderNums(a, b) {
    return a % b
}
console.log(reminderNums(9, 5))

// Task 06: use the += operator to add a number to a variable and log the result to the console.
let number = 25;
number += 25;

console.log(number)

//Task 07: use the -= operator to subtract a number from a variable and log the result to the console.
let anotherNumber = 50;
anotherNumber -= 25;

console.log(anotherNumber)

//Task 08:  Write a program to compare two numbers using > and < and log the result to the console.
function compare(num1, num2) {
    const isSmall = num1 < num2
    const isBig = num1 > num2

    return {
        isSmall,
        isBig
    }
}

console.log(compare(20, 35))

 