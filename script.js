const myLibrary = [];
const newBookButton = document.querySelector("#new-book-button");
const cancelButton = document.querySelector("#cancel-button")
const dialog = document.querySelector("#form-dialog");

newBookButton.addEventListener("click", function() {
    dialog.showModal();
});

cancelButton.addEventListener("click", function() {
    dialog.close();
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const newBookForm = document.querySelector("#new-book-form");

// function addBookToLibrary(title, author, pages, read){
//     const newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);
// }