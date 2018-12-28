import { combineReducers } from 'redux';
import { productReducer } from '../../home/Products/reducer'
import { cartReducer } from '../../home/Cart/reducer'

export const rootReducer = combineReducers({ productReducer, cartReducer })
