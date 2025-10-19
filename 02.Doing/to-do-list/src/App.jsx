import { useEffect, useState } from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import initialTasks from './data/initialTasks';
import StatusBar from './components/StatusBar';

function App() {
  const getFromStorage = (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  };
  const saveToStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error saving to localStorage key "${key}":`, error);
    }
  };

  // Filtro
  const allFilters = [
    { filterKey: 'all',    label: 'Todas'      },
    { filterKey: 'active', label: 'Pendientes' },
    { filterKey: 'done',   label: 'Completadas'}
  ];
    const [tasks, setTasks] = useState(getFromStorage('reactToDoList-tasks',initialTasks));
  const [filter, setFilter] = useState(allFilters[0]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(()=> {
    switch (filter.filterKey) {
      case 'all':
        setFilteredTasks(tasks);
        break;
      case 'active':
        setFilteredTasks(tasks.filter(task=> task.done === false));
        break;
      case 'done':
        setFilteredTasks(tasks.filter(task=> task.done === true));
        break;
      default:
        setFilteredTasks(tasks);
    }
  },[tasks, filter]);

  useEffect(()=>{
    saveToStorage('reactToDoList-tasks', tasks)
  },[tasks]);

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
  const saveEdited = (id, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, title : newTitle } : task
    ));
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
        onSave={saveEdited}
      ></TodoList>
      <StatusBar
        tasks={tasks}>
      </StatusBar>
    </div>
  );
}

export default App;
