import PropTypes from 'prop-types';
import "./NavBar.css";

function NavBar({currentView, onViewChanges}){
  return (<nav className="navbar">
    <button disabled={currentView==='photos'} onClick={()=>onViewChanges('photos')} >Photos</button>
    <button disabled={currentView==='albums'} onClick={()=>onViewChanges('albums')} >Albums</button>
  </nav>);
}

NavBar.propTypes = {
  currentView: PropTypes.string.isRequired,
  onViewChanges: PropTypes.func.isRequired
}

export default NavBar;