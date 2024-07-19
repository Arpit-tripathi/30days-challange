// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log(even)
    } else {
        console.log(odd)
    }
}
checkEvenOdd(10)

// Task 2: Write a function to calculate the square of a number and return the result.

function calSquare(num) {
    return num * num
}
console.log("square of number", calSquare(16))

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max = function maxNumber(num1, num2) {
    console.log("maximum Number", Math.max(num1, num2))
}

max(133, 234)

// Task 4: Write a function expression to concatenate two strings and return the result.

function concatString(str1, str2) {
    return str1 + "" + str2
}
console.log("string:-", concatString("coffee", "chai"))

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumNumber = (num1, num2) => {
    return num1 + num2
}
console.log("sum is :", sumNumber(55, 40))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkString = (str, char) => {
    return str.includes(char);
}

console.log("character exists:", checkString("hello", 'e'));

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const multiply = (a, b = 1) => {
    return a * b;

}
console.log("product is:", multiply(12));


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.


function greetMessage(name, age = 20) {
    return `hello ${name}, Good Morning!`
}
console.log(greetMessage("Good", 25));

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function main(callFunc, times) {
    for (let i = o; i < times; i++) {
        callFunc(i + 1)
    }
}
function callingFunc(tm) {
    console.log(`i have called ${tm} times`)
}
main(callingFunc, 4)


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the
// value, and then applies the second function to the result.

const applyFunctions = (func1, func2, value) => {
    const firstResult = func1(value);
    return func2(firstResult);
};


const addTwo = num => num + 2;
const multiplyByThree = num => num * 3;


const result = applyFunctions(addTwo, multiplyByThree, 5);

console.log(result);



//Feature Request

// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.


function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

checkEvenOdd(11)

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
function calSquare(num) {
    return num * num
}
console.log("square num:", calSquare(22))

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
function concatString(str1, str2) {
    return str1 + " " + str2
}

console.log("String:-", concatString("Google", "cloud"))

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const sumNum = (num1, num2) => {
    return num1 * num2
}

console.log("sum is :", sumNum(222, 566))