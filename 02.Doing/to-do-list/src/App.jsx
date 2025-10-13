import { useState } from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import initialTasks from './data/initialTasks';

function App() {

  // Filter functionality
  const [filter, setFilter] = useState('aaba');
  const allFilters = {
    all: 'Todas',
    active: 'Pendientes',
    done: 'Completadas'
  }
  // Status Count functionality
  const completedCount = initialTasks.filter(task => task.completed).length;
  function addItem () {
    console.log('added task')
  }
  function deleteTask(task) {
    console.log('deleted', task)
  }
  function toggleCompleted() {
    console.log('toggled completed')
  }

  return (
    <div className="App">
      <header className="header">
        <h1>To Do List</h1>
      </header>

      <FilterBar 
      filter={filter}
      onFilterChange={setFilter}
      allFilters={allFilters} />
      <TodoForm 
        onAdd={addItem}
      ></TodoForm>
      <TodoList 
        todos={initialTasks} 
        onToggle={toggleCompleted} 
        onDelete={deleteTask}
      ></TodoList>
      <div className='status'>
        { completedCount } de { initialTasks.length} Completadas
      </div>
    </div>
  );
}

export default App;
