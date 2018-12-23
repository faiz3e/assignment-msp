import { GET_PRODUCTS } from './launchScreenActionTypes';

const initialState = {
  item:1
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("GET_PRODUCTS of reducer")
      return { ...state };
    default:
      return state;
  }
}

