import * as actionTypes from "./actions";


const initialState = {
  items: [],
  products: [],
  filter: {
    options: [
      {
        tag: "surfboards",
        label: "Surfboards"
      },
      {
        tag: "shoes",
        label: "Shoes"
      },
      {
        tag: "shirts",
        label: "Shirts"
      },
      {
        tag: "lessThan100",
        label: "Less than $100"
      },
      {
        tag: "moreThan100",
        label: "More than $100"
      }
    ],
    tags: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATESTATE: 

      return {
        ...state,
        items: action.data,
        products: action.data
      }
    case actionTypes.SEARCH:
      let tags = [...state.filter.tags];

      if (tags.includes(action.tag)) {
        // remove the tag from the existing tags filter if it already exists
        tags = tags.filter(t => t !== action.tag);
      } else {
        // otherwise add the new tag to the filter
        tags.push(action.tag);
      }

      let items;
      if (tags.length > 0) {
        // define the items array based on the matched filters
        items = state.products.filter(p => {
          let x = tags.reduce((matched, actionTag) => {
            return (matched = matched || p.tags.includes(actionTag));
          }, false);
          return x;
        });
      } else {
        items = state.products;
      }

      return {
        ...state,
        filter: {
          ...state.filter,
          tags
        },
        items
      };

    default:
      return state;
  }
};

export default reducer;
