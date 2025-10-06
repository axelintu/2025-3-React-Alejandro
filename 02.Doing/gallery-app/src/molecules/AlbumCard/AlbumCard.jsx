import PropTypes from 'prop-types';
import DeleteButton from "../../atoms/DeleteButton";
import PlayButton from "../../atoms/PlayButton";
import TagButtons from "../../atoms/TagButtons";
import "./AlbumCard.css";

function AlbumCard({
  album,
  handlePlay
}){
  function handleTag () {
    console.log('clicked label');
  }
  function handleDelete (album) {
    console.log('deleted album',album);
  }
  function firstFourPhotos (photos) {
    return photos.filter((item, idx) => idx < 4);
  };
  return(
  <div className="album-card">
    {/* {album.title} */}
    <div className={'album-with-' + album.images.length + ' album-previews'}>
    {album && album.images.length>0 ? 
      firstFourPhotos(album.images).map((img,i)=>{
        return <img key={i} src={img.url} alt={img.name}/>
      }) :
      <p>No hay imágenes para mostrar en este album</p>}
    </div>
    <div>
      <h3>{album.title}</h3>
      <p>{album.description}</p>
      <TagButtons label='Tag1' handle={handleTag} />
      <PlayButton handle={ handlePlay } album={album} />
      <DeleteButton handle={ handleDelete } album={album} />
    </div>
  </div>);
}
AlbumCard.propTypes = {
  album: PropTypes.shape({
    id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url:PropTypes.string.isRequired,
        name:PropTypes.string
      })
    )
  }).isRequired,
  handlePlay: PropTypes.func
}

export default AlbumCard;