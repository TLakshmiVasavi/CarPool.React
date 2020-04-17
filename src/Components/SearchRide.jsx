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

class SearchRide extends React.Component {
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
          <div id="first">
          <Row>
            <Col md={8}>
              <h3>Book a Ride</h3>
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
          <Row>
            <Col md={8}>
              <FloatingLabelInput label="From" />
              <FloatingLabelInput label="To" />
            </Col>
            <Col md={2}>
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <MdLocationOn className="darkviolet"/>
              
            </Col>
          </Row>
          <Row>
              <Col md={10}>
            <FloatingLabelInput label="Date" />
                        <small>Time</small> 
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn rounded-btn ">5am-9am</button>
                            <button type="button" className="btn rounded-btn ">9am-12pm</button>
                            <button type="button" className="btn rounded-btn ">12pm-3pm</button>
                            <button type="button" className="btn rounded-btn ">3pm-6pm</button>
                            <button type="button" className="btn rounded-btn ">6pm-9pm</button>
                        </div>
                    <a href="#" className="next darkviolet">Next&raquo;</a>
            </Col>
          </Row>
          </div>
                                 </div>
      </Col>
  </div>
      );
    }
  }
  
  export default SearchRide;