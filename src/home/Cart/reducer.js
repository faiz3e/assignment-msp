import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_WISH_LIST } from "./cartActionTypes";

const initialState = {
  totalItems: 0,
  totalPayableAmount: 0,
  totalWeight: 0,
  cartItems: [],

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
    case ADD_WISH_LIST:
      console.log("ADD_WISH_LIST of reducer")
      let wishListTotalPrice = 0
      let wishListTotalWeight = 0
      wishList.map((item) => {
        wishListTotalWeight += item.weight;
        wishListTotalPrice += item.price;
        state.cartItems.push(item)
        return item
      })
      return {
        ...state,
        totalItems: state.totalItems + wishList.length,
        totalWeight: state.totalWeight + wishListTotalWeight,
        totalPayableAmount: state.totalPayableAmount + wishListTotalPrice
      };


    default:
      return state;
  }
}

const wishList = [
  {
    "name": "item24",
    "price": 19,
    "weight": 10
  },
  {
    "name": "item16",
    "price": 245,
    "weight": 10
  },
  {
    "name": "item20",
    "price": 67,
    "weight": 20
  },
  {
    "name": "item17",
    "price": 230,
    "weight": 20
  },
  {
    "name": "item14",
    "price": 240,
    "weight": 20
  }, {
    "name": "item19",
    "price": 45,
    "weight": 200
  },
  {
    "name": "item18",
    "price": 110,
    "weight": 200
  },
  {
    "name": "item13",
    "price": 5,
    "weight": 200
  },
  {
    "name": "item23",
    "price": 17,
    "weight": 250
  },
  {
    "name": "item21",
    "price": 88,
    "weight": 300
  },
  {
    "name": "item11",
    "price": 10,
    "weight": 340
  },
  {
    "name": "item22",
    "price": 10,
    "weight": 500
  },
  {
    "name": "item15",
    "price": 123,
    "weight": 700
  },
  {
    "name": "item12",
    "price": 4,
    "weight": 800
  },
  //  totalItems: 14,
  // totalPayableAmount: 1213,
  // totalWeight: 3570,
];
