import { PACK_PRODUCTS } from "./cartActionTypes";

const initialState = {
  packageItems: 0,
  totalPrice: 0,
  totalWeight: 0,
  newPackageByprice : []
};

export function packageReducer(state = initialState, action) {
  switch (action.type) {

    case PACK_PRODUCTS:
      console.log("PACK_PRODUCTS of reducer", state)

      state.newPackageByprice=[[]]
      let total = 0
      let i = 0;
      action.payload.map((item) => {
        if (total + item.price > 250) {
          i++; total = 0; 
          state.newPackageByprice[i] = []
        }
        if (total < 250) {
          total = total + item.price
          state.newPackageByprice[i].push(item)
          //todo make it immutable and check item.weight=0  
        }
        
      })
      console.log(state.newPackageByprice);
      return {
        ...state,
        newPackageByprice: state.newPackageByprice
      };

    default:
      return state;
  }
}

