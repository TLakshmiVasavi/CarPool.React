import React, { Component } from 'react';
import LoginBackground from './LoginBackground';
import SignUpForm from './SignUpForm';

class SignUp extends Component {

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <React.Fragment>
        <LoginBackground/>
        <SignUpForm></SignUpForm>
      </React.Fragment>
    );
  }
}

export default SignUp;