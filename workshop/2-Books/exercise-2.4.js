// From 2.3
// Copy over all of the code from 2.3...

// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
class Book {
  constructor(
    titleInput,
    genreInput,
    authorInput,
    read,
    startReadDate,
    endReadDate
  ) {
    this.title = titleInput;
    this.genre = genreInput;
    this.author = authorInput;
    this.read = read || false;
    this.startReadDate = startReadDate || null;
    this.endReadDate = endReadDate || null;
  }
}

class BookList {
  constructor() {
    this.booksread = 0;
    this.bookUnread = 0;
    this.books = [];
    this.lastBookRead = null;
    this.currentBook = null;
    this.nextBook = null;
  }
  add = book => {
    this.books.push(book);
    if (book.read !== false) this.booksread += 1;
    else this.bookUnread += 1;
  };
  startReading = title => {
    this.currentBook = title;
    let book = this.books.find(book => book.title === title);
    book.startReadDate = new Date(Date.now());
  };

  finishReading = title => {
    this.lastBookRead = title;
    let book = this.books.find(book => book.title === title);
    book.endReadDate = new Date(Date.now());
    book.read = true;
    this.booksread += 1;
    this.bookUnread -= 1;
  };
}

let homeLibrary = new BookList();

homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(
  new Book("Wind-Up Bird Chronicles", "Fiction", "Haruki Murakami")
);
homeLibrary.add(new Book("1q84", "Fiction", "Haruki Murakami"));
homeLibrary.add(new Book("Norwegian Wood", "Fiction", "Haruki Murakami"));
homeLibrary.add(
  new Book("Wind-Up Bird Chronicles", "Fiction", "Haruki Murakami")
);

homeLibrary.startReading("1q84");
console.log(homeLibrary);
homeLibrary.finishReading("1q84");
