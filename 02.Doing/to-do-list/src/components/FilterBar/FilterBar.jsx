import { checkPropTypes, PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';
import './FilterBar.css';

const filterBarPropTypes = {
  filter: PropTypes.shape({
      filterKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
  }).isRequired,
  onFilterChange: PropTypes.func,
  allFilters: PropTypes.array.isRequired
};
function FilterBar ({filter, onFilterChange, allFilters}) {
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    let error = '';
    const props = { filter, onFilterChange, allFilters };
    // Custom error capturing
    const originalConsoleError = console.error;
    console.error = (msg) => {
      error = msg;
      originalConsoleError(msg);
    };
    checkPropTypes(filterBarPropTypes, props, 'prop', 'FilterBar');
    console.error = originalConsoleError;
    setErrorMsg(error);
  }, [filter, onFilterChange, allFilters]);

  return (
  <div className='filters'>
    <div>
      Viendo las tareas: {filter.label}
    </div>
    <nav className="filter-navigation">
    {
      allFilters.map((currentFilter,i)=>(
        <button 
          type="button" 
          key={i} 
          disabled={ filter.filterKey === currentFilter.filterKey } 
          onClick={()=> {onFilterChange(currentFilter)}}
        >
          {currentFilter.label}
        </button>
      ))}
    </nav>

    {errorMsg && (
      <div style={{color: 'red', marginTop: '1em'}}>
        {errorMsg}
      </div>
    )}
  </div>
  )
}
FilterBar.propTypes = filterBarPropTypes;

export default FilterBar;