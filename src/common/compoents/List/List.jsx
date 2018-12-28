import React, { Component } from 'react';
import { CheckBox } from '../CheckBox/CheckBox'
import "./list.style.css";
export class List extends Component {
  render() {
    console.log("values in list ",this.props);
    
    const { data } = this.props;
    return (
      <div style={{ cursor: 'pointer' }}>
        {data.products && data.products.map((item, itemkey) => {
          return (
            <div key={itemkey} className={'flex'} >
              <p> {item.name} -- </p>
              <p> {item.price} --</p>
              <p> {item.weight}</p>
              <CheckBox item={item} {...this.props}></CheckBox>
            </div>)
        })}
      </div>
    );
  }
}




