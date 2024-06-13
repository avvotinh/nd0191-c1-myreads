import Book from "../book/Book";

const SearchResults = ({ books, onUpdateBookShelf }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ?? "none"}
            onUpdateBookShelf={onUpdateBookShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
