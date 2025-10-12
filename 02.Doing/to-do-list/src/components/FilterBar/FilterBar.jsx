import PropTypes from 'prop-types'
import './FilterBar.css';

function FilterBar ({}) {
  return (
  <div className='filters'>
    <nav className="filter-navigation">
      <ul>
        <li><button type="button">Todas</button></li>
        <li><button type="button">Pendientes</button></li>
        <li><button type="button">Completadas</button></li>
      </ul>
    </nav>
  </div>
  )
}
export default FilterBar;