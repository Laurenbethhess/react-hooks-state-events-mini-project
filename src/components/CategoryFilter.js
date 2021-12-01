import React from "react";
import {v4 as uuidv4} from 'uuid'

function CategoryFilter( {categories, handleClick, filter}) {

  const renderButtons = () => {
    return categories.map(category => {
      const className = category === filter ? 'selected' : null
      return <button className={className} onClick={handleClick} key={uuidv4}>{category}</button>
    })
      
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
