const createBtn = document.querySelector('create-btn')


// DO: create modal that appears when createBtn is clicked
function modal() {

}

// DO: create event listener for createBtn that brings up modal to input information for new Book title, author, pages, readStatus


let myLibrary = [
  {
    title: '1984',
    author: 'George Orwell',
    pages: '328',
    readStatus: true
  }
];

// DO: create the Book object constructor
function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  // this.info = function() {
  //   return `${this.title}, ${this.author}, ${this.pages}, ${this.readStatus}`
  // }
}

// DO: create a function addBookToLibrary() that can push new Book into myLibrary array
  // convert new Book into variable newBook
  // push newBook to myLibrary
function addBookToLibrary() {
  let newBook = new Book(title, author, pages, readStatus); 
  myLibrary.push(newBook);

 
}

// DO: create function displayBook that allows new Book to be displayed in modal form
  // this can be done by creating modal that allows prompt to enter title, author, pages, and readStatus
  // add eventlistener function delete() that can delete book from myLibrary array 
function displayBook() {
  const dispTitle = document.createElement('div');
  const dispAuthor = document.createElement('div');
  const dispPages = document.createElement('div');
  const dispStatus = document.createElement('div');

  for (let i = 0; i < myLibrary.length; i++) {

  }
} 


addBookToLibrary()


