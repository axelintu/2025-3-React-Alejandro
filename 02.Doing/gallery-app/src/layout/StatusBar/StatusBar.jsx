import PropTypes from 'prop-types';
import NewButton from '../../atoms/NewButton';
import albumsData from "../../data/albumsData";
import photosData from "../../data/photosData";
import "./StatusBar.css";

function StatusBar({currentView,onViewChanges}){
  const showAvailableActions = ()=> {
    switch (currentView) {
      case 'photos':
        return <NewButton label="New Photo" handleClick={() => onViewChanges('newPhoto')} ></NewButton>;
      case 'albums':
        return <NewButton label="New Album" handleClick={() => onViewChanges('newAlbum')} ></NewButton>;
      default:
        return '';
    }
  }
  const statusText = ()=>{
    switch (currentView) {
      case 'photos':
        return photosData.length ? photosData.length + ' fotos total' : 'Vacío';
      case 'albums':
        return albumsData.length ? albumsData.length + ' albums' : 'Vacío';
      default:
        return '';
    }
  }
  return (<div className="statusbar">
      <div className='status-text'>{statusText()}</div>
      <div className='status-actions'>
        {showAvailableActions()}
      </div>
    </div>
  );
}

StatusBar.propTypes = {
  currentView: PropTypes.string.isRequired,
  onViewChanges: PropTypes.func.isRequired
}

export default StatusBar;