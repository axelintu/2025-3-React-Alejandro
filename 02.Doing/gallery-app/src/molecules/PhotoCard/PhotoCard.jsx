import DeleteButton from "../../atoms/DeleteButton";
import TagButton from "../../atoms/TagButton";

export default function PhotoCard ({photo}) {
  function handleTag () {
    console.log('clicked label');
  }
  function handleClick () {
    console.log('deleted photo');
  }
  return(
    <div className="">
      <img src={photo.url} alt={photo.title} />
      <h3>{photo.title}</h3>
      <p>{photo.description}</p>
      <p>{photo.location}</p>
      <TagButton handle={handleTag} label="Tag1"></TagButton>
      <DeleteButton handle={ handleClick } />
    </div>
  );
}