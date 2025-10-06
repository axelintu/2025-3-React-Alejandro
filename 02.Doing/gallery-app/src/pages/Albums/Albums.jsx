import PropTypes from "prop-types";
// import albumsData from "../../data/albumsData";
import AlbumCard from "../../molecules/AlbumCard";
import "./Albums.css";

export default function Albums ({
  albums,
  onPlayAlbum,
  setCurrentAlbum
  }) {
  return(
    albums.map((album, i)=> {
      return (
        <AlbumCard 
          album={album} 
          key={i}
          handlePlay={onPlayAlbum}
          setCurrentAlbum={setCurrentAlbum}
        />
      )
    })
  )
}
Albums.propTypes = {
  albumsData: PropTypes.array.isRequired,
  onPlayAlbum: PropTypes.func
}