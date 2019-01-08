import React, { Component } from 'react';
import { connect } from 'react-redux'

import { GET_PRODUCTS } from './home/Products/actionTypes';
import { CartScreen } from './home/Cart/CartScreen';
import { selectCartItems } from './home/Cart/selectors';
import { ProductsScreen } from './home/Products/ProductsScreen';
import { PackageScreen } from './home/Package/PackageScreen';


class AppComponent extends Component {
  componentDidMount() {
    this.props.dispatch({ type: GET_PRODUCTS })
  }
  render() {
    return (
      <div className={'flex'}>
        <ProductsScreen data={this.props.data} />
        <CartScreen />
        <PackageScreen/>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    product: state,
    cartData: selectCartItems(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const App = connect(mapStateToprops, mapDispatchToprops)(AppComponent)
