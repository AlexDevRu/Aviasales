import React from 'react'
import './FilterItem.css';
import {transplants} from '../../../utils/utils'

const FilterItem = (props) => {
  const handleChange = (e) => {
    props.changeFilter(props.id, e.target.checked);
    props.setSort(props.sortId);
  }

  return (
    <div className="filter-item">
        <input id={`filter-checkbox-${props.id}`} className="filter__checkbox" 
        type="checkbox" checked={props.checked} onChange={handleChange}/>
        <label htmlFor={`filter-checkbox-${props.id}`}>
            <p>{transplants(props.count)}</p>
        </label>
    </div>
  );
}

export default FilterItem;
