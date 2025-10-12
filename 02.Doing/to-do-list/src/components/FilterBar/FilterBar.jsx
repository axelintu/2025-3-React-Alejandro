import PropTypes from 'prop-types'
import './FilterBar.css';

function FilterBar ({filter, onFilterChange}) {
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
FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func
}
export default FilterBar;