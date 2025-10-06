import PropTypes from 'prop-types';

function PlayButton({
  handle, 
  isPlaying = false, 
  disabled = false, 
  size = 'md',
  album
  }){
  // console.log(handle);
  
  return(
    <button 
      type="button"
      onClick={() => {
        handle(album);
      }}
      className={`btn-play btn-${size}`}
      disabled={disabled}
    >
      <span className='btn-icon'>{ isPlaying ? '⏸️' : '▶️'}</span>
    </button>
  );
}
PlayButton.propTypes = {
  handle: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  album: PropTypes.shape
}
export default PlayButton;