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

let titleValid = document.querySelector('#title-validation');

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
class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages + ' pp.'
    this.readStatus = readStatus
  
    // this.info = function() {
    //   return `${this.title}, ${this.author}, ${this.pages}, ${this.readStatus}`
    // }
  }
}

// DO: create a function addBookToLibrary() that can push new Book into myLibrary array
  // convert new Book into variable newBook
  // push newBook to myLibrary
function addBookToLibrary(title, author, pages, readStatus) {
  let newBook = new Book(formTitleInput.value, formAuthorInput.value, formPagesInput.value, formReadStatusInput.checked);


  myLibrary.push(newBook);
  displayBookScreen();
}

function displayBookScreen() {
  const infoBoxes = document.getElementById('info-box');
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => infoBoxes.removeChild(box)); 
  infoBoxes.textContent = '';

  for (i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
}

// DO: create function displayBook that allows new Book to be displayed in modal form
  // this can be done by creating modal that allows prompt to enter title, author, pages, and readStatus
  // it takes the user's input values and displays them neatly in a box
  //
  // add eventlistener function delete() that can delete book from myLibrary array 
function displayBook(bookItem) {

  const infoBox = document.querySelector('#info-box');
  infoBox.textContent = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const bookBox = document.createElement('div');
    bookBox.classList.add('box');
    // bookBox.setAttribute("data-indexNum", myLibrary.indexOf(this));
    // bookBox.dataset.indexNum = myLibrary[i];

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

    // if (bookItem.readStatus === false) {
    //   inputStatusSymbol.textContent = "Unread ☓";
    //   inputStatusSymbol.classList.add('unread');
    // } else {
    //   inputStatusSymbol.textContent = "Read ✓";
    //   inputStatusSymbol.classList.add('read');
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
      bookBox.remove();
      myLibrary.splice(i, 1);
      emptyArray();
    }) 
  }
} 


function formValidity() {
  let titleValue = document.getElementById("form-title").value;
  let titleValidation;
  
  if (titleValue = `Title: "${''}"`) {
    titleValidation = "Please enter the title";

  } 
  document.getElementById("title-validation").innerHTML = titleValidation;
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
  checkBoxInput.checked = false;
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
  addBookToLibrary();
  formValidity();
  formReset();
});


