import PropTypes from 'prop-types';
import albumsData from "../../data/albumsData";
import photosData from "../../data/photosData";
import "./StatusBar.css";

function StatusBar({currentView}){
  const statusText = ()=>{
    switch (currentView) {
      case 'photos':
        return photosData.length + ' fotos';
      case 'albums':
        return albumsData.length + ' albums';
      default:
        return '';
    }
  }
  return (<div className="statusbar">
    <h2>Status Bar</h2>
    <span>Vista actual {statusText()}</span>
    </div>);
}

StatusBar.propTypes = {
  currentView: PropTypes.string.isRequired
}

export default StatusBar;