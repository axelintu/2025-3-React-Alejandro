import './TodoForm.css';
import PropTypes from 'prop-types';

function TodoForm ({onAdd}) {
  return (
    <div className="new-task">
      <input type="text" name="newTask" id="newTaskInput" className='new-task-input' />
      <button type="button"><span>Agregar nueva tarea</span></button>
    </div>
  )
}
TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}
export default TodoForm;