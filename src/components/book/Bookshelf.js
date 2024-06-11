import Book from "./Book";

const Bookshelf = ({ books, shelf, onMove }) => {
  const booksOnShelf = books.filter((item) => item.shelf === shelf.id);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((item) => (
            <Book key={item.id} book={item} shelf={shelf.id} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
