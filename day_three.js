// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = 5;
if (num > 0) {
    console.log("number is positive");
} else if (num < 0) {
    console.log("number is negative");
} else {
    console.log("number is zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 16;
if (age >= 18) {
    console.log("eligible for vote ");
} else {
    console.log("eligible not for vote  ");
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = 10;
let b = 15;
let c = 20;

if (a > b) {
    if (a > c) {
        console.log("A is greater ");
    } else {
        console.log("C is greater");
    }
} else if (b > c) {
    console.log("b is greater");
} else {
    console.log("C is greater")
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 2;

switch (day) {
    case 1: console.log("Monday")
        break;
    case 2: console.log("Tuesday")
        break;
    case 3: console.log("Wednesday")
        break;
    case 4: console.log("Thursday")
        break;
    case 5: console.log("Friday")
        break;
    case 6: console.log("Saturday")
        break;
    case 7: console.log("Sunday")
        break;

    default:
        console.log("invalid");
        break;
}


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let marks = 75;
switch (true) {
    case (marks >= 90):
        console.log("grade A")
        break;
    case (marks >= 80 && marks < 90):
        console.log("grade B")
        break;
    case (marks >= 70 && marks <= 80):
        console.log("grade C")
        break;
    case (marks >= 60 && marks < 70):
        console.log("grade D")
        break;
    case (marks >= 50 && marks < 60):
        console.log("grade A")
        break;
    default:
        console.log("grade F")
        break;

}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let check = 59;
console.log(check % 2 == 0 ? "Even" : "odd");


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("leap year")
} else {
    console.log("not a leap year");
}

//Feature Request
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

let A = 0;
if (A >= 0) {
    console.log("positive");
} else if (A < 0) {
    console.log("negative")
} else {
    console.log("zero");
}

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
let Age = 18;
if (Age >= 18) {
    console.log("eligible for vote");
} else {
    console.log("not Eligible for vote");
}

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a
// number (1-7) and logs the day name. 


let Day = 6

switch (Day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid")
        break;
}

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
let marks1 = 55

switch (true) {
    case (marks1 >= 90):
        console.log("Grade: A")
        break;
    case (marks1 >= 80 && marks1 < 90):
        console.log("Grade: B")
        break;
    case (marks1 >= 70 && marks1 < 80):
        console.log("Grade: C")
        break;
    case (marks1 >= 60 && marks1 < 70):
        console.log("Grade: D")
        break;
    case (marks1 >= 50 && marks1 < 60):
        console.log("Grade: E")
        break;

    default:
        console.log("Grade: F")
        break;
}


// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.


let years = 2000

if (years % 4 == 0 && years % 100 != 0) {
    console.log("Leap Year")
} else if (years % 100 == 0 && years % 400 == 0) {
    console.log("Leap Year")
} else {
    console.log("Not a Leap Year")
}