import Data from '../data/products.json';
import * as actionTypes from './actions';

const initialState = {
  items: Data.products,
  products: Data.products,
  filter: {
    options: [
      {
        tag: 'surfboards',
        label: 'Surfboards',
      },
      {
        tag: 'shoes',
        label: 'Shoes',
      },
      {
        tag: 'shirts',
        label: 'Shirts',
      },
      {
        tag: 'lessThan100',
        label: 'Less than $100',
      },
      {
        tag: 'moreThan100',
        label: 'More than $100',
      },
    ],
    tags: [],
  },
}


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SEARCH :
      console.log(action.tags)
      return {
        ...state,
        filter: {
          ...state.filter,
          tags: action.tags,
        },
        items: state.products.filter(p => {
          let x =  action.tags.reduce((matched, actionTag) => {
            return matched = matched || p.tags.includes(actionTag);
          }, false);
          return x;
        })
      };


    default:
      return state;
  }
}

export default reducer;