import './StatusBar.css';

export default function StatusBar ({tasks}) {
  const pendientes = tasks.filter(task => task.done === false ).length;
  const hechas = tasks.filter(task => task.done === true).length;
  return (
    <div className='status'>
      { pendientes + ' pendientes / '} 
      { hechas + ' completadas'} 
    </div>
  )
}