// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

class Book {
  constructor(
    titleInput,
    genreInput,
    authorInput,
    startReadDateInput,
    endReadDateInput
  ) {
    this.title = titleInput || "NA";
    this.genre = genreInput || "NA";
    this.author = authorInput || "NA";
    this.startReadDate = startReadDateInput || "NA";
    this.endReadDate = endReadDateInput || "NA";
  }
}
let book1 = new Book(
  "Norwegian Wood",
  "Fiction",
  "Haruki Murakami",
  " Jan 1 2020",
  "Feb 1 2020"
);
let book2 = new Book(
  "1q84",
  "Fiction",
  "Haruki Murakami",
  " Feb 1 2020",
  "Mar 1 2020"
);
let book3 = new Book(
  "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
  "Fiction",
  "Haruki Murakami",
  " Mar 1 2020",
  "Apr 1 2020"
);
let book4 = new Book(
  "Wind-Up Bird Chronicles",
  "Fiction",
  "Haruki Murakami",
  " Apr 1 2020",
  "May 1 2020"
);
let book5 = new Book();
console.log(book1, book2, book3, book4, book5);
