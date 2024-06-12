import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const val = event.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder="Search by title, author, or ISBN"
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
