import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import Filter from "../Filter/Filter";
import ItemCard from "./ItemCard/ItemCard";
import * as actionTypes from '../../../store/actions';

class ProductGrid extends React.Component {

  componentDidMount() {
    axios.get("/api/products").then(({ data }) => {
      this.props.updateState(data)
    })
  }

  render() {
    return (
      <div>
        <Filter />

        <div className="ProductGrid">
          {this.props.items &&
            this.props.items.map(product => {
              return (
                <ItemCard
                  key={product.name}
                  src={require(`../../../assets/img${product.image}`)}
                  alt={product.name}
                  name={product.name}
                  price={product.price}
                  desc={product.description}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateState: (data) => dispatch({type: actionTypes.UPDATESTATE, data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
