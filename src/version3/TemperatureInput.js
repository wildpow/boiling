import React, { Component } from 'react';

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const { temperature } = this.state;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>
          Enter temperature in {scaleNames[scale]}:
        </legend>
        <input  value={temperature}
                onChange={this.handleChange} />
      </fieldset>
    )
  }
}