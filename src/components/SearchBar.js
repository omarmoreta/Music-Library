import { useState } from "react";

function SearchBar(props) {
  // let [searchTerm, setSearchTerm] = useState("");

  return (
    // <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
    <form>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
