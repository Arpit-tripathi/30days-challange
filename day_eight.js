//Activity 1: Template Literals

//question 1 Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "Rajesh";
let age = "48";

console.log(`${name}  ${age}`)


//question 2 Create a multi-line string using template literals and log it to the console.


let string = `hey this 
is 1234 
going on`;

console.log(string);

// Activity 2: Destructuring

//question 3  Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let array = ["safat", " arpit"];

let [first, second] = array
console.log(first);
console.log(second);

//question 4 Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "Rattan tata ",
    author: "A.T",
    year: 2019
}

let { title, author } = book

console.log(`${title} by ${author}`);

// Activity 3: Spread and Rest Operators

// question 5  Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let newArray = [1, 2, 3, 4, 56];

let newArray1 = [...newArray, 10, 101]

console.log(newArray);
console.log(newArray1);


//question 6  Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...number) {
    return number.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4));



// Activity 4: Default Parameters

//question 7 Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1  Log the result of calling this function with and without the second parameter.

function defaultProduct(first, second = 1) {
    return first * second
}
console.log(defaultProduct(3, 4));

console.log(defaultProduct(3));


// Activity 5: Enhanced Object Literals

// question 8   Use enhanced object literals to create an object with methods and properties, and log the object to the console.


let Titles = "A.k gandhi";
let Author = "Arpit";
let Year = 2017

let BookDetails = function () {
    return this.Titles + "by" + this.Author
}
let book1 = { Titles, Author, Year, BookDetails }


console.log("book object", book1);
console.log("book Details", book1.BookDetails());



//question 9  Create an object with computed property names based on variables and log the object to the console.


let buildingName = "building";
let towerName = "tower";
let flatNo = "flat";

let address = {
    [buildingName]: "florida",
    [towerName]: "Angel",
    [flatNo]: "281a"
}

console.log(address)


// Feature Request:

// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi - line strings.


let fatherName = "sunnay Singh";
let fatherAge = "59";

console.log(`${fatherName}  and ${fatherAge}`)

let str = `
solving the day 3 
is going good

`

console.log(str);




// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

let num = [1, 2];

let [one, two] = num;

console.log(one);
console.log(two);


let novel = {
    BookTitle: "Raja Ram",
    writer: " ram krishan",
    year: " 2000"
}

let { BookTitle, writer } = novel
console.log(`book title is ${BookTitle} and author is${writer}`);




// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments. 


let box = [1, 2, 3, 4];
let box1 = [5, 6, 7, 8];
let newBox = [...box, ...box1]

console.log(newBox);


function pro(...value) {
    return value.reduce((acc, curr) => acc + curr, 0)

}
let result = pro(1, 2, 3, 4, 5);
console.log(result);



// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.


function greet(name = "Guest", greeting = "Hello") {
    return `${greeting},${name}!`

}

console.log(greet("Alice"))