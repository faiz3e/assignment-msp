import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { getCartSelector } from './selectors';
import { List } from '../../common/compoents/List/List';

const CartScreenComponent = (props) => {

  const { cartItems } = props;
  return (
    <div className="rightPanel">
      {cartItems.length > 0 ? cartItems.map((item, itemkey) => {
        return (
          <div key={itemkey} className={'flexCol'} >
            <p> {item.name} -- </p>
            <p> {item.price} --</p>
            <p> {item.weight}</p>
          </div>
        )
      })
        : <p> Cart Empty</p>}
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    cartItems: getCartSelector(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})
export const CartScreen = connect(mapStateToprops, mapDispatchToprops)(CartScreenComponent)
