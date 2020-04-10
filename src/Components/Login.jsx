import React, { Component } from 'react';
import axios from 'axios';
import LoginBackground from './LoginBackground';
import LoginForm from './LoginForm';
import Logo from './Logo';

class LoginPage extends Component {

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <React.Fragment>
        <LoginBackground/>
        <LoginForm/>
      </React.Fragment>
    );
  }
}

export default LoginPage;