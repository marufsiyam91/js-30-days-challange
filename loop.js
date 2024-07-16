// Task 01: Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 02: Print the multiplication table of 5 using a for loop.
const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Task 03: Calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum of numbers from 1 to 10 is:", sum);

// Task 04: Print numbers from 10 to 1 using a while loop.
i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// Task 05: Print numbers from 1 to 5 using a do...while loop.
i = 1; // Re-initialize the variable
do {
  console.log(i);
  i++;
} while (i <= 5);

// Task 06: Calculate the factorial of a number using a do...while loop.
function factorial(n) {
  let result = 1;
  let i = n;

  do {
    result *= i;
    i--;
  } while (i > 0);

  return result;
}
console.log(`Factorial of ${number} is: ${factorial(number)}`);

