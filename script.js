const createBtn = document.querySelector('create-btn')

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  // this.info = function() {
  //   return `${this.title}, ${this.author}, ${this.pages}, ${this.readStatus}`
  // }
}

function addBookToLibrary() {

}

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    
  }
}

const book1 = new Book('1984', 'George Orwell', '328', 'read already');
