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

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead (index) {
    myLibrary[index].toggleRead();
    render();
}

function addBookToLibrary () {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

document.querySelector("#new-book-form").addEventListener("submit", function() {
    event.preventDefault();
    addBookToLibrary();
});

function render () {
    let libraryElement = document.querySelector("#library-shelf");
    libraryElement.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.setAttribute("class", "book-card")
        bookElement.innerHTML = `
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author"> by ${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.pages} pages </p>
            <div class="read-toggle">
                <label for"read-checkbox-${i}">Read:</label> 
                <input type="checkbox" id="read-checkbox-${i}" class="read-checkbox" ${book.read ? "checked" : ""} onclick="toggleRead(${i})">
            </div>
            <button class="remove-button" onclick="removeBook(${i})">Remove</button>
        <div>`;
        libraryElement.appendChild(bookElement);
    }
}

function removeBook (index) {
    myLibrary.splice(index, 1);
    render();
}