import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './TodoList.css';

function TodoList ({todos, onToggle, onDelete}) {
  function showTasks(task, key) {
    return (
      <div key={key}>
        <TodoItem 
          todo={task} 
          onDelete={onDelete}
          onToggle={onToggle}
        ></TodoItem>
      </div>
    )
  }
  return (
    <div className="tasks">
      { todos.map(showTasks) }
    </div>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
}
export default TodoList;