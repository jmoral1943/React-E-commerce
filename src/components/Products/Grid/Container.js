import React from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter/Filter';
import ItemCard from './ItemCard/ItemCard';

const ProductGrid = (props) => (
  <div>
    <Filter/>

    <div className="ProductGrid">
      {props.items &&
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
      }
    </div>
  </div>
);


const mapStateToProps = (state) => {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(ProductGrid);