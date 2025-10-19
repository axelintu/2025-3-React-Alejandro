import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './TodoList.css';

function TodoList ({todos, onToggle, onDelete, onSave}) {
  function showTasks(task, key) {
    return (
      <div key={key}>
        <TodoItem 
          todo={task} 
          onDelete={onDelete}
          onToggle={onToggle}
          onSave={onSave}
        ></TodoItem>
      </div>
    )
  }
  return (
    todos.length ? (
      <div className="tasks">
        { todos.map(showTasks) }
      </div>
    ) : (
      <div className="tasks-empty">
        No hay tareas
      </div>
    )
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ).isRequired
}
export default TodoList;