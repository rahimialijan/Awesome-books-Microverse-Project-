import Book from './book.js';
import StoreBook from './store.js';
import UI from './ui.js';

// event for display books
document.addEventListener('DOMContentLoaded', UI.displayBook);

// event for adding new books(using form Id)
document.getElementById('book-submit').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const bookId = document.getElementById('bookId').value;
  e.preventDefault();

  const newBook = new Book(title, author, bookId);

  // add book to UI
  UI.addNewBook(newBook);

  // add book to store
  StoreBook.addBook(newBook);

  // clear all input field after the submit
  UI.clearField();
});

// event: remove the book form the list
document.getElementById('new-book-list').addEventListener('click', (e) => {
  UI.removeBook(e.target);
});