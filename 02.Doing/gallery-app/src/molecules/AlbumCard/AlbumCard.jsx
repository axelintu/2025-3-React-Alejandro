import "./AlbumCard.css";
import DeleteButton from "../../atoms/DeleteButton";
import PlayButton from "../../atoms/PlayButton";
import TagButton from "../../atoms/TagButton";

export default function AlbumCard({album}){
  return(
  <div className="albumCard">
    {album.title}
    <div className="album-previews">
    {album && album.images.length>0 ? 
      album.images.map((img,i)=>{
        return <img key={i} src={img.url} alt={img.name}/>
      }) :
      <p>No hay imágenes para mostrar en este album</p>}
    </div>
    <h3>{album.title}</h3>
    <p>{album.description}</p>
    <TagButton/>
    <PlayButton/>
    <DeleteButton/>
  </div>);
}