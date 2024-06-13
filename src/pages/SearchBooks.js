import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../components/search/SearchInput";
import SearchResults from "../components/search/SearchResults";
import { BooksContext } from "../context/BooksContext";
import * as BooksAPI from "../api/BooksAPI";
import debounce from "../helpers/debounce";

const SearchBooks = () => {
  const { books, onUpdateBookShelf } = useContext(BooksContext);
  const [searchBooks, setSearchBooks] = useState([]);
  const onSearchHandler = debounce(async (query) => {
    try {
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
    } catch (err) {
      console.error("Error searching books: ", err);
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
      <SearchResults
        books={searchBooks}
        onUpdateBookShelf={onUpdateBookShelf}
      />
    </div>
  );
};

export default SearchBooks;
