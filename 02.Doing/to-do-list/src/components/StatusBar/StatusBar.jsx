import './StatusBar.css';

export default function StatusBar ({tasks}) {
  return (
    <div className='status'>
      { tasks.filter(task => task.done).length } de { tasks.length} Completadas
    </div>
  )
}