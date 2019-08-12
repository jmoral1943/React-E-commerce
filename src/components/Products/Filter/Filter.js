import React from 'react';

const Filter = (props) => {
  return (
    <div className="Filter">
      <h2 className="Filter__header">Filters</h2>

      <div className="Filter__filters">
        <button type="button" className="Filter__button" onClick={(e) => {
          e.target.classList.toggle("Active");
          return props.surfboardFilter();
        }}>Surfboards</button>

        <button type="button" className="Filter__button" onClick={(e) => {
          e.target.classList.toggle("Active")
          return props.shoesFilter();
        }}>Shoes</button>

        <button type="button" className="Filter__button" onClick={(e) => {
          e.target.classList.toggle("Active")
          return props.shirtsFilter();
        }}>Shirts</button>
        
        <button type="button" className="Filter__button" onClick={(e) => {
          e.target.classList.toggle("Active")
          return props.lessThan100Filter();
        }}>Less than $100</button>

        <button type="button" className="Filter__button" onClick={(e) => {
          e.target.classList.toggle("Active")
          return props.moreThan100Filter();
        }}>More than $100</button>
      </div>
    </div>
  );
}

export default Filter;