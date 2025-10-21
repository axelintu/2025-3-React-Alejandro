import PropTypes from 'prop-types';
import './TodoForm.css';
import { useState } from 'react';

function TodoForm ({onAdd}) {
  const [newTask, setNewTask] = useState('');
  const [emptyTask, setEmptyTask] = useState(false);
  function validateNewTask (newTask) {
    // const newTaskTrimmed = newTask;
    if (newTask.trim()==='') {
      setEmptyTask(true);
    } else {
      setEmptyTask(false);
      onAdd(newTask.trim());
      setNewTask('');
    }
  }
  return (
    <div className="new-task" role="group">
      <input 
        aria-invalid={newTask.trim()===''}
        placeholder='Nueva tarea'
        type="text" 
        name="newTaskInput" 
        id="newTaskInput" 
        className='new-task-input'
        value={newTask} 
        onChange={(e) => {
          // console.log(e);
          setNewTask(e.target.value);
          }
        }/>
      <button
        disabled={newTask.trim()===''}
        type="button" 
        onClick={
        () => {
          validateNewTask(newTask.trim());
          // console.log(newTask)
        }}>
          <span>Agregar</span>
      </button>
      {emptyTask && <div role="alert">
        ⚠️ El título no puede estar vacío
      </div>}
    </div>
  )
}
TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};
export default TodoForm;