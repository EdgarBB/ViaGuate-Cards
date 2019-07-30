import React, { Component } from "react";
import Switch from "react-switch";
 
export default class Switchs extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label className="Switch-label">
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}