import PropTypes from 'prop-types';

function TagButton({handle, label}){
  return(
    <div 
      onClick={handle}
    > TAG:
      <p>{label}</p>
    </div>
    );
}

TagButton.propTypes = {
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default TagButton;