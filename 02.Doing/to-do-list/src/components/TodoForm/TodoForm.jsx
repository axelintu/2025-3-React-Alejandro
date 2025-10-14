import { PropTypes } from 'prop-types';
import './TodoForm.css';
import { useState } from 'react';

function TodoForm ({onAdd}) {
  const [newTask, setNewTask] = useState('');
  const [emptyTask, setEmptyTask] = useState(false);
  function validateNewTask (newTask) {
    if (newTask==='') {
      console.log('vacio', newTask, emptyTask);
      setEmptyTask(true);
    } else {
      setEmptyTask(false);
    }
  }
  return (
    <div className="new-task">
      <div>
        NewTask: '{newTask}'
      </div>
      <input 
        type="text" 
        name="newTaskInput" 
        id="newTaskInput" 
        className='new-task-input'
        value={newTask} 
        onChange={(e) => {
          console.log(e);
          
          setNewTask(e.target.value)
          }
        }/>
      <button
        disabled={newTask===''}
        type="button" 
        onClick={
        () => {
          validateNewTask(newTask);
          // console.log(newTask)
        }}>
          <span>Agregar nueva tarea</span>
      </button>
      {emptyTask && <div>
        ⚠️ El título no puede estar vacío
      </div>}
    </div>
  )
}
TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};
export default TodoForm;