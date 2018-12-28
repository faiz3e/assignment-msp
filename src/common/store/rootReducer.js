import { combineReducers } from 'redux';

import { productReducer } from "../../home/LaunchScreen/reducer";
import { cartReducer } from '../../home/Cart/reducer'

export const rootReducer = combineReducers({ productReducer, cartReducer })
