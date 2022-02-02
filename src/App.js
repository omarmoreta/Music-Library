import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`;
      const response = await fetch(
        "https://itunes.apple.com/search?term=the%20grateful%20dead"
      );
      const resData = await response.json();
      if (resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage("Not Found");
      }
      console.log(resData);
    };
    fetchData();
  }, [search]);

  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
