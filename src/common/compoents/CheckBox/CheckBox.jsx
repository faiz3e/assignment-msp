import React, { Component } from 'react';
export class CheckBox extends Component {
  state = { isChecked: false }
  render() {
    const { onCardClick, item } = this.props;
    return (
      <div>
        <input type="checkbox" value={item.name} onClick={(e) => { onCardClick(e.target.value) }} />
      </div>
    );
  }
}




