// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookDetailPage from "./components/BookDetailPage";
import SavedBooks from "./components/SavedBooks";
import { BookProvider } from "./context/BookContext"
import Header from "./components/Header";

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/books/:id' element={<BookDetailPage />} />
          <Route exact path='/saved-books' element={<SavedBooks />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
