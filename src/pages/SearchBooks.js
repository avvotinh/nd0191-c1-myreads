import { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../components/search/SearchInput";
import SearchResults from "../components/search/SearchResults";
import * as BooksAPI from "../api/BooksAPI";
import debounce from "../helpers/debounce";

const SearchBooks = ({ books, onMoveBook }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const onSearchHandler = debounce(async (query) => {
    if (query.length > 0) {
      const res = await BooksAPI.search(query);

      if (res.error) {
        setSearchBooks([]);
      } else {
        const results = res.reduce((accumulator, currentValue) => {
          const book = books.find((item) => item.id === currentValue.id);
          if (book) {
            currentValue.shelf = book.shelf;
          }
          accumulator.push(currentValue);
          return accumulator;
        }, []);

        setSearchBooks(results);
      }
    } else {
      setSearchBooks([]);
    }
  }, 300);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <span className="close-search">Close</span>
        </Link>
        <SearchInput onSearch={onSearchHandler} />
      </div>
      <SearchResults books={searchBooks} onMoveBook={onMoveBook} />
    </div>
  );
};

export default SearchBooks;
