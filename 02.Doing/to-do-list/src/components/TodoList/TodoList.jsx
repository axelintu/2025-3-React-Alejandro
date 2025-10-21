import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './TodoList.css';

function TodoList ({todos, onToggle, onDelete, onSave}) {
  const [localTasks, setLocalTasks] = useState(todos);

  useEffect(()=>{
    setLocalTasks(todos)
  },[todos])
  
  const setDeleting = (item) => {
    const toDeleteItem = todos.map(task =>
      task.id === item.id ? {...task, deleting : true } : task
    );
    setLocalTasks(toDeleteItem);
    onDelete(item);
  }

  return (
    todos.length ? (
      <div className="tasks">
        { localTasks.map((task, key) => {
    return (
      <div
        key={key}
        className={`task-item-container new-item ${
          task.deleting  ? " deleting" : ""
        } `}
      >
        <TodoItem
          todo={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onSave={onSave}
          setDeleting={setDeleting}
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