import "./App.css";
import React, { useEffect, useState, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AlbumView from "./components/AlbumView";
import ArtistView from "./components/AlbumView";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { createResource as fetchData } from "./helper";
import Spinner from "./components/Spinner";

function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [data, setData] = useState(null);
  let [message, setMessage] = useState("Search for Music!");

  useEffect(() => {
    if (searchTerm) {
      setData(fetchData(searchTerm));
    }
  }, [searchTerm]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     document.title = `${searchTerm} Music`;
  //     const fetchData = async () => {
  //       const response = await fetch(
  //         `https://itunes.apple.com/search?term=${searchTerm}`
  //       );
  //       const resData = await response.json();
  //       if (resData.results.length > 0) {
  //         setData(resData.results);
  //       } else {
  //         setMessage("Not Found");
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  const renderGallery = () => {
    if (data) {
      return (
        <div>
          <Suspense fallback={<Spinner />}>
            <Gallery data={data} />
          </Suspense>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <SearchBar handleSearch={handleSearch} />
                {message}
                {renderGallery()}
              </div>
            }
          />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
