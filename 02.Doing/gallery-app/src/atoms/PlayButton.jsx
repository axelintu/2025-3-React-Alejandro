import PropTypes from 'prop-types';

function PlayButton({
  handle, 
  isPlaying = false, 
  disabled = false, 
  size = 'md'
  }){
  return(
    <button 
      type="button"
      onClick={handle}
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
  size: PropTypes.string
}
export default PlayButton;