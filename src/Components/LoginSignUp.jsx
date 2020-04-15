import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import '../StyleSheets/LoginSignUp.css';

class LoginSignUp extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="leftHalf">
        <img src={require('../images/logo.png')} className="Logo"></img>
        <div className="heading">TURN<div className="miles"> MILES</div><br />INTO <div className="money">MONEY</div><div className="normal">RIDES ON TAP</div></div>
        </div>
        <SignUpForm/>
      </React.Fragment>
    );
  }
}

export default LoginSignUp;