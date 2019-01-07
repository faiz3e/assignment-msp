import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { getProductSelector } from './selectors';
import { List } from '../../common/compoents/List/List'
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../Cart/cartActionTypes'

const ProductsScreenComponent = (props) => {
  const { data, dispatch } = props;
  return (
    <div className="leftPanel">
      <h2 className='textCenter'>All products</h2>
      <List
        data={data}
        showCheckBox={true}
        onCardClick={(value) => {
          dispatch(value.isChecked ? { type: ADD_PRODUCT, payload: value.item } : { type: REMOVE_PRODUCT, payload: value.item })
        }}
      />
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

export const ProductsScreen = connect(mapStateToprops, mapDispatchToprops)(ProductsScreenComponent)