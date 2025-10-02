import PropTypes from 'prop-types';
import "./DeleteButton.css";

function DeleteButton({ handle, disabled, size, children }){
  // console.log(handle);
  return(
  <div
    onClick={handle}
    disabled={disabled}
    className={`delete-button btn-${size} `}
    >
      { children || (<span className='btn-icon'>🗑️</span>)}
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
  disabled: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node
}

DeleteButton.defaultProps = {
  disabled: false,
  size: 'md',
  children: null
}

export default DeleteButton;