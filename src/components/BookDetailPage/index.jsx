import { useParams } from 'react-router-dom';
import DuplicateData from '../DuplicateData';
import './index.css'

const BookDetailPage = () => {
    const { id } = useParams(); 
    const bookData = DuplicateData(); 

    const book = bookData.find(b => b.id === parseInt(id));

    if (!book) {
        return <h2>Book not found</h2>;
    }

    return (
        <div className="book-detail-full-page">
            <header className="book-header">
                <h1 className="book-title-large">{book.title}</h1>
                <p className="book-author-large">by {book.author}</p>
            </header>

            <section className="book-meta-section">
                <p><strong>Genre:</strong> {book.genre}</p>
                <p className='rating'><strong>Rating:</strong> ⭐ {book.rating}</p>
                <p><strong>Publication Year:</strong> {book.publication_year}</p>
            </section>

            <article className="book-description-section">
                <h2>About the Book</h2>
                <p>{book.description}</p>
            </article>
        </div>
    );
};

export default BookDetailPage;
