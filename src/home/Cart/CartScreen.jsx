import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { selectCartTotalPayableAmount, selectCartItems } from './selectors';
import { List } from '../../common/compoents/List/List';
import { PACK_PRODUCTS } from '../Package/cartActionTypes';

const CartScreenComponent = (props) => {

  const { cartItems, cartTotalPayableAmount ,dispatch} = props;
  return (
    <div className="rightPanel">
      <List data={cartItems} />
      <h3>Total price: {cartTotalPayableAmount}</h3>
      <button type="button" onClick={() => {
        dispatch({ type: PACK_PRODUCTS})

      }}>proceed to Package</button>
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    cartItems: selectCartItems(state),
    cartTotalPayableAmount: selectCartTotalPayableAmount(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})
export const CartScreen = connect(mapStateToprops, mapDispatchToprops)(CartScreenComponent)
