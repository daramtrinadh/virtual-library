import './index.css'
import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext'; 

const SavedBooks = () => {
    const { savedBooks, removeBookFromLibrary } = useContext(BookContext); 

    return (
        <div className="saved-books">
            <h2>My Library</h2>
            {savedBooks.length === 0 ? (
                <p>No saved books.</p>
            ) : (
                <ul>
                    {savedBooks.map(book => (
                        <li key={book.id}>
                            {book.title} by {book.author}
                            <button onClick={() => removeBookFromLibrary(book.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SavedBooks;
