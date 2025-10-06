import PropTypes from "prop-types";
import './AlbumCarousel.css';

function AlbumCarousel ({
  isOpen,
  album,
  onClose
}) {
  if(!isOpen) return null;
  return(
    <div className="album-carousel-overlay">
      <div className="album-carousel__container">
        <div className="album-carousel__photoviewer">
          <button
            onClick={
              () => { onClose() }
            }
          >Cerrar</button>

          <div className="album-carousel__title">
            {album.title}
          </div>
        </div>
        <div className="album-carousel__thumbnails">
          {
            album.images.map((image, index) => (
              <div className="album-carousel__thumbnail" key={index}><img src={image.url} alt={image.name} /></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
AlbumCarousel.propType = {
  isOpen: PropTypes.bool.isRequired,
  album: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired
      )
    }).isRequired
  ),
  onClose: PropTypes.func.isRequired
}
export default AlbumCarousel;