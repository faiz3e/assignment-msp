import { GET_PRODUCTS, FETCH_PRODUCT_INITIATE, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED } from './launchScreenActionTypes';

const initialState = {
  item: 1
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state };
      case FETCH_PRODUCT_INITIATE:
      console.log("GET_PRODUCTS of reducer")
      return { ...state };
      case FETCH_PRODUCT_SUCCESS:
      console.log("GET_PRODUCTS of reducer")
      return { ...state };
      case FETCH_PRODUCT_FAILED:
      console.log("GET_PRODUCTS of reducer")
      return { ...state };
   
      default:
      return state;
  }
}

