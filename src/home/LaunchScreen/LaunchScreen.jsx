import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { getProductSelector } from './selectors';
import { List } from '../../common/compoents/List/List'
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../Cart/cartActionTypes'
const LaunchScreenComponent = (props) => {

  const { data, dispatch } = props;
  return (
    <div className="leftPanel">
      <header className="App-header"></header>
      <List
        data={data}
        onCardClick={(value) => {
          dispatch(value.isChecked ? { type: ADD_PRODUCT, payload: value.item } : { type: REMOVE_PRODUCT, payload: value.item })
        }} />
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    data: getProductSelector(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const LaunchScreen = connect(mapStateToprops, mapDispatchToprops)(LaunchScreenComponent)
