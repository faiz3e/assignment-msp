import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cartActionTypes";

const initialState = {
  totalItems: 0,
  cartItems: [{
    "name": "item1",
    "price": 10,
    "weight": 200
  },
  {
    "name": "item2",
    "price": 100,
    "weight": 20
  },
  {
    "name": "item3",
    "price": 30,
    "weight": 300
  },
  {
    "name": "item4",
    "price": 40,
    "weight": 500
  },
  {
    "name": "item5",
    "price": 200,
    "weight": 250
  }, {
    "name": "item1",
    "price": 10,
    "weight": 200
  },
  {
    "name": "item2",
    "price": 100,
    "weight": 20
  }],
  totalPayableAmount: 0,
  totalWeight: 0
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:

      console.log("ADD_PRODUCT of reducer", action.payload)
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
        totalItems: state.totalItems + 1,
        totalPayableAmount: state.totalPayableAmount + action.payload.price,
        totalWeight: state.totalWeight + action.payload.weight
      };

    case REMOVE_PRODUCT:
      console.log("REMOVE_PRODUCT of reducer")
      let updatedCart = state.cartItems.filter(x => x.name !== action.payload.name);
      const isDeleted = updatedCart.length === state.cartItems.length ? false : true
      return {
        ...state,
        cartItems: updatedCart,
        totalItems: isDeleted && state.totalItems - 1,
        totalPayableAmount: isDeleted && state.totalPayableAmount - action.payload.price,
        totalWeight: isDeleted && state.totalWeight - action.payload.weight
      };

    default:
      return state;
  }
}

