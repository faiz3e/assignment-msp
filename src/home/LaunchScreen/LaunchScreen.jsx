import React from 'react';
import { connect } from 'react-redux'
import './launchScreen.style.css';
import { getProducts } from './selectors';
const LaunchScreenComponent = (props) => {

const { product } = props;
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <p>{product.item}</p>
      <button onClick={() => {

      }}> asdasd</button>

    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    product: getProducts(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const LaunchScreen = connect(mapStateToprops, mapDispatchToprops)(LaunchScreenComponent)
