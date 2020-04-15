import React from "react";
import Toogle from "./Toogle";
import FloatingLabelInput from "./FloatingLabelInput";
import "../StyleSheets/OfferRide.css";
import { Container, Row, Col } from "react-grid-system";
import "../StyleSheets/App.css";
import { MdLocationOn } from "react-icons/md";
import { Input } from 'semantic-ui-react';
import {InputAdornment} from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

class OfferRide extends React.Component {
  constructor() {
    super();
    this.state = { isChecked: false ,inputs: [] };
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
  }
  appendInput() {
    var newInput = `stop ${this.state.inputs.length+1}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
}
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  render() {
    return (
        <div>
      <Col md={4}>
        <div className="shadowBox">
                     <div id="second">
                     <Row>
            <Col md={8}>
              <h3>Offer a Ride</h3>
              <small>We get you Rides asap!</small>
            </Col>
            <Col md={2}>
              <label className="switch">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={this.handleChecked}
                />
                <span className="slider round"></span>
              </label>
            </Col>
          </Row>
          <div id="dynamicInput">
        {this.state.inputs.map(input => <FloatingLabelInput label={input} />)}
    </div>
    <TextField
    id="sta"
    defaultValue="stop 2"
    margin="normal"
    InputProps={{
  endAdornment: (
    <InputAdornment position="start">
      <Add  onClick={ () => this.appendInput() }/>
    </InputAdornment>
   )
  }}
/>
                    <div className="row">
                        <small>Available Seats</small>
                        <div className="btn-group" role="group">
                        <button type="button" className="btn round-btn">1</button>
                                <button type="button" className="btn round-btn">2</button>
                                <button type="button" className="btn round-btn">3</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-default" />
                    </div>
                    
                </div>
        </div>
    </Col>
</div>
    );
  }
}

export default OfferRide;