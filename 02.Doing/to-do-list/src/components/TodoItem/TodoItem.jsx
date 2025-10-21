import PropTypes from 'prop-types';
import './TodoItem.css';
import { useState } from 'react';

function TodoItem({
  todo,
  onToggle,
  onSave,
  setDeleting
}) {
  const [editingTask, setEditingTask] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [emptyTitle, setEmptyTitle] = useState(false);
  
  const validateIfEmpty = (newTitle) => {
    const newTitleTrimmed = newTitle.trim();
    if (newTitleTrimmed === "") {
      setEmptyTitle(true);
    } else {
      setEmptyTitle(false);
    }
  };
  const editInput = (e) => {
    setEditingTask(true);
    setNewTitle(todo.title);
  };
  const saveEdit = (id, title) => {
    onSave(id, title);
    setEditingTask(false);
  };
  const handleChange = (e) => {
    setNewTitle(e.target.value);
    validateIfEmpty(e.target.value);
  };
  return editingTask ? (
    <div className={`task-item task-editing`} role="group">
      <span 
      className={`task-checkbox${todo.done ? ' checked': ''}`}>
        <input
          type="checkbox"
          disabled={true}
          checked={todo.done}
          id={`non-edit-${todo.id}`}
        ></input>
      </span>
      <input
        className='task-label'
        type="text"
        name={todo.id}
        id={todo.id}
        aria-invalid={newTitle.trim()===''}
        // defaultValue={todo.title}
        value={newTitle}
        onChange={handleChange}
        onKeyDown={(e) => {
          switch (e.key) {
            case "Escape":
              setEditingTask(false);
              setEmptyTitle(false);
              return;
            case "Enter":
              if (emptyTitle === false) {
                saveEdit(todo.id, newTitle);
              }
              break;
            default:
              break;
          }
        }}
      />
      {emptyTitle && <small 
        className='task-new-alert' 
        role="alert"
        aria-invalid='true'
        ><span>⚠️</span> El título no puede estar vacío</small>}
      <button
        className='task-edit-save'
        type="button"
        aria-label="delete"
        disabled={newTitle.trim() === ""}
        onClick={() => {
          saveEdit(todo.id, newTitle);
        }}
      >
        Guardar
      </button>
    </div>
  ) : (
    <div
      className={`task-item`}
    >
      <label 
      className={`task-checkbox${todo.done ? ' checked': ''}`}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          id={todo.id}
        ></input>
      </label>
      <label
        
        htmlFor={todo.id}
        onDoubleClick={editInput}
        className={`task-label ${todo.done ? "text-done" : ""}`}
      >
        <span>{todo.title}</span>
      </label>
      <button
      className='task-delete-button'
        type="button"
        aria-label="delete"
        onClick={() => {
          setDeleting(todo)
        }}
      >
        &times;<span style={{ fontSize: 0 }}>Borrar</span>
      </button>
    </div>
  );
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
