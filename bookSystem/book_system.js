let books = [];

// Add book details
const addBook = () => {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumbers = parseInt(document.getElementById('pageNumbers').value);

    // Validate data entries and add to books array
    if (bookName && authorName && bookDescription && !isNaN(pageNumbers)) {
        
        // Create book object
        const book = {
            name: bookName,
            author: authorName,
            description: bookDescription,
            pages: pageNumbers
        };

        // Add book object to books
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill all fields correctly.');
    }
}

const showBooks = () => {
    const booksDiv = books.map((book, index) => 
    `<h1> Book ${index + 1}: </h1>
    <p><strong> Book Name: </strong> ${book.name}</p>
    <p><strong> Author Name: </strong> ${book.author}</p>
    <p><strong> Book Description: </strong> ${book.description}</p>
    <p><strong> No. of Pages: </strong> ${book.pages}</p>
    <button onclick="editBook(${index})">Edit</button> <button onclick="deleteBook(${index})">Delete</button>` 
    );

    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Clear the book details
const clearInputs = () => {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pageNumbers').value = '';
}

//  Delete  book
const deleteBook = (index) => {
    // const foundBook = 
    const response = confirm('Are you sure you want to delete this book?');
    if (response) {
        books.splice(index, 1);
        alert('Book deleted successfully!');
        showBooks();
    } else {
        alert('Book NOT deleted');
        showBooks();
    }
}