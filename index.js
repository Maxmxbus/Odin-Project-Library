const library = [];

// Book constructor

class Book{
    constructor(author, title,numPages,beenRead, rating ){
        this.author = author,
        this.title = title,
        this.numPages = numPages,
        this.beenRead = beenRead,
        this.rating = rating;
    }
}
// function Book(author, title,numPages,beenRead, rating ){
//     this.author = author,
//     this.title = title,
//     this.numPages = numPages,
//     this.beenRead = beenRead,
//     this.rating = rating;
// };

function addToLibrary() {
    const createCardForm = document.querySelector(".createCard");

    createCardForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const author = document.querySelector("#author").value;
        const title = document.querySelector("#title").value;
        const numPages = document.querySelector("#numPages").value;
        const beenRead = document.querySelector("#beenRead").checked;
        const rating = document.querySelector("#rate").value;

        const book = new Book(author, title, numPages, beenRead, rating);

        library.push(book);
        createCardForm.reset();
        displayLibrary();
        console.log(library);
    });
}

function displayLibrary() {
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Clear previous cards

    // for each book in the library array
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = `
            <p class="auth">By ${book.author}</p>
            <p class="title">${book.title}</p>
            <p class="numP">${book.numPages} pages</p>
            <div class="readBefore">
                <input type="checkbox" id="beenRead${i}" name="beenRead${i}" ${book.beenRead ? 'checked' : ''}>
                <label for="beenRead${i}">Has been read</label>
            </div>
            <p class="rate">${book.rating} stars</p>
            <button class="delete">Delete</button>
        `;

        // Add event listener to the delete button
        const deleteBtn = cardElement.querySelector(".delete");
        deleteBtn.addEventListener('click', function() {
            // Remove the book from the library array
            library.splice(i, 1);
            
            // Remove the card from the DOM
            cardElement.remove();
            
            // Re-display the library to update indexes
            displayLibrary();
        });

        container.appendChild(cardElement);
    }
}

addToLibrary();