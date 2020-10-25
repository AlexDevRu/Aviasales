import React from 'react'
import './FilterItem.css';
import {transplants} from '../../../utils/utils'

const FilterItem = (props) => {
  const handleChange = (e) => {
    props.changeFilter(props.id, e.target.checked);
    props.setSort(props.sortId);
  }

  return (
    <label class="control control--checkbox">
      {transplants(props.count)}
      <input type="checkbox" checked={props.checked} onChange={handleChange}/>
      <div class="control__indicator"></div>
    </label>
  );
}

export default FilterItem;
