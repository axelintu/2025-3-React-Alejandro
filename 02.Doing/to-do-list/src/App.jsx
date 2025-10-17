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
  const filterTasks = () => {
    switch (filter.filterKey) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter(task=> task.done === false);
      case 'done':
        return tasks.filter(task=> task.done === true);
      default:
        return tasks;
    }
  }
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState(allFilters[0]);
  const [filteredTasks, setFilteredTasks] = useState(filterTasks());
  useEffect(()=> {
    setFilteredTasks(filterTasks);
  },[tasks, filter])

  // Agregador de Tareas
  function createNewId() {
    let ids = tasks.map(task=>task.id).filter(Number);
    return ids.length === 0 ? 1 : (Math.max(...ids))+1;
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
    const newTasks = tasks.filter(origTask => origTask.id !== task.id);    
    setTasks(newTasks);

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
        todos={filteredTasks} 
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
