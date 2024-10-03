import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FcLibrary } from "react-icons/fc";
import { SlBookOpen } from "react-icons/sl";
import { BookContext } from '../../context/BookContext';
import './index.css';

const Header = () => {
    const { searchTerm, setSearchTerm } = useContext(BookContext);

    return (
        <div className="header">
            <Link to="/" className="link">
                <div className="logo-section">
                    <h3 className='focus-in-logo-text'>Library</h3>
                    <FcLibrary size={35} className="library-logo" />
                </div>
            </Link>

            <div className="search-section">
                <input 
                    placeholder='Title...' 
                    className="input-search" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <FaSearch className="search-logo" />
            </div>

            <Link to="/saved-books" className="link">
                <div className="saved-books-section">
                    <button type="button" className="saved-books-btn"><SlBookOpen size={30} className="scale-in-center" /></button>
                </div>
            </Link>
        </div>
    );
}

export default Header;
