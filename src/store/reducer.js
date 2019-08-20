import Data from '../data/products.json';
import * as actionTypes from './actions';


let JSONdata = Data.surfboards.concat(Data.shirts)
JSONdata = JSONdata.concat(Data.shoes)

const initialState = {
  items: JSONdata,
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
      return {
        ...state,
        filter: {
          ...state.filter,
          tags: action.tags,
        },
        items: state.products.filter(p => {
          return action.tags.reduce((matched, actionTag) => {
            matched = matched || p.tags.indexOf(actionTag) >= 0;
            return matched;
          }, false);
        })
      };

    default:
      return state;
  }
}

export default reducer;