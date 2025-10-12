import './App.css';
import FilterBar from './components/FilterBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import initialTasks from './data/initialTasks';

function App() {
  const completedCount = initialTasks.filter(task => task.completed).length;
  return (
    <div className="App">
      <header className="header">
        <h1>To Do List</h1>
      </header>

      <FilterBar></FilterBar>
      <TodoForm></TodoForm>
      <TodoList tasks={initialTasks}></TodoList>
      
      <div className='status'>
        { completedCount } de { initialTasks.length} Completadas
      </div>
    </div>
  );
}

export default App;
