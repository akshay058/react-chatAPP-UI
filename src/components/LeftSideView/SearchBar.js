import React from "react";

// here we create search icon to search all available contacts by typing name....
function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="Search For Conversation"
        onChange={searchChange}
      ></input>
    </>
  );
}

// separated styles and using in tag for better readablitity....
const styles = {
  input: {
    borderRadius: "7px",
    width: "100%",
    backgroundColor: "#ececec",
    outline: "none",
    margin: "auto",
    padding: "5px",
    border: "1px solid #cccccc",
  },
};
export default SearchBar;
