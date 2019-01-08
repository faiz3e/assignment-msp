import React from 'react';
import './button.style.css'
export const Button = (props) => {
    return (
        <button className="btn blue" onClick={() => { props.onClick() }}>{props.text}</button>
    )
}




