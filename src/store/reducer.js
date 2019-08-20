import Data from '../data/products.json';
import * as actionTypes from './actions';


let JSONdata = Data.surfboards.concat(Data.shirts)
JSONdata = JSONdata.concat(Data.shoes)

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
  items: JSONdata,
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
          if (newFilter.length === 1) {
            return Data.surfboards
          }

          if (state.filters.length ===1 && state.filters.includes("lessThan100")) {
            return [];            
          }
          if (state.filters.includes("lessThan100")) {
            return state.items           
          }

          let x = []
            
          x = JSONdata.filter((product) => {
            return product.tags.includes(state.surfboard.tag)
          })
        

          newItems = newItems.concat(x)
          newItems= state.items.concat(newItems);

          
          return newItems;
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
          if (newFilter.length === 0) {
            return JSONdata
          } else if (state.filters.includes("moreThan100")) {
            return JSONdata.surfboards
          }
          if (newFilter.length === 1 && state.filters.includes("lessThan100")) {
            return Data.shirts.concat(Data.shoes);            
          }
          let x = []

          x = state.items.filter((product) => {
            return !product.tags.includes(state.surfboard.tag)
          })

          newItems = newItems.concat(x)
          
          return newItems;

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
          if (newFilter.length === 1) {
            return Data.shoes
          } else if (state.filters.includes("moreThan100")) {
            return state.items.concat([]);            
          }

          if (state.filters.includes("lessThan100")) {
            return state.items.filter((product) => {
              return product.tags.includes("shoes")
            })
          }

          let x = []
            
          x = JSONdata.filter((product) => {
            return product.tags.includes(state.shoes.tag)
          })
        

          newItems = newItems.concat(x)
          newItems= state.items.concat(newItems);

          return newItems;
         
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

        const Filtering = () => {
          if (newFilter.length === 0) {
            return JSONdata
          }

          if (state.filters.includes("lessThan100")) {
            return JSONdata.filter((product) => {
              return product.tags.includes("shoes") || product.tags.includes("shirts")
            })
          }

          return state.items.filter((product) => {
            return !product.tags.includes("shoes")
          })

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
            if (newFilter.length === 1) {
              return Data.shirts
            } else if (state.filters.includes("lessThan100")) {
              console.log(state.items)
              let x = state.items.filter((product) => {
                return product.tags.includes(state.shirts.tag)
              })
              console.log(x)
              return x;

            } else if (state.filters.includes("moreThan100")) {
              return state.items.concat([]);            
            }
            let x = []
            
            x = JSONdata.filter((product) => {
              return product.tags.includes(state.shirts.tag)
            })
          
  
            newItems = newItems.concat(x)
            newItems= state.items.concat(newItems);
  
            return newItems;
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

          const Filtering = () => {
            if (newFilter.length === 0) {
              return JSONdata
            }
            
            if (state.filters.includes("lessThan100")) {
              return JSONdata.filter((product) => {
                return product.tags.includes("shoes") || product.tags.includes("shirts")
              })
            }
            
            return state.items.filter((product) => {
              return !product.tags.includes("shirts")
            })
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
          if (newFilter.length === 1) {
            let x = JSONdata.filter((product) => product.price < 100)
            return x;
          }

          let x = []
            
          x = state.items.filter((product) => {
            return product.price < 100
          })
          newItems = newItems.concat(x)
          
          return newItems;
          
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

        const Filtering = () => {
          if (newFilter.length === 0) {
            return JSONdata
          }
         
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
        let newHighPriceState = !state.moreThan100.filterOn;
        
        if (newHighPriceState) {
          let newFilter = state.filters.concat(state.moreThan100.tag);
      
          let newItems = [];

          const Filtering = () => {
            if (newFilter.length === 1) {
              let x = JSONdata.filter((product) => product.price > 100)
              return x;
            }

            let x = []
            
            x = state.items.filter((product) => {
              return product.price > 100
            })
            newItems = newItems.concat(x)
            
            return newItems;
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

          const Filtering = () => {

            if (newFilter.length === 0) {
              return JSONdata
            }
            
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