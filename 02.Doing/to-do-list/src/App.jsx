import { useEffect, useState } from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import initialTasks from './data/initialTasks';
import StatusBar from './components/StatusBar';

function App() {
  // Filtro
  const allFilters = [
    { filterKey: 'all',
      label: 'Todas' 
    },
    {
      filterKey: 'active',
      label: 'Pendientes',
    },
    {
      filterKey: 'done',
      label: 'Completadas'
    }
  ];
  const [tasks,setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState(allFilters[0]);

  // Agregador de Tareas
  function createNewId() {
    let ids = tasks.map(task=>task.id).filter(Number);
    return (Math.max(...ids))+1;
  }
  function addNewTask (newTitle) {
    const id = createNewId();
    const newTask = {
      id: id,
      title: newTitle,
      done: false
    };
    setTasks((prevTasks)=>[...prevTasks, newTask]);
  }

  function useFilter(filter) {
    setFilter(filter);
  }
  
  function deleteTask(task) {
    console.log('deleted', task)
  }
  function toggleTask(taskId) {
    setTasks((prevTasks) => 
      prevTasks.map((task) => {
        return task.id === taskId ? {...task, done: !task.done } : task
      })
    )
  }

  return (
    <div className="App">
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <FilterBar 
      filter={filter}
      onFilterChange={useFilter}
      allFilters={allFilters} />
      <TodoForm 
        onAdd={addNewTask}
      ></TodoForm>
      <TodoList 
        todos={tasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask}
      ></TodoList>
      <StatusBar
        tasks={tasks}>
      </StatusBar>
    </div>
  );
}

export default App;
