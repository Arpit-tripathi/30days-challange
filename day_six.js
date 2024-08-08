// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5]
console.log("array is :", arr)

// Task 2: Access the first and last elements of the array and log them to the console.

let array = [1, 2, 3, 4, 5]
console.log("first array", array[0])
console.log("last array", array[array.length - 1]);


// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

let arr1 = [1, 2, 3, 4, 5, 6, 7]
arr1.push(10)
console.log("updated array after push", arr1)


// Task 4: Use the pop method to remove the last element from the array and log the updated array.
let arr2 = [1, 2, 3, 4, 5, 6, 7]
arr2.pop()
console.log("updated array after pop", arr2)


// Task 5: Use the shift method to remove the first element from the array and log the updated array.
let arr3 = [1, 2, 3, 4, 5, 6, 7]
arr3.shift()
console.log("updated array after shift", arr3)


// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum1 = myNumber.reduce((acc, curr) => acc + curr, 0);
console.log(sum1);


//question 10\\

let item = ["man", "poet", "chilli", "winter", "parrot"];
for (let i = 0; i < item.length; i++) {
    console.log(item[i])
}


//question 11

item.forEach((ele) => console.log(ele))


//question 12

let newArr = [
    [1, 2],
    [2, 3],
    [3, 4]
];
console.log(newArr);

//question 13

console.log("row first", newArr[0][1]);
console.log("row second", newArr[2][1]);
