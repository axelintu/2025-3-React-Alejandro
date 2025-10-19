import { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './TodoList.css';

function TodoList ({todos, onToggle, onDelete, onSave}) {
  const [animatingDelete, setAnimatingDelete] = useState([]);
  const startDeleteAnimation = (id) => {
    setAnimatingDelete([...animatingDelete, id]);
    console.log(animatingDelete);
    console.log(animatingDelete.includes(id));
    
    // onDelete(todo);
  }
  const endDeleteAnimationEnd = (todo) => {
    console.log(animatingDelete);
    onDelete(todo);
    setAnimatingDelete(animatingDelete.filter((animatingId) => animatingId !== todo.id));
  }

  return (
    todos.length ? (
      <div className="tasks">
        { todos.map((task, key) => {
    return (
      <div
        key={key}
        className={`task-item-container new-item ${
          animatingDelete.includes(task.id) ? " deleting" : ""
        } `}
        onAnimationEnd={()=>{
          endDeleteAnimationEnd(task)
        }}
      >
        <TodoItem
          todo={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onSave={onSave}
          startDeleteAnimation={startDeleteAnimation}
          endDeleteAnimationEnd={endDeleteAnimationEnd}
          animatingDelete={animatingDelete}
        ></TodoItem>
      </div>
    );
  }) }
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