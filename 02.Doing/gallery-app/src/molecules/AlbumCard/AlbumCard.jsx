import "./AlbumCard.css";
import DeleteButton from "../../atoms/DeleteButton";
import PlayButton from "../../atoms/PlayButton";
import TagButtons from "../../atoms/TagButtons";

export default function AlbumCard({album}){
  function handleTag () {
    console.log('clicked label');
  }
  function handleClick () {
    console.log('deleted album');
  }
  function handlePlay () {
    console.log('clicked play');
  } 
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
    <TagButtons label='Tag1' handle={handleTag} />
    <PlayButton handle={ handlePlay }/>
    <DeleteButton handle={ handleClick } />
  </div>);
}