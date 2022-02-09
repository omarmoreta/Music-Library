import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const AlbumView = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://itunes.apple.com/lookup?id=${id}&entity=song`;
      const response = await fetch(API_URL);
      const resData = await response.json();
      setAlbumData(resData.results);
    };
    fetchData();
  }, [id]);

  const albums = albumData.filter((entry) => entry.kind == "song");
  const renderSongs = albums.map((album, i) => {
    return <div key={i}>{album.trackName}</div>;
  });

  const navButtons = () => {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  };

  return (
    <div>
      {navButtons()}
      {albumData.length > 0 ? (
        <h2>{albumData[0].collectionName}</h2>
      ) : (
        <h2>
          <Spinner />
        </h2>
      )}
      {renderSongs}
    </div>
  );
};

export default AlbumView;
