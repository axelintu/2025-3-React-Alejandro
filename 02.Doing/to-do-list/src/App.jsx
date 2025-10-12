import './App.css';
import initialTasks from './data/initialTasks';

function App() {
  function deleteTask(task) {
    console.log('deleted', task)
  }
  const completedCount = initialTasks.filter(task => task.completed).length;
  function showTasks(task, key) {
    return (
      <div key={key}>
        <div>
          <input type="checkbox" defaultChecked={task.completed}></input>
          <span>{task.id}</span> - 
          <span>{task.title}</span>
          <button 
            type='button' 
            aria-label='delete' 
            onClick={() => deleteTask(task)}
          >
            ❌<span style={{ fontSize: 0 }}>Delete</span>
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <div className='filters'>
        <nav className="filter-navigation">
          <ul>
            <li><button type="button">Todas</button></li>
            <li><button type="button">Pendientes</button></li>
            <li><button type="button">Completadas</button></li>
          </ul>
        </nav>
      </div>
      <div className="new-task">
        <input type="text" name="newTask" id="newTaskInput" className='new-task-input' />
        <button type="button"><span>Agregar nueva tarea</span></button>
      </div>
      <div className="tasks">
        { initialTasks.map(showTasks) }
      </div>
      <div className='status'>
        { completedCount } de { initialTasks.length} Completadas
      </div>
    </div>
  );
}

export default App;
