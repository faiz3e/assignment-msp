import { GET_PRODUCTS, FETCH_PRODUCT_INITIATE, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED, ADD_PRODUCT, REMOVE_PRODUCT } from './launchScreenActionTypes';

const initialState = {
  products: false,
  users: null,
  error: null,
  success: false
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state };
    case FETCH_PRODUCT_INITIATE:
      console.log("FETCH_PRODUCT_INITIATE of reducer")
      return { ...state, fetching: true, error: false, success: false };
    case FETCH_PRODUCT_SUCCESS:
      console.log("FETCH_PRODUCT_SUCCESS of reducer")
      return { ...state, fetching: false, error: false, success: true, products: action.payload };
    case FETCH_PRODUCT_FAILED:
      console.log("FETCH_PRODUCT_FAILED of reducer")
      return { ...state, fetching: false, error: true, success: false };
    case ADD_PRODUCT://! todo make a reducer for add and sb
      console.log("ADD_PRODUCT of reducer")
      return { ...state };
    case REMOVE_PRODUCT:
      console.log("REMOVE_PRODUCT of reducer")
      return { ...state };

    default:
      return state;
  }
}

