import React, { Component } from 'react';

import { CheckBox } from '../CheckBox/CheckBox'
import "./list.style.css";

export class List extends Component {
  render() {
    const { data, showCheckBox = false } = this.props;
    return (
      <div style={{ cursor: 'pointer' }}>
        {data.length > 0 ? data.map((item, itemkey) => {
          return (
            <div key={itemkey} className={'flex'} >
              <p> {item.name} -- </p>
              <p> {item.price} --</p>
              <p> {item.weight}</p>
              {showCheckBox &&
                <CheckBox item={item} {...this.props}></CheckBox>
              }
            </div>)
        }) : <p>List is empty</p>}
      </div>
    );
  }
}