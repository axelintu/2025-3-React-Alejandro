import DeleteButton from "../../atoms/DeleteButton";
import TagButton from "../../atoms/TagButton";

export default function PhotoCard ({photo}) {
  return(
    <div className="">
      <img src={photo.url} alt={photo.title} />
      <h3>{photo.title}</h3>
      <p>{photo.description}</p>
      <p>{photo.location}</p>
      <TagButton></TagButton>
      <DeleteButton></DeleteButton>
    </div>
  );
}