import React, { Component } from "react";
import '../StyleSheets/Toogle.css';

class ToggleSwitch extends Component {
    constructor() {
        super();
        this.state = {isChecked: false};
        this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
      }
      handleChecked () {
        this.setState({isChecked: !this.state.isChecked});
      }
  render() {
    return (
      <label className="switch">
        <input
          type="checkbox"
          className="checkbox"
          onChange={this.handleChecked}
        />
        <span className="slider round"></span>
      </label>
    );
  }
}

export default ToggleSwitch;