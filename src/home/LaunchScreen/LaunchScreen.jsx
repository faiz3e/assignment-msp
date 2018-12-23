import React from 'react';
import { connect } from 'react-redux'

import './launchScreen.style.css';
import { getProducts } from './selectors';
import { List } from '../../common/compoents/List/List'

const LaunchScreenComponent = (props) => {

  const { data } = props;
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <List data={data} onCardClick={(value)=>{console.log("laucnch screen",value)}}/>
      <button onClick={() => {
      }}> asdasd</button>

    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    data: getProducts(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const LaunchScreen = connect(mapStateToprops, mapDispatchToprops)(LaunchScreenComponent)
