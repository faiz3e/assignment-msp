import React, { Component } from 'react';
import { connect } from 'react-redux'

import { LaunchScreen } from './home/LaunchScreen/LaunchScreen';
import { GET_PRODUCTS } from './home/LaunchScreen/launchScreenActionTypes';

class AppComponent extends Component {
  componentDidMount(){
    this.props.dispatch({ type: GET_PRODUCTS })
  }
  render() {   
    return (
     <LaunchScreen data={this.props.data}/>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    product: state
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const App = connect(mapStateToprops, mapDispatchToprops)(AppComponent)
