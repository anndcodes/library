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

    myLibrary.push(new Book(title, author, pages, read));

    // get index of the books
    books = Object.keys(myLibrary);
    for (let i = 0; i < books.length; i++) {
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
  let card = document.createElement("div");
  let cardsContainer = document.querySelector(".cards-container").appendChild(card);
  let cardTitle = document.createElement("h3");
  let cardAuthor = document.createElement("p");
  let cardPages = document.createElement("p");
  let removeCard = document.createElement("button");
  let readStatus = document.createElement("button");

  //append elements
  card.append(cardTitle, cardAuthor, cardPages, readStatus, removeCard);

  //add class
  card.classList.add("card");
  cardTitle.classList.add("card-title");
  cardAuthor.classList.add("card-author");
  cardPages.classList.add("card-pages");
  removeCard.classList.add("remove-card");
  readStatus.classList.add("read-status");

  //add content
  cardTitle.textContent = `${title}`;
  cardAuthor.textContent = `${author}`;
  cardPages.textContent = `${pages} pages`;
  removeCard.textContent = "remove";

  //add read status button
  read.forEach(status => {
    if(status.checked) {
      readStatus.textContent = "read";
      readStatus.classList.add("have-read");
    } else {
      readStatus.textContent = "not read";
      readStatus.classList.add("not-read");
    }
  })

  // update read status
  readStatus.addEventListener('click', () => {
    if(readStatus.classList.contains("have-read")) {
      readStatus.textContent = "not read";
      readStatus.setAttribute("class", "not-read read-status");
    } else {
      readStatus.textContent = "read";
      readStatus.setAttribute("class", "have-read read-status");
    }
  })

  // remove card
  removeCard.addEventListener('click', function () {
    myLibrary.splice(index, 1);
    cardsContainer.remove(card);
  })
}


addBookToLibrary()