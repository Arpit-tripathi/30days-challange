// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

let i = 1;
for (i; i <= 10; i++) {
    console.log(i);
}


// Task 2: Write a program to print the multiplication table of 5 using a for loop.
let j = 1;
for (j; j <= 10; i++) {
    console.log(`5*${i}=`, 5 * i);
}


// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let k = 1;
while (i <= 10) {
    sum += 1
    i + 1
}
console.log("sum", sum)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let p = 10;
while (p > 0) {
    console.log(p);
    p -= 1
}

// Activity 3: Do... While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let t = 1;
do {
    console.log(t);
    t += 1
} while (t < 6)


// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 5
let factorial = 1;
let a = number;
do {
    factorial *= 1;
    a -= 1;
} while (a > 0)

console.log(`Factorial of ${number} is ${factorial}`);


// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let v = 1; v <= 6; v++) {
    let star = ""
    for (let q = 1; q <= v; q++) {
        star += "* "
    }
    console.log(star)
}

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let u = 1; u <= 10; u++) {
    if (u == 5) {
        continue
    }
    console.log(u)
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let x = 1; x <= 10; x++) {
    if (x == 7) {
        break
    }
    console.log(x)
}


//Feature Request
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.


for (let y = 1; y <= 10; y++) {
    console.log(y)
}

let o = 1;
while (o <= 10) {
    console.log(o)
    o += 1
}

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.


for (let e = 1; e <= 10; e++) {
    console.log(`5* ${e}`, 5 * e)
}

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
let stars = 6

for (let i = 1; i <= 6; i++) {
    let star = ""
    for (let j = 1; j <= i; j++) {
        star += "* "
    }
    console.log(star)
}

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

let sums = 0
let l = 1
while (l <= 10) {
    sum += l
    l += 1
}

console.log("Sum", sums)

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

let num = 5

let factorials = 1
do {
    if (num == 0) {
        break
    }
    factorials *= num
    num -= 1
} while (num > 0)

console.log("Factorial:", factorials)