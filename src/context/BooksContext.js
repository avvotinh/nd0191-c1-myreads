import { useEffect, useState } from "react";
import { createContext } from "react";
import * as BooksAPI from "../api/BooksAPI";

export const BooksContext = createContext();
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const res = await BooksAPI.getAll();
      setBooks(res);
    } catch (err) {
      console.error("Error fetching books: ", err);
    }
  };

  const onUpdateBookShelf = async (book, shelf) => {
    try {
      await BooksAPI.update(book, shelf);

      setBooks((prevBooks) => {
        const bookExists = prevBooks.some((item) => item.id === book.id);
        if (!bookExists && shelf !== "none") {
          return [...prevBooks, { ...book, shelf }];
        }

        if (shelf === "none") {
          return prevBooks.filter((item) => item.id !== book.id);
        }

        return prevBooks.map((item) =>
          item.id === book.id ? { ...item, shelf } : item
        );
      });
    } catch (err) {
      console.error("Error update book shelf: ", err);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, onUpdateBookShelf }}>
      {children}
    </BooksContext.Provider>
  );
};
