import React from 'react'
import './Filter.css';
import FilterItem from './FilterItem/FilterItem';
import { changeFilterActionCreator, setSortActionCreator } from '../../store/actionCreators'
import { connect } from 'react-redux'

const Filter = (props) => {
  return (
    <div className="filter-area">
      <div className="filter">
        <h1 className="filter__title title">Количество пересадок</h1>
        <div className="filter__items">
            {
                props.filters.map(
                    elem => (
                      <FilterItem key={elem.id} {...elem}
                      changeFilter={props.changeFilter} setSort={props.setSort}
                      sortId={props.sortId}/>
                    )
                )
            }
        </div>
      </div>
    </div>   
  );
}

let mapStateToProps = state => ({
    filters: state.filters,
    sortId: state.sort.find(s => s.checked).id
})

export default connect(mapStateToProps, {
    changeFilter: changeFilterActionCreator,
    setSort: setSortActionCreator
})(Filter);
