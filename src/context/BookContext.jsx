import React, { createContext, useState } from 'react';
import DuplicateData from '../components/DuplicateData'; 

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [savedBooks, setSavedBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const bookData = DuplicateData();

    const saveBookToLibrary = (book) => {
        if (!savedBooks.some(savedBook => savedBook.id === book.id)) {
            setSavedBooks([...savedBooks, { ...book, saved: true }]); 
        }
    };

    const removeBookFromLibrary = (bookId) => {
        setSavedBooks(savedBooks.filter(book => book.id !== bookId));
    };

    const filteredBooks = bookData.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <BookContext.Provider value={{
            savedBooks,
            saveBookToLibrary,
            removeBookFromLibrary,
            searchTerm,
            setSearchTerm,
            filteredBooks,
        }}>
            {children}
        </BookContext.Provider>
    );
};
