import React, { Component } from "react";
import axios from "axios";
import FloatingLabelInput from "./FloatingLabelInput";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(e){
    e.preventDefault();
  var bodyFormData = new FormData();
  
  bodyFormData.set('Id', 'tlakshmivasavi005@gmail.com');
  bodyFormData.set('Password', 'V@123456');
  console.log(bodyFormData);
  axios({
    method: 'post',
    url: 'https://localhost:5001/api/UserApi/Login',
    data: this.state
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  

  render() {
    return (
      <div className="rightHalf">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <h1 className="form-heading underline">Log In</h1>
          <FloatingLabelInput
            label="id"
            data=""
            handleChange={this.handleChange}
          />
          <FloatingLabelInput
            label="password"
            data=""
            handleChange={this.handleChange}
          />
          <input
            type="submit"
            className="btn bg-darkorange"
            value="Log In"
            data-test="submit"
          />
          <div className="form-group white">
            Not a member yet?{" "}
            <a asp-action="SignUp" className="underline white">
              {" "}
              SIGN UP
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
