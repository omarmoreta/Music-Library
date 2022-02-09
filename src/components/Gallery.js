import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  const data = props.data.result.read();

  const display = data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });

  return <div>{display}</div>;
};

export default Gallery;
