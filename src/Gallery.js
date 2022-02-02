import GalleryItem from "./GalleryItem";
import { DataContext } from "./context/DataContext";
import { useContext } from "react";

function Gallery() {
  const data = useContext(DataContext);

  const display = data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });
  return <div>{display}</div>;
}

export default Gallery;
