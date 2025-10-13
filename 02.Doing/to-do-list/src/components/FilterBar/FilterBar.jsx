import { checkPropTypes, PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import './FilterBar.css';

const filterBarPropTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'done']).isRequired,
  onFilterChange: PropTypes.func,
  allFilters: PropTypes.object.isRequired
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
      Viendo las tareas: {allFilters[filter]}
    </div>
    <nav className="filter-navigation">
    {
      Object.keys(allFilters).map((keyName,i)=>(
        <button 
          type="button" 
          key={i} 
          disabled={ filter === keyName } 
          onClick={()=> {onFilterChange(keyName)}}
        >
          {allFilters[keyName]}
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