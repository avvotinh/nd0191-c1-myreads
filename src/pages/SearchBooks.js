import { Link } from "react-router-dom";
import SearchInput from "../components/search/SearchInput";
import SearchResults from "../components/search/SearchResults";

const SearchBooks = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <span className="close-search">Close</span>
        </Link>
        <SearchInput />
      </div>
      <SearchResults />
    </div>
  );
};

export default SearchBooks;
