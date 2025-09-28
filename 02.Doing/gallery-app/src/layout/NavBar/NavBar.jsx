import PropTypes from 'prop-types';
import "./NavBar.css";

function NavBar({currentView, onViewChanges}){
  return (<div className="navbar">
    <button disabled={currentView==='photos'} onClick={()=>onViewChanges('photos')} >Photos</button>
    <button disabled={currentView==='albums'} onClick={()=>onViewChanges('albums')} >Albums</button>

    <button disabled={currentView==='newPhoto'} onClick={()=>onViewChanges('newPhoto')} >Add photo</button>
    <button disabled={currentView==='newAlbum'} onClick={()=>onViewChanges('newAlbum')} >New Album</button>
  </div>);
}

NavBar.propTypes = {
  currentView: PropTypes.string.isRequired,
  onViewChanges: PropTypes.func.isRequired
}

export default NavBar;