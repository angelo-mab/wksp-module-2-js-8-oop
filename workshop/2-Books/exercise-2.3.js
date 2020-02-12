// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2

// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

class Book {
  constructor(titleInput, genreInput, authorInput, readInput) {
    this.title = titleInput;
    this.genre = genreInput;
    this.author = authorInput;
    this.read = readInput || false;
  }
}

class BookList {
  constructor() {
    this.booksread = 0;
    this.bookUnread = 0;
    this.books = [];
    this.read = null || false;
    this.lastBookRead = null;
    this.currentBook = null;
    this.nextBook = null;
  }
  add = book => {
    this.books.push(book);
    if (book.read !== false) this.booksread += 1;
    else this.bookUnread += 1;
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

console.log(homeLibrary);
