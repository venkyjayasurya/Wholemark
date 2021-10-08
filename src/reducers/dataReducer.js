import data from '../screen1/components/searchBar/list'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const initialState = [data];

const resultArr = [];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['dataReducer']
}

// const  products = {
//   shampoo: {
//     id:"shampoo"
//     name: 'Shampoo',
//     price: '$10',
//     quantity: '1',
//   },
//   conditioner: {
//     name: 'conditioner',
//     price: '$10',
//     quantity: '1',
//   }
// }

// if(product["shampoo"]){
//   console.log("shampoo")
//   alert(product["shampoo"].name is already in the cart)
//   return result
// }

// addToCart(product) => {

// }
// updateQuantity(product)
// removeFromCart(product)

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_QUANTITY_AND_SAVE":
            //To Change the quantity of the data when the input is entered
            let val = action.payload.value
        // setResult([e.value, e.label, e.price, e.owner, e.quantity])
        //Removes duplications and add the selected value to the array
        for(let i=0; i<initialState.length; i++){
          if(val === initialState[i].value){
            var count=1;
            alert(initialState[i].label + " is already present")
          }
        }

        //If var is not 1 then the result array will be updated with the selected value
        if(!count){
          resultArr([...resultArr, {label: action.payload.label, owner: action.payload.owner, value: action.payload.value, price:action.payload.price, quantity:action.payload.quantity}])
        }
        localStorage.setItem("resultArr", JSON.stringify(resultArr))
        return resultArr
            
        case "FETCH_DATA":
            //fetch array data from the store
            return state
        case "DISPLAY_TABLE":
            //display store data in table
            return state
        case "CHECK_DATA_ADDED_TO_TABLE":
            //check whether the data added or not and hide the button in the screen1
            return state
        default:
            return state
    }
}

export default persistReducer(persistConfig, dataReducer)