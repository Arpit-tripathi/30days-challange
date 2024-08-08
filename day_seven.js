// Activity 1  object creation and Access

//question 1  Create an object representing a book with properties like title, author, and year, and log the object to the console.

const Book = {
    title: "sevenOne",
    author: "jaipraksh",
    year: 2018
}
console.log(Book);

//question 2 Access and log the title and author properties of the book object.

console.log("book title", Book.title);
console.log("book author", Book.author);
console.log("book author", Book["year"]);

//Activity 2: Object Methods

//question 3 Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const HolyBook = {
    title: "Ramyan",
    author: "tulsidas",
};

HolyBook.getDetails = function () {
    return `${this.title} by ${this.author}`;
}
console.log(HolyBook.getDetails())


//question 4  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

Book.update = function (newYear) {
    this.year = newYear
}
Book.update(2023);

console.log(Book);

// Activity 3: Nested Objects

//question 5   Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: "friction",
    books: [
        {
            title: "book of ramji",
            author: "arpit",
            year: 2022,
        },
        {
            title: "Chor sipahi",
            author: "raja Ram",
            year: "2021"
        }

    ]
}
console.log(library.name);



//question 6  Access and log the name of the library and the titles of all the books in the library.

console.log("Book Titles");
library.books.forEach(Book => {
    console.log(Book.title)
});

// Activity 4: The this Keyword

//question  7  Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

Book.getTitleAndYear = function () {
    return `${this.title} by ${this.author}`
};
console.log(Book.getTitleAndYear);

// Activity 5: Object Iteration

//question 8  Use a for... in loop to iterate over the properties of the book object and log each property and its value.


for (let property in Book) {
    console.log(`${property}:${Book[property]}`)
};


// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(Book));
console.log(Object.values(Book));

