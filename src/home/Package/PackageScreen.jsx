import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { selectPackageItems } from './selectors';
import { List } from '../../common/compoents/List/List';

const PackageComponent = (props) => {

  const { packageItems } = props;
  return (
    <div className="rightPanel">
      <h2>Packages</h2>
  
      {packageItems && packageItems.map((item,index) => {
        return (
          <div key={index}>
          <h4>Package{index+1}</h4>
            <List data={item} />
          </div>
          )
      })
      }
    </div>
  );
}

const mapStateToprops = (state) => {
  return {
    packageItems: selectPackageItems(state)
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})
export const PackageScreen = connect(mapStateToprops, mapDispatchToprops)(PackageComponent)
