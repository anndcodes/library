const addBook = document.getElementById("add-book");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#close-modal");
const submitBook = document.querySelector("#submit-book");
let bookInfo = document.querySelector("dialog form");

//variables that will hold book infos
let title;
let author;
let pages;
let read;
let books;
let index;

//show modal
addBook.onclick = function () {
  modal.showModal();
}

//close modal
closeModal.onclick = function () {
  modal.close();
}

//empty array that will receive the objects
let myLibrary = [];

//object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//add books to array
function addBookToLibrary() {
  bookInfo.addEventListener("submit", function (e) {
    e.preventDefault();
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = Array.from(document.querySelectorAll(".read"));

    myLibrary.push(new Book(title, author, pages,read));

    // get index of the books
    books = Object.keys(myLibrary);
    for(let i = 0; i < books.length; i++) {
      index = books[i];
    }

    displayBook();
    modal.close();
    bookInfo.reset();
  })
}

// display books cards
function displayBook() {
  // create elements
  let cardsContainer = document.querySelector(".cards-container")
  let card = document.createElement("div");
  let cardTitle = document.createElement("h3");
  let cardAuthor = document.createElement("p");
  let cardPages = document.createElement("p");

  //add class
  card.classList.add("card");
  cardTitle.classList.add("card-title");
  cardAuthor.classList.add("card-author");
  cardPages.classList.add("card-pages");

  //add content
  cardTitle.textContent = `${title}`;
  cardAuthor.textContent = `${author}`;
  cardPages.textContent = `${pages} pages`;

  //append elements
  cardsContainer.appendChild(card);
  card.append(cardTitle, cardAuthor, cardPages);
}


addBookToLibrary()