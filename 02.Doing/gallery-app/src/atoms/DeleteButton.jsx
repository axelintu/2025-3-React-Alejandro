import PropTypes from 'prop-types';

function DeleteButton({handle, disabled}){
  // console.log(handle);
  return(<button onClick={handle}>DELETE</button>);
}

DeleteButton.propTypes = {
  handle: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default DeleteButton;