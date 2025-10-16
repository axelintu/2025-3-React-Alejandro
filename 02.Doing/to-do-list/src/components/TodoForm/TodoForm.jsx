import PropTypes from 'prop-types';
import './TodoForm.css';
import { useState } from 'react';

function TodoForm ({onAdd}) {
  const [newTask, setNewTask] = useState('');
  const [emptyTask, setEmptyTask] = useState(false);
  function validateNewTask (newTask) {
    const newTaskTrimmed = newTask.trim();
    if (newTaskTrimmed.trim()==='') {
      console.log('vacio', newTaskTrimmed, emptyTask);
      setEmptyTask(true);
    } else {
      setEmptyTask(false);
      onAdd(newTaskTrimmed);
    }
  }
  return (
    <div className="new-task">
      <div>
        NewTask: '{newTask.trim()}'
      </div>
      <input 
        type="text" 
        name="newTaskInput" 
        id="newTaskInput" 
        className='new-task-input'
        value={newTask.trim()} 
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
          <span>Agregar nueva tarea</span>
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