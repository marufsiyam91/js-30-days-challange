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


//Task 09:  Write a program to compare two numbers using >= and <=  and log the result to the console.
function compareNums(num1, num2) {
    const isSmall = num1 <= num2
    const isBig = num1 >= num2

    return {
        isSmall,
        isBig
    }
}

console.log(compareNums(20, 20))

//Task 10:  Write a program to compare two numbers using == and ===  and log the result to the console.
function checkValueandType(value1, value2) {
    console.log(value1 == value2)
    console.log(value1 === value2)
}

console.log(checkValueandType(20, '20'))

//Task 11:  Write a program that uses the &&  operator to combine two conditions and log the result to the console.
function conditionCheck(value1, value2) {
    if (value1 > value2 && value1 > 25) return value1
}

console.log(conditionCheck(30, 15))

//Task 12:  Write a program that uses the ||  operator to combine two conditions and log the result to the console.
function CheckOr(value1, value2) {
    if (value1 > value2 || value1 > 10) return value1
}

console.log(CheckOr(12, 15))


 