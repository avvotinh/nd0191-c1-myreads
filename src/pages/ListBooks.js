import { Link } from "react-router-dom";
import Bookshelf from "../components/book/Bookshelf";

const ListBooks = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf />
          <Bookshelf />
          <Bookshelf />
        </div>
      </div>
      <div className="open-search">
        <Link to="search" className="open-search">
          <span>Add a book</span>
        </Link>
      </div>
    </div>
  );
};

export default ListBooks;
