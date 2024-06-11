import { Link } from "react-router-dom";
import Bookshelf from "../components/book/Bookshelf";

const ListBooks = ({ books, bookshelves, onMove }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf) => (
            <Bookshelf
              key={shelf.id}
              shelf={shelf}
              books={books}
              onMove={onMove}
            />
          ))}
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
