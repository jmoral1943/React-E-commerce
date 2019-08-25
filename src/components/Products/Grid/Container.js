/* eslint-disable no-fallthrough */
import React from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter/Filter';
import ItemCard from './ItemCard/ItemCard';
import * as actionTypes from '../../../store/actions';

const ProductGrid = (props) => (
  <div>
    <Filter 
      surfboardFilter={props.surfboardFilter}
      shoesFilter={props.shoesFilter}
      shirtsFilter={props.shirtsFilter}
      lessThan100Filter={props.lessThan100Filter}
      moreThan100Filter={props.moreThan100Filter}
    />

    <div className="ProductGrid">
      {props.items ?
        props.items.map((product) => {
          return <ItemCard 
            key={product.name}
            src={require(`../../../assets/img${product.image}`)}
            alt={product.name}
            name={product.name}
            price={product.price}
            desc={product.description}
            />
        })
        :null
      }
    </div>
  </div>
);


const mapStateToProps = (state) => {
  return {
    items: state.items
  };
}

const mapDispatchToProps = dispatch => {
  return {
    surfboardFilter: () => dispatch({type: actionTypes.SEARCH, tags:['surfboard']}),
    shoesFilter: () => dispatch({type: actionTypes.SEARCH, tags:['shoes']}),
    shirtsFilter: () => dispatch({type: actionTypes.SEARCH, tags:['shirts']}),
    lessThan100Filter: () => dispatch({type: actionTypes.SEARCH, tags:['lessThan100']}),
    moreThan100Filter: () => dispatch({type: actionTypes.SEARCH, tags:['moreThan100']}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);