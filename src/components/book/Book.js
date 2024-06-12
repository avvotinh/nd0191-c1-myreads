import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, shelf, onMoveBook }) => {
  const onShelfChangeHandler = (value) => {
    onMoveBook(book, value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <BookshelfChanger
            shelf={shelf}
            onShelfChange={onShelfChangeHandler}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : ""}
        </div>
      </div>
    </li>
  );
};

export default Book;
