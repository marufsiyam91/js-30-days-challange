// Task 01:  Declare a variable using var, assign it a number, and log the value to the console.
var challangeDays = 30;
console.log(challangeDays)

// Task 02:  Declare a variable using let, assign it a string, and log the value to the console.
let challangeName = '30d days js challange';
console.log(challangeName)

// Task 03:  Declare a variable using const, assign it a boolean value, and log the value to the console.
const challangeAccepted = true;
console.log(challangeAccepted)

// Task 04:  Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const number= 30;
const string = '30 days challange';
const dedicated = true;
const challangeDetail = {
    challangeDurationInDays: 30,
    language: 'JavaScript',
    challangeType: ['learning', 'problem-solving', 'doing project', 'docs reading'],
    reward: 'understand js in more deeper way and constant learning'
}
const challangeTopics = ['variable', 'object', 'array', 'function', 'loop', 'hoisting', 'closure', 'class', 'prototype', 'callstack', 'queue', 'node.js']


console.log(typeof (number), typeof (string), typeof (dedicated), typeof (challangeDetail), typeof (challangeTopics))

// Task 05:  Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let value = 30;
console.log(value)
value = 35;
console.log(value)

//Task 06:  Try reassigning a variable declared with const and observe the error.
const initailvalue = 'constant';

// initailvalue = 'isConstant'
console.log(initailvalue) //there would be an error and will show assignment to constant variable

//feature request: 01 : Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

const stringType = 'string value';
const numberType = 30;
const boolean = true;
const object = {
    name: 'object',
    properties: 'key and value'
}
const array = ['value', 'index']
let undefined;
let Null = null

console.log(`the type of stringType is ${typeof(stringType)} and the value is ${stringType}`)
console.log(`the type of numberType is ${typeof(numberType)} and the value is ${numberType}`)
console.log(`the type of boolean is ${typeof(boolean)} and the value is ${boolean}`)
console.log(`the type of object is ${typeof(object)} and the value is ${object}`)
console.log(`the type of undefined is ${typeof(undefined)} and the value is ${undefined}`)
console.log(`the type of Null is ${typeof (Null)} and the value is ${Null}`)

//feature request: 02 : : Create a script that demonstrates the difference in behavior between

let isReassignable = true;
isReassignable = false;
//we can reassign a value to a variable which declared with let because it is by default reassignable but it's not redeclareble.

const isREassignable = false;
isREassignable = true;
//we can't reassign a value to a variable which declared with const, because it's constant we can't change it.