import { Link } from "react-router-dom";

const SearchBooks = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <span className="close-search">Close</span>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default SearchBooks;
