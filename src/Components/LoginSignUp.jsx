import React, { Component } from 'react';
import axios from 'axios';
import Background from './Background';
import LoginForm from './LoginForm';
import Logo from './Logo';
import React from 'react';
import '../StyleSheets/LoginBackground.css';

class LoginSignUp extends Component {

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <React.Fragment>
        <div className="leftHalf">
        <img src={require('../images/logo.png')} className="Logo"></img>
        <div className="heading">TURN<div className="miles"> MILES</div><br />INTO <div className="money">MONEY</div><div className="normal">RIDES ON TAP</div></div>
        </div>
        <LoginForm/>
      </React.Fragment>
    );
  }
}

export default LoginSignUp;