import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { TextField } from "@material-ui/core";
import "../StyleSheets/App.css";
import UserContext from "./UserContext";

class LoginForm extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      id: "",
      password: "",
      formErrors: {
        id: "",
        password: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (formValid(this.state)) {
      axios
        .post("https://localhost:5001/api/UserApi/Login", this.state)
        .then(function (response) {
          this.context.toogleAuth();
          this.context.setUser(response.data);
          this.props.history.push("/Home");
        })
        .catch(function () {
          alert("Error Loading Page");
        });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    if (value.length == 0) {
      formErrors[name] = "Required!";
    }
    this.setState({ formErrors, [name]: value });
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="rightHalf">
        <form onSubmit={this.handleSubmit} noValidate>
          <h1 className="form-heading underline">Log In</h1>
          <TextField
            variant="filled"
            required
            id="id"
            label="Id"
            value={this.state.id}
            onChange={this.handleChange}
            margin="normal"
            name="id"
            error={formErrors.id.length > 0}
            helperText={formErrors.id}
          />
          <TextField
            variant="filled"
            required
            id="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            margin="normal"
            name="password"
            error={formErrors.password.length > 0}
            helperText={formErrors.password}
          />
          <input
            type="submit"
            className="submit bg-darkorange"
            value="Log In"
            data-test="submit"
          />
          <div className="form-group white">
            Not a member yet?
            <a asp-action="SignUp" className="underline white">
              SIGN UP
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
