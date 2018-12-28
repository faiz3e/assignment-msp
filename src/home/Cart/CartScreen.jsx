import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { selectCartTotalPayableAmount, selectCartItems } from './selectors';
import { List } from '../../common/compoents/List/List';

const CartScreenComponent = (props) => {

  const { cartItems, cartTotalPayableAmount } = props;
  return (
    <div className="rightPanel">
      <List data={cartItems} />
      <h3>Total price: {cartTotalPayableAmount}</h3>
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
