//Activity 1 variable Declaration

//Task 1 Declare  a variable using {var} , assign its number and log the value to the console..

var num = 20;
console.log(num);

//Task 2 Declare a variable using {let}, assign a string and log the value to console.

var str = "abc";
console.log(str);

//Activity 2 const Declaration

//Task 3 Declare a variable  using {const}, assign it a boolean value and log the value of console.

const count = true;
console.log(count);

//Activity 3 Data Types

// Task 4 Declare a variables of different data types(num, str ,boolean, obj, arr) and log each variables type using type of operator.

let a = 10;
const name = "okk";
let check = true;
let obj = {
    name: "raj",
    numb: 10
}
let arr = [20, "over", true]


console.log(typeof (a));
console.log(typeof (name));
console.log(typeof (check));
console.log(typeof (obj));
console.log(typeof (arr));


//Activity 4 Reassigning variable

//Task 4 Declare a variable  using [let], assign it an initial value ,reassign  a new value  and log both the value to the console..

let numb = 21;
console.log(numb);
numb = 31;
console.log("reassign value" + numb);

//Activity 5 understanding const

//Task 6 try Reassigning with const and see the error.

const abc = "name";
console.log(abc);
// abc = "add"
// console.log(abc);  //TypeError: Assignment to constant variable.//



//Feature Request

// Variable Types of console log
//Write a script  that declares a variable  of different data types and logs both value and type of each variable to console ..

let age = 4;
let Book = "Ramayan";
let option = true;
let ofc = {
    id: 212,
    life: "one"
}

let number = [1, 2, 3];

console.log("value of age:" + age + " &type is:" + typeof (age));
console.log("value of Book:" + Book + " &type is:" + typeof (Book));
console.log("value of option:" + option + " &type is:" + typeof (option));
console.log("value of ofc:" + ofc + " &type is:" + typeof (ofc));
console.log("value of number:" + number + " &type is:" + typeof (number));


//Reassignment Demo
//create a script that demonstrate that difference in behavior let and const  when  it comes to reassignment

let check1 = "first"
console.log(check1);
check1 = "second"
console.log("updated value:" + check1);


const fine = "chai"
console.log(fine);
// fine = "coffee"
// console.log("updated:" + fine);
//TypeError: Assignment to constant variable.