import React, { Component } from 'react';
import './button.style.css'
export class Button extends Component {
    render() {
        const { onClick, text } = this.props;
        return (
            <button className="btn blue" onClick={()=>{onClick()}}>{text}</button>
        );
    }
}




