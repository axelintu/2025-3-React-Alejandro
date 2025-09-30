import PropTypes from 'prop-types';
import "./DeleteButton.css";

function DeleteButton({handle, disabled}){
  // console.log(handle);
  return(
  <div
    onClick={handle}
    disabled={disabled}
    className='delete-button'
    >
      <span className="delete-text">
        DELETE
      </span>
      <span className="delete-icon">
        🗑️
      </span>
    </div>
  );
}

DeleteButton.propTypes = {
  handle: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default DeleteButton;