import React, { Component } from 'react';
import axios from 'axios';
import FloatingLabelInput from './FloatingLabelInput';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
	  error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	  this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.id) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    
    await axios.post('https://localhost:5001/api/UserApi/Login?userId='+this.state.id,
    JSON.stringify(this.state.password),
    {
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        }

    })
     .then(function(response){
       console.log(response);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });
  }

  handleUserChange(data) {
    this.setState({
      id: data,
    });
  };

  handlePassChange(data) {
    this.setState({
      password: data,
    });
  }

  render() {
    return (
      <div className="rightHalf">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
		  <h1 className="form-heading underline">Log In</h1>
        <FloatingLabelInput label="id" data="" handleChange={this.handleUserChange}/>
		  <FloatingLabelInput label="password" data="" handleChange={this.handlePassChange}/>
		  <input type="submit" className="btn" value="Log In" data-test="submit" />
		  <div className="form-group white">Not a member yet? <a asp-action="SignUp" className="underline"> SIGN UP</a></div>
      
        </form>
        
      </div>
    );
  }
}

export default LoginForm;