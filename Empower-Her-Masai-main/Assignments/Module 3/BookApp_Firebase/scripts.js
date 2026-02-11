// Your Realtime DB endpoint
const URL = "https://book-management-d6fa9-default-rtdb.asia-southeast1.firebasedatabase.app/books";

// ==========================
// Fetch All Books
// ==========================
async function fetchBooks() {
    const res = await fetch(`${URL}.json`);
    const data = await res.json();

    const books = data ? Object.keys(data).map(id => ({ id, ...data[id] })) : [];
    displayBooks(books);
}

// ==========================
// Display Books
// ==========================
function displayBooks(books) {
    const container = document.getElementById("book-list");
    container.innerHTML = "";

    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
        <img src="${book.coverImageURL}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>₹${book.price}</p>

        <button onclick="updateAuthor('${book.id}')">Update Author</button>
        <button class="delete-btn" onclick="deleteBook('${book.id}')">Delete</button>
        <button onclick="showDetails('${book.title}', '${book.author}', '${book.price}', '${book.coverImageURL}')">View Details</button>
        `;

        container.appendChild(card);
    });
}

// ==========================
// Add Book
// ==========================
document.getElementById("addBookForm").addEventListener("submit", e => {
    e.preventDefault();

    const newBook = {
        title: title.value,
        author: author.value,
        price: price.value,
        coverImageURL: image.value
    };

    fetch(`${URL}.json`, {
        method: "POST",
        body: JSON.stringify(newBook)
    })
    .then(() => fetchBooks());

    e.target.reset();
});

// ==========================
// Update Author
// ==========================
function updateAuthor(id) {
    const newAuthor = prompt("Enter new author:");

    if (!newAuthor) return;

    fetch(`${URL}/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({ author: newAuthor })
    }).then(fetchBooks);
}

// ==========================
// Delete Book
// ==========================
function deleteBook(id) {
    fetch(`${URL}/${id}.json`, {
        method: "DELETE"
    }).then(fetchBooks);
}

// ==========================
// Modal
// ==========================
function showDetails(title, author, price, imageURL) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalAuthor").innerText = "Author: " + author;
    document.getElementById("modalPrice").innerText = "Price: ₹" + price;
    document.getElementById("modalImg").src = imageURL;

    document.getElementById("modal").style.display = "flex";
}

document.getElementById("closeModal").onclick = () =>
    document.getElementById("modal").style.display = "none";

// ==========================
// Load Books on Start
// ==========================
fetchBooks();
