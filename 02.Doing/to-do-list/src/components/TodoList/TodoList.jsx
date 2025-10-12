import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './TodoList.css';

function TodoList ({tasks}) {
  function deleteTask(task) {
    console.log('deleted', task)
  }
  function showTasks(task, key) {
    return (
      <div key={key}>
        <TodoItem task={task} onDelete={deleteTask}></TodoItem>
      </div>
    )
  }
  return (
    <div className="tasks">
      { tasks.map(showTasks) }
    </div>
  )
}
export default TodoList;