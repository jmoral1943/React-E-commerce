import React from 'react';

let lessThan100Filter = false;
let moreThan100Filter = false;

const Filter = (props) => {
  

  const disableButton = (x) => {

    if (x === 'lessThan100') {
      let button = document.querySelector('button[name="moreThan100"]');
      lessThan100Filter = !lessThan100Filter;

      if (lessThan100Filter) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    } else if (x === 'moreThan100') {
      document.querySelector('button[name="moreThan100"]').disabled = false;
      let button = document.querySelector('button[name="lessThan100"]');

      moreThan100Filter = !moreThan100Filter;

      if (moreThan100Filter) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    }
  };

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
        
        <button name="lessThan100" type="button" className="Filter__button" onClick={(e) => {
          e.target.classList.toggle("Active")
          disableButton('lessThan100')
          return props.lessThan100Filter();
        }}>Less than $100</button>

        <button name="moreThan100" type="button" className="Filter__button" onClick={(e) => {
          e.target.classList.toggle("Active")
          disableButton('moreThan100')
          return props.moreThan100Filter();
        }}>More than $100</button>
      </div>
    </div>
  );
}

export default Filter;