import React from 'react';

import { CheckBox } from '../CheckBox/CheckBox'
import "./list.style.css";
export const List =(props)=>{
  const { data, showCheckBox = false } = props;
  return (
    <div style={{ cursor: 'pointer' }}>
      {data.length > 0 ? data.map((item, itemkey) => {
        return (
          <div key={itemkey} className={'flex'} >
            <p> {item.name} -- </p>
            <p> {item.price} --</p>
            <p> {item.weight}</p>
            {showCheckBox &&
              <CheckBox item={item} {...props}></CheckBox>
            }
          </div>)
      }) : <p className='textCenter'>List is empty</p>}
    </div>
  );
}