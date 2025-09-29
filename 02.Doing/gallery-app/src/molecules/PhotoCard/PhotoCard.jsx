import DeleteButton from "../../atoms/DeleteButton";
import TagButtons from "../../atoms/TagButtons";

export default function PhotoCard ({photo}) {
  function handleTag () {
    console.log('clicked label');
  }
  function handleClick () {
    console.log('deleted photo');
  }
  return(
    <div className="photo-card">
      <div className="photo-container"
        style={{
          backgroundImage: `url(${photo.url})`
        }}
      >
        <img src={photo.url} alt={photo.title} />
      </div>
      <h3>{photo.title}</h3>
      {<div className="photo-details">
        <p>{photo.description}</p>
        <p>{photo.location}</p>
        <TagButtons handle={handleTag} label="Tag1"></TagButtons>
        <DeleteButton handle={ handleClick } />
      </div>}
    </div>
  );
}