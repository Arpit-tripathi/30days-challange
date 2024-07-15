//OPERATOR

//Activity 1
//Task 1 Write a program to add a two number and log the result to the console.

let a = 30;
let b = 20;
let c = a + b;
console.log("sum:", c);

//Task 2: Write a program to subtract two numbers and log the result to the console.

console.log("subtract:", a - b)

// Task 3: Write a program to multiply two numbers and log the result to the console.
console.log("multiply:", a * b);

// Task 4: Write a program to divide two numbers and log the result to the console.

console.log("divide:", a / b);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

console.log("reminder:", a % b);


//Activity 2
// Task 6: Use the += operator to add a number to a variable and log the result to the console.

a += 10;
console.log("assignment:", a);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

a -= 10;
console.log("assignment:", a);


//Activity 3
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let f = 21;
let g = 22;
console.log("comparison:", f > g);
console.log("comparison:", f < g);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let s = 44;
let t = 50;
console.log("comparison:", s >= t)
console.log("comparison:", s <= t)


// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let e = 10;
let w = "10";
console.log("comparison:", e == w)
console.log("comparison:", w === e)


// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let num1 = 0;
let num2 = 10;
console.log("logical operator:", num1 > 0 && num2 < 5);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.let num1 = 0;
let q = 20
let p = 10;
console.log("logical operator:", num1 > 0 || num2 < 5);


// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let off = true
console.log("logical operator ", !off);

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let check = 10
console.log("ternary operator ?", check > 0 ? "positive" : "negative");


//FEATURE REQUEST
//arithmetic operation script: write a script  that performs basic  arithmetic operations (add, subs, multi, divide, rem)on two number and logs result

// let opp = parseInt(prompt("enter the number :"));
// let opp1 = parseInt(prompt("enter the number :"));

// const add = opp + opp1;
// const subs = opp - opp1;
// const multi = opp * opp1;
// const div = opp / opp1;
// const rem = opp % opp1;

// console.log(`${opp} + ${opp1} = ${add}`);
// console.log(`${opp} - ${opp1} = ${subs}`);
// console.log(`${opp} * ${opp1} = ${multi}`);
// console.log(`${opp} / ${opp1} = ${div}`);
// console.log(`${opp} % ${opp1} = ${rem}`);


// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

let numA = 70;
let numB = 55;

let case1 = numA > numB;
let case2 = numA < numB;
let case3 = numA === numB;

console.log(case1 && case2);
console.log(case2 && case1);
console.log(case1 || case2);
console.log(case2 || case1);


//  Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.


let power = 20;
let result = (power > 0) ? "positive" : (power < 0) ? "negative" : "zero";
console.log(result);