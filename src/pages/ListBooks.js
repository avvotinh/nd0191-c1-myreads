import { useContext } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "../components/book/Bookshelf";
import { BooksContext } from "../context/BooksContext";

const bookshelves = [
  { id: "currentlyReading", name: "Currently Reading" },
  { id: "wantToRead", name: "Want to Read" },
  { id: "read", name: "Read" },
];

const ListBooks = () => {
  const { books, onUpdateBookShelf } = useContext(BooksContext);

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
              onUpdateBookShelf={onUpdateBookShelf}
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
