import React from 'react'
import './Sort.css';

const Sort = (props) => {
    const handleSort = (e) => {
        props.setSort(e.target.dataset.id);
    }

  return (
    <div className="tabs">
        {
            props.sort.map(
                (e, i) => (
                    <div key={i} className={`tab ${e.checked ? 'active' : null}`} 
                        data-id={e.id} onClick={handleSort}>
                        {e.label}
                    </div>
                )
            )
        }
    </div>
  );
}

export default Sort;
