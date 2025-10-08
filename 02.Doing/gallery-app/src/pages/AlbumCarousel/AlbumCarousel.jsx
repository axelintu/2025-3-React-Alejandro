import PropTypes from "prop-types";
import './AlbumCarousel.css';
import { BUTTON_SIZES } from "../../utils/constants";
import Button from "../../atoms/Button";
import { useEffect, useState } from "react";

function AlbumCarousel ({
  isOpen,
  album,
  onClose
}) {  
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  useEffect(()=> {
    if (isOpen) {
      setcurrentImageIndex(0);
    }
  }, [isOpen]);
  if(!isOpen || !album || !album.images || album.images.length===0) return null;


  // Funcionalidades de navegacion definidas
  const goToPrevious = () => {
    setcurrentImageIndex(
      (prev) => prev === 0 ? album?.images?.length -1 : prev -1
    );
  }
  const goToNext = () => {
    setcurrentImageIndex(
      (prev) => prev === album?.images?.length -1 ? 0 : prev +1
    );
  }

  const goToImage = (index) => {
    setcurrentImageIndex(index);
  }

  const currentImage = album.images[currentImageIndex];

  return(
    <div className="carousel-modal-overlay" onClick={ ()=> {  } }>
      <div className="carousel-modal">
        <div className="carousel-header">
          <h2 className="carousel-album-title">
            <span className="carousel-play-icon"></span>
            <span className="carousel-title">
              {album.title}
            </span>
          </h2>
          <p className="carousel-album-description">{album.description}</p>
          <Button className="carousel-close-button"
            onClick={onClose}
            variant="secondary"
            size={BUTTON_SIZES.MEDIUM}
            ariaLabel="Cerrar carrusel">x</Button>
        </div>
          {/* <button
            onClick={
              () => { onClose() }
              }
              >Cerrar</button> */}
          {/* Area principal de la imagen */}
        <div className="carousel-main">
          <Button
            className="carousel-nav-button carusel-nav-button--prev"
            onClick={goToPrevious}
            variant="secondary"
            size={BUTTON_SIZES.MEDIUM}
            ariaLabel="Imagen anterior"
          >
            {" "}
            ‹{" "}
          </Button>
          <div className="carousel-image-container">
            <img 
            src={currentImage.url} 
              alt={currentImage.name || `Imagen ${currentImage.index + 1}`}
              className="carousel-image" />
            <div className="carousel-image-info">
              <h3 className="carousel-image-title">{currentImage.name}</h3>
              <p className="carousel-image-counter">{currentImageIndex + 1} de {album.images.length}</p>
            </div>
          </div>
          <Button
            className="carousel-nav-button carousel-nav-button--next"
            onClick={goToNext}
            variant="secondary"
            size={BUTTON_SIZES.MEDIUM}
            ariaLabel="Imagen siguiente"
          >
            {" "}
            ›{" "}
          </Button>

          {/* Thumbnails */}
          {album?.images?.length > 1 && (
            <div className="carousel-thumbnails">
              <div className="carousel-thumbnails-container">
                {album.images.map((image,index)=>(
                  <Button 
                  key={index} 
                  className={`carousel-thumbnail ${
                    index === currentImageIndex 
                    ? "carousel-thumbnail--active" 
                    :""
                  }`}
                  onClick={ ()=> goToImage(index) }
                  >
                    <img 
                    className="carousel-thumbnail-image" 
                    src={image.url} 
                    alt="{image.name}" />
                  </Button>
                ))}
              </div>
            </div>
          )}
        {/* <div className="album-carousel__thumbnails">
          {
            album.images.map((image, index) => (
              <div className="album-carousel__thumbnail" key={index}><img src={image.url} alt={image.name} /></div>
            ))
          }
        </div> */}
        </div>
      </div>
    </div>
  );
}
AlbumCarousel.propType = {
  isOpen: PropTypes.bool.isRequired,
  album: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          name: PropTypes.string
        }).isRequired
      )
    }).isRequired,
  onClose: PropTypes.func.isRequired
}
export default AlbumCarousel;