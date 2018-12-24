import { combineReducers } from 'redux';

import { productReducer } from "../../home/LaunchScreen/launchScreenReducer";
import { cartReducer } from "../../home/Cart/cartReducer";

export const rootReducer = combineReducers({productReducer,cartReducer})
