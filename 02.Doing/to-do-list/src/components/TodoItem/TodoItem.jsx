import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({task, onDelete}) {
  return(
  <div>
    <input type="checkbox" defaultChecked={task.completed}></input>
    <span>{task.id}</span> - 
    <span>{task.title}</span>
    <button 
      type='button' 
      aria-label='delete' 
      onClick={() => onDelete(task)}
    >
      ❌<span style={{ fontSize: 0 }}>Delete</span>
    </button>
  </div>
  )
} 
export default TodoItem;
