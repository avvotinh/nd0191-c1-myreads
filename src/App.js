import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./pages/ListBooks";
import SearchBooks from "./pages/SearchBooks";
import * as BooksAPI from "./api/BooksAPI";

const bookshelves = [
  { id: "currentlyReading", name: "Currently Reading" },
  { id: "wantToRead", name: "Want to Read" },
  { id: "read", name: "Read" },
];

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };

    getAllBooks();
  }, []);

  const onMoveBookHandler = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setBooks((prevBooks) => {
      if (shelf === "none") {
        return prevBooks.filter((prevBook) => prevBook.id !== book.id);
      }
      return prevBooks.map((prevBook) =>
        prevBook.id === book.id ? { ...prevBook, shelf } : prevBook
      );
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks
              books={books}
              bookshelves={bookshelves}
              onMoveBook={onMoveBookHandler}
            />
          }
        />
        <Route
          path="/search"
          element={<SearchBooks books={books} onMove={onMoveBookHandler} />}
        />
      </Routes>
    </div>
  );
}

export default App;
