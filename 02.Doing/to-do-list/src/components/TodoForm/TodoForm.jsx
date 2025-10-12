import './TodoForm.css';
import PropTypes from 'prop-types';

function TodoForm ({}) {
  return (
    <div className="new-task">
      <input type="text" name="newTask" id="newTaskInput" className='new-task-input' />
      <button type="button"><span>Agregar nueva tarea</span></button>
    </div>
  )
}
export default TodoForm;