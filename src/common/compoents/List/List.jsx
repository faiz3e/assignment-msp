import React, { Component } from 'react';
import { CheckBox } from '../CheckBox/CheckBox'
import "./list.style.css";
export class List extends Component {
  render() {
    console.log("pp", this.props);
    const { data } = this.props;
    return (
      <div style={{ cursor: 'pointer' }}>
        {data.products && data.products.map((item, itemkey) => {
          return (
            <div key={itemkey} className={'flex'} >
              <p> name --{item.name} --</p>
              <p> price --{item.price}-- </p>
              <p> weight --{item.weight} --</p>
              <CheckBox item={item} {...this.props}></CheckBox>
            </div>)
        })}
      </div>
    );
  }
}




