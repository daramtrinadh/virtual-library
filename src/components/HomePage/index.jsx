import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../../context/BookContext';
import './index.css';

const HomePage = () => {
    const { filteredBooks, saveBookToLibrary, savedBooks } = useContext(BookContext);

    const isBookSaved = (book) => {
        return savedBooks.some(savedBook => savedBook.id === book.id);
    };

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <div className="card-container">
                {filteredBooks.length === 0 ? (
                    <p>No books found.</p>
                ) : (
                    filteredBooks.map(book => (
                        <div key={book.id} className="puff-in-center">
                            <Link to={`/books/${book.id}`} className="book-link">
                                <h2>{book.title}</h2>
                            </Link>
                            <p>Author: {book.author}</p>
                            <button
                                onClick={() => saveBookToLibrary(book)}
                                className={isBookSaved(book) ? 'saved-button' : 'save-button'}
                            >
                                {isBookSaved(book) ? 'Saved' : 'Save to My Library'}
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HomePage;
