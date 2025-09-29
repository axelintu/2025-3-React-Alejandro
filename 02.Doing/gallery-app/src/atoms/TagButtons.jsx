import PropTypes from 'prop-types';

function TagButtons({handle, label}){
  return(
    <div 
      onClick={handle}
    > TAG:
      <span>{label}</span>
    </div>
    );
}

TagButtons.propTypes = {
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default TagButtons;