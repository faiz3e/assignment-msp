import React, { Component } from 'react';
import { connect } from 'react-redux'

import { LaunchScreen } from './home/LaunchScreen/LaunchScreen';
import { GET_PRODUCTS } from './home/LaunchScreen/actionTypes';
import { CartScreen } from './home/Cart/CartScreen';
import { getCartSelector } from './home/Cart/selectors';


class AppComponent extends Component {
  componentDidMount() {
    this.props.dispatch({ type: GET_PRODUCTS })
  }
  render() {
    return (
      <div style={{display:'flex'}}>
        <LaunchScreen data={this.props.data} />
        <CartScreen  />
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    product: state,
    cartData: getCartSelector(state)

    
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const App = connect(mapStateToprops, mapDispatchToprops)(AppComponent)
