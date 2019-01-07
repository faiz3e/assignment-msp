import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { selectCartTotalPayableAmount, selectCartItems, selectTotalWeight, selectItemsCount } from './selectors';
import { List } from '../../common/compoents/List/List';
import { PACK_PRODUCTS } from '../Package/cartActionTypes';
import { ADD_WISH_LIST } from './cartActionTypes';
import { Button } from '../../common/compoents/Buttons/Buttons';

const CartScreenComponent = (props) => {

  const { cartItems, totalWeight, cartTotalPayableAmount, dispatch, itemsCount } = props;
  return (
    <div className="rightPanel">
      <h2 className='textCenter'>Cart</h2>
      <List data={cartItems} />
      <h3 className='textCenter'>Total price: {cartTotalPayableAmount}</h3>

      <Button onClick={() => {
        dispatch({ type: PACK_PRODUCTS, payload: { cartItems, cartTotalPayableAmount, totalWeight, itemsCount } })
      }} text={'proceed to Package'} />
      <br />
      <Button onClick={() => {
        dispatch({ type: ADD_WISH_LIST })
      }}
        text={'Load a Wish-list'} />
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    cartItems: selectCartItems(state),
    cartTotalPayableAmount: selectCartTotalPayableAmount(state),
    totalWeight: selectTotalWeight(state),
    itemsCount: selectItemsCount(state),
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})
export const CartScreen = connect(mapStateToprops, mapDispatchToprops)(CartScreenComponent)
