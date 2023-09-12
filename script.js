const addBook = document.getElementById("add-book");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("dialog #close-modal");


//show modal
addBook.onclick = function () {
  modal.showModal();
}

//close modal
closeModal.onclick = function () {
  modal.close();
}