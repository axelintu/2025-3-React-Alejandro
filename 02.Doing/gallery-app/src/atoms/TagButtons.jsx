import PropTypes from 'prop-types';

function TagButtons({
  handle, 
  label,
  disabled=false,
  size="md"
  }){
  return(
    <button
      type="button" 
      onClick={handle}
      className={`tag tag-${size}`}
      disabled={disabled}
    > <span>#</span>
      <span>{label}</span>
    </button>
    );
}

TagButtons.propTypes = {
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  size: PropTypes.string
}

export default TagButtons;