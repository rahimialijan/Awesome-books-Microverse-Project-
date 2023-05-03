import Book from './book.js';
import StoreBook from './store.js';
import UI from './ui.js';

// event for adding new books(using form Id)
document.getElementById('book-submit').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const bookId = document.getElementById('bookId').value;
  e.preventDefault();

  // validate
  if (title === '' || author === '' || bookId === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    const newBook = new Book(title, author, bookId);
    // add book to UI
    UI.addNewBook(newBook);

    // add book to store
    StoreBook.addBook(newBook);

    // clear all input field after the submit
    UI.clearField();

    // show alert
    UI.showAlert('Book added', 'success');
  }
});

// event: remove the book form the list
document.getElementById('new-book-list').addEventListener('click', (e) => {
  UI.removeBook(e.target);
  StoreBook.removeBook(e.target);
  UI.showAlert('Book Deleted', 'success');
});

// event for display books
document.addEventListener('DOMContentLoaded', UI.displayBook);

// live date and time
setInterval(() => {
  const dt = new Date();
  const hrs = dt.getHours();
  let min = dt.getMinutes();
  let sec = dt.getSeconds();

  // Show time and date.
  document.getElementById('time').innerHTML = `${hrs}:${min}:${sec}`;
  document.getElementById('date').innerHTML = dt.toDateString();

  if (hrs >= 12) {
    document.getElementById('hrs').innerHTML = 'PM';
  } else {
    document.getElementById('hrs').innerHTML = 'AM';
  }

  const startTicking = (val) => {
    if (val < 10) {
      val = `0${val}`;
    }
    return val;
  };
  min = startTicking(min);
  sec = startTicking(sec);
});
