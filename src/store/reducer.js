import Data from '../data/products.json';
import * as actionTypes from './actions';

const initialState = {
  surfboard: {
    filterOn: false,
    tag: 'surfboard'
  },
  shoes: {
    filterOn: false,
    tag: 'shoes'
  },
  shirts: {
    filterOn: false,
    tag: 'shirts'
  },
  lessThan100: {
    filterOn: false,
    tag: 'lessThan100'
  },
  moreThan100: {
    filterOn: false,
    tag: 'moreThan100'
  },
  items: Data.products,
  filters: []
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SURFBOARD:
      let newState =  !state.surfboard.filterOn;
      
      if (newState) {
        let newFilter = state.filters.concat(state.surfboard.tag);
      
        let newItems = [];

        const Filtering = () => {

          if (newFilter.length > 0) {
            let x = []
            
            newFilter.forEach((item) => {
              x = Data.products.filter((product) => {
                return product.tags.includes(item)
              })
              newItems = newItems.concat(x)
            })
          }
          return newItems
        }

        return {
          ...state,
          surfboard: {
            ...state.surfboard,
            filterOn: newState
          },
          filters: state.filters.concat(state.surfboard.tag),
          items: Filtering()
        }
        
      } else {
        let newFilter = state.filters.filter((filter) => filter !== state.surfboard.tag);
        let newItems = [];

        const Filtering = () => {

          if (newFilter.length > 0) {
            let x = []
            
            newFilter.forEach((item) => {
              x = Data.products.filter((product) => {
                return product.tags.includes(item)
              })
              newItems = newItems.concat(x)
            })

            return newItems
          }

          return Data.products
        }
        return {
          ...state,
          surfboard: {
            ...state.surfboard,
            filterOn: newState
          },
          filters: newFilter,
          items: Filtering()
        }
      }

    case actionTypes.SHOES:
      let newShoeState = !state.shoes.filterOn;

      if (newShoeState) {
        let newFilter = state.filters.concat(state.shoes.tag);
      
        let newItems = [];

        const Filtering = () => {

          if (newFilter.length > 0) {
            let x = []
            
            newFilter.forEach((item) => {
              x = Data.products.filter((product) => {
                return product.tags.includes(item)
              })
              newItems = newItems.concat(x)
            })
          }
          return newItems
        }

        return {
          ...state,
          shoes: {
            ...state.shoes,
            filterOn: newShoeState
          },
          filters: newFilter,
          items: Filtering()
        }
      } else {
        let newFilter = state.filters.filter((filter) => filter !== state.shoes.tag);
        let newItems = [];

        const Filtering = () => {

          if (newFilter.length > 0) {
            let x = []
            
            newFilter.forEach((item) => {
              x = Data.products.filter((product) => {
                return product.tags.includes(item)
              })
              newItems = newItems.concat(x)
            })

            return newItems
          }

          return Data.products
        }
        return {
          ...state,
          shoes: {
            ...state.shoes,
            filterOn: newShoeState
          },
          filters: newFilter,
          items: Filtering()
        }
      }

    case actionTypes.SHIRTS:
      let newShirtState = !state.shirts.filterOn;

        if (newShirtState) {
          let newFilter = state.filters.concat(state.shirts.tag);
      
          let newItems = [];

          const Filtering = () => {

            if (newFilter.length > 0) {
              let x = []
              
              newFilter.forEach((item) => {
                x = Data.products.filter((product) => {
                  return product.tags.includes(item)
                })
                newItems = newItems.concat(x)
              })
            }
            return newItems
          }

          return {
            ...state,
            shirts: {
              ...state.shirts,
              filterOn: newShirtState
            },
            filters: newFilter,
            items: Filtering()
          }
        } else {
          let newFilter = state.filters.filter((filter) => filter !== state.shirts.tag);
          let newItems = [];

          const Filtering = () => {

            if (newFilter.length > 0) {
              let x = []
              
              newFilter.forEach((item) => {
                x = Data.products.filter((product) => {
                  return product.tags.includes(item)
                })
                newItems = newItems.concat(x)
              })

              return newItems
            }

            return Data.products
          }

          return {
            ...state,
            shirts: {
              ...state.shirts,
              filterOn: newShirtState
            },
            filters: newFilter,
            items: Filtering()
          }
        }


    case actionTypes.LESSTHAN100:
      let newLowPriceState = !state.lessThan100.filterOn;

      if (newLowPriceState) {
        let newFilter = state.filters.concat(state.lessThan100.tag);
    
        let newItems = [];

        const Filtering = () => {

          if (newFilter.length > 0) {
            let x = []
            
            newFilter.forEach((item) => {
              x = Data.products.filter((product) => {
                return product.tags.includes(item)
              })
              newItems = newItems.concat(x)
            })
          }
          return newItems
        }

        return {
          ...state,
          lessThan100: {
            ...state.lessThan100,
            filterOn: newLowPriceState
          },
          filters: newFilter,
          items: Filtering()
        }
      } else {
        let newFilter = state.filters.filter((filter) => filter !== state.lessThan100.tag);
        let newItems = [];

        const Filtering = () => {

          if (newFilter.length > 0) {
            let x = []
            
            newFilter.forEach((item) => {
              x = Data.products.filter((product) => {
                return product.tags.includes(item)
              })
              newItems = newItems.concat(x)
            })

            return newItems
          }

          return Data.products
        }

        return {
          ...state,
          lessThan100: {
            ...state.lessThan100,
            filterOn: newLowPriceState
          },
          filters: newFilter,
          items: Filtering()
        }
      }

      case actionTypes.MORETHAN100:
        console.log(state.moreThan100.filterOn);
        let newHighPriceState = !state.moreThan100.filterOn;
        console.log(state.moreThan100.filterOn)
        console.log(newHighPriceState)
        if (newHighPriceState) {
          let newFilter = state.filters.concat(state.moreThan100.tag);
      
          let newItems = [];

          const Filtering = () => {

            if (newFilter.length > 0) {
              let x = []
              
              newFilter.forEach((item) => {
                x = Data.products.filter((product) => {
                  return product.tags.includes(item)
                })
                newItems = newItems.concat(x)
              })
            }
            return newItems
          }

          return {
            ...state,
            moreThan100: {
              ...state.moreThan100,
              filterOn: newHighPriceState
            },
            filters: newFilter,
            items: Filtering()
          }
        } else {
          let newFilter = state.filters.filter((filter) => filter !== state.moreThan100.tag);
          let newItems = [];

          const Filtering = () => {

            if (newFilter.length > 0) {
              let x = []
              
              newFilter.forEach((item) => {
                x = Data.products.filter((product) => {
                  return product.tags.includes(item)
                })
                newItems = newItems.concat(x)
              })

              return newItems
            }

            return Data.products
          }

          return {
            ...state,
            moreThan100: {
              ...state.moreThan100,
              filterOn: newHighPriceState
            },
            filters: newFilter,
            items: Filtering()
          }
        }
    default:
      return state;
  }
}

export default reducer;