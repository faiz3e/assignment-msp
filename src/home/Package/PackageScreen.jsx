import React from 'react';
import { connect } from 'react-redux'

import './style.css';
import { selectPackageItems } from './selectors';
import { ListPackage } from '../../common/compoents/ListPackage/ListPackage';

const PackageComponent = (props) => {
  const { packageItems } = props;
  return (
    <div className="rightPanel">
      <h2 className='textCenter'>Packages</h2>
      <ListPackage data={packageItems} />
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
