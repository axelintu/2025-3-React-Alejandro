import PropTypes from 'prop-types';

function PlayButton({handle, isPlaying}){
  // console.log(handle);
  return(<button onClick={handle}>PLAY</button>);
}
PlayButton.propTypes = {
  handle: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool
}
export default PlayButton;