import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

const Filter = (props) => (
  <div className="Filter">
    <h2 className="Filter__header">Filters</h2>
    <div className="Filter__filters">
      { props.options &&
        props.options.map((option) => (
          <button
            key={option.tag}
            name={option.tag} 
            type="button" 
            className="Filter__button" 
            onClick={(e) => {
              e.target.classList.toggle('Active');
              return props.search(option.tag)
            }}
          >{option.label}</button>
        ))
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    options : state.filter.options
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (tag) => dispatch({type: actionTypes.SEARCH, tag})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);