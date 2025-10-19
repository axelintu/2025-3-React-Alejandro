import PropTypes from 'prop-types';
import './TodoItem.css';
import { useState } from 'react';

function TodoItem({
  todo,
  onDelete,
  onToggle,
  onSave,
  animatingDelete,
  startDeleteAnimation,
  endDeleteAnimationEnd,
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
    <div className={`task-item task-editing`}>
      <input
        type="text"
        name={todo.id}
        id={todo.id}
        defaultValue={todo.title}
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
      <button
        type="button"
        aria-label="delete"
        disabled={newTitle.trim() === ""}
        onClick={() => {
          saveEdit(todo.id, newTitle);
        }}
      >
        Guardar
      </button>
      {emptyTitle && <div role="alert">⚠️ El título no puede estar vacío</div>}
    </div>
  ) : (
    <div
      className={`task-item`}
      onTransitionEnd={() => {
        endDeleteAnimationEnd(todo.id);
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        id={todo.id}
      ></input>
      <label
        htmlFor={todo.id}
        onDoubleClick={editInput}
        className={todo.done ? "text-done" : ""}
      >
        <span>{todo.id}</span> -<span>{todo.title}</span>
      </label>
      <button
        type="button"
        aria-label="delete"
        onClick={() => startDeleteAnimation(todo.id)}
      >
        ❌<span style={{ fontSize: 0 }}>Borrar</span>
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
