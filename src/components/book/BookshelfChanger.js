import { useState } from "react";

const BookshelfChanger = ({ shelf, onShelfChange }) => {
  const [shelfSelected, setShelfSelected] = useState(shelf);

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setShelfSelected(value);
    onShelfChange(value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelfSelected} onChange={onChangeHandler}>
        <option value="moveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookshelfChanger;
