const instructions = document.querySelector('#instructions');
const createBtn = document.querySelector('.create-btn');
const modalBg = document.querySelector('.modal-bg');
const modalCloseBtn = document.querySelector('.modal-close');
const addBtn = document.querySelector('#add-btn');

const formTitleInput = document.querySelector('#form-title');
const formAuthorInput = document.querySelector('#form-author');
const formPagesInput = document.querySelector('#form-pages');
const formReadStatusInput = document.querySelector('#form-status');
const bookIndex = document.querySelectorAll('[data-indexNum]');

// for checkBoxFunc function
const checkBoxInput = document.querySelector('input[name="mod-stat"]');


let myLibrary = [
  // {
  //   title: '1984',
  //   author: 'George Orwell',
  //   pages: '328',
  //   readStatus: true
  // }
];

// DO: create the Book object constructor
function Book(title, author, pages, readStatus) {
  this.title = formTitleInput.value
  this.author = formAuthorInput.value
  this.pages = formPagesInput.value + ' pp.'
  this.readStatus = formReadStatusInput.checked

  // this.info = function() {
  //   return `${this.title}, ${this.author}, ${this.pages}, ${this.readStatus}`
  // }
}

// DO: create a function addBookToLibrary() that can push new Book into myLibrary array
  // convert new Book into variable newBook
  // push newBook to myLibrary
function addBookToLibrary(title, author, pages, readStatus) {
  let newBook = new Book(title, author, pages, readStatus);


  myLibrary.push(newBook);
  displayBook();
}

// DO: create function displayBook that allows new Book to be displayed in modal form
  // this can be done by creating modal that allows prompt to enter title, author, pages, and readStatus
  // it takes the user's input values and displays them neatly in a box
  //
  // add eventlistener function delete() that can delete book from myLibrary array 
function displayBook(bookItem) {

  const infoBox = document.querySelector('#info-box');
  infoBox.textContent = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookBox = document.createElement('div');
    bookBox.classList.add('box');
    // bookBox.dataset.indexNum = myLibrary.indexOf(bookItem);

    infoBox.appendChild(bookBox);
    // title
    const inputTitle = document.createElement('div');
    inputTitle.textContent = `Title: "${myLibrary[i].title}"`;
    inputTitle.classList.add('align');
    bookBox.appendChild(inputTitle);
    // author
    const inputAuthor = document.createElement('div');
    inputAuthor.textContent = "Author: " + myLibrary[i].author;
    inputAuthor.classList.add('align');
    bookBox.appendChild(inputAuthor);
    // pages
    const inputPages = document.createElement('div');
    inputPages.textContent = "Pages: " + myLibrary[i].pages;
    inputPages.classList.add('align', 'pg');
    bookBox.appendChild(inputPages);
    // readStatus
    const inputStatus = document.createElement('div');
    const inputStatusSymbol = document.createElement('b');

    // if (myLibrary[i].readStatus === false) {
    //   checkBoxInput.checked === false;
    // } else {
    //   checkBoxInput.checked === true;
    // }

    if (myLibrary[i].readStatus === false) {
      inputStatusSymbol.textContent = "Unread ☓";
      inputStatusSymbol.classList.add('unread');
    } else {
      inputStatusSymbol.textContent = "Read ✓";
      inputStatusSymbol.classList.add('read');
    }

    inputStatus.appendChild(inputStatusSymbol);
    bookBox.appendChild(inputStatus);
    // deleteBtn
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    bookBox.appendChild(deleteBtn);


    // makes sure the same book is not added again after pressing add button
    // myLibrary.length = 0;
    // const recentObject = myLibrary[myLibrary.length - 1]

    deleteBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(bookBox.dataset.indexNum));
      bookBox.remove();
      emptyArray();
    }) 
  }
} 

function formValidity() {
  if (inputTitle = `Title: ${""}`) {
    alert("Please enter the title.")
    return
  } else {
    modalBg.classList.toggle('modal-active')
  }
}

function emptyArray() {
  if (myLibrary.length === 0) {
    instructions.innerHTML = 'Click <b>NEW BOOK</b> to begin adding books'
  }
}

function formReset() {
  formTitleInput.value = '';
  formAuthorInput.value = '';
  formPagesInput.value = '';
}

// DO: create event listener for createBtn that brings up modal to input information for new Book title, author, pages, readStatus
createBtn.addEventListener('click', () => {
  modalBg.classList.add('modal-active');
});

modalCloseBtn.addEventListener('click', () => {
  modalBg.classList.remove('modal-active');
  formReset();
});

addBtn.addEventListener('click', () => {
  modalBg.classList.remove('modal-active');
  instructions.textContent = '';
  // formReset();
  addBookToLibrary();
})


