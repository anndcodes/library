const addBook = document.getElementById("add-book");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("dialog #close-modal");
const submitBook = document.querySelector("dialog #submit-book");
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


