import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({todo, onDelete, onToggle}) {
  return(
  <div>
    <input 
      type="checkbox" 
      defaultChecked={todo.done}
      onClick={onToggle}
      id={todo.id}
    ></input>
    <label htmlFor={todo.id}>
      <span>{todo.id}</span> - 
      <span>{todo.title}</span>
    </label>
    <button 
      type='button' 
      aria-label='delete' 
      onClick={() => onDelete(todo)}
    >
      ❌<span style={{ fontSize: 0 }}>Delete</span>
    </button>
  </div>
  )
}
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}
export default TodoItem;
