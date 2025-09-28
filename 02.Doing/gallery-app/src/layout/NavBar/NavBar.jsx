import "./NavBar.css";

export default function NavBar({currentView, onViewChanges}){
  return (<div className="navbar">
    <button disabled={currentView==='photos'} onClick={()=>onViewChanges('photos')} >Photos</button>
    <button disabled={currentView==='albums'} onClick={()=>onViewChanges('albums')} >Albums</button>

    <button disabled={currentView==='newPhoto'} onClick={()=>onViewChanges('newPhoto')} >Add photo</button>
    <button disabled={currentView==='newAlbum'} onClick={()=>onViewChanges('newAlbum')} >New Album</button>
  </div>);
}