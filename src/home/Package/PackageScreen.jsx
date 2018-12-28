import React from 'react';
import { connect } from 'react-redux'

import './style.css';

const PackageComponent = (props) => {

  // const { cartItems, cartTotalPayableAmount } = props;
  return (
    <div className="rightPanel">
      <h3>Package</h3>
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    // cartItems: selectCartItems(state),
    // cartTotalPayableAmount: selectCartTotalPayableAmount(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})
export const PackageScreen = connect(mapStateToprops, mapDispatchToprops)(PackageComponent)
