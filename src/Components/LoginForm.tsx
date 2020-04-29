import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import { TextField } from "@material-ui/core";
import "../StyleSheets/App.css";
import UserContext from "./UserContext";
import "../StyleSheets/Colors.css";
import {render} from "react-dom";
import {RouteComponentProps} from "react-router-dom";

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   Object.values(formErrors).forEach((val) => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach((val) => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

interface IState
{
    id:string,
      password: string,
      formErrors: {
        id: string,
        password: string,
      }
}

class LoginForm extends Component<RouteComponentProps,IState> {
  static contextType = UserContext;
  context: React.ContextType<typeof UserContext>;

  constructor(props:RouteComponentProps) {
    super(props);
    // console.log(this.props);
    // this.state = {
    //   id: "",
    //   password: "",
    //   formErrors: {
    //     id: "",
    //     password: "",
    //   },
    // };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(e:any) {
    var x=this.props.history;
    const { toggleAuth,setUser } = this.context!;
    e.preventDefault();
    // if (formValid(this.state)) {
      axios
        .post("https://localhost:5001/api/UserApi/Login", this.state)
        .then(function (response) {
          toggleAuth();
          setUser(response.data);
          x.push("/Home");
        })
        .catch(function () {
          alert("Error Loading Page");
        });
    //}
  }

  handleChange(e:any) {
    const { name, value } = e.target;
    let formErrors:any = { ...this.state.formErrors };
    if (value.length == 0) {
      formErrors[name] = "Required!";
    }
    this.setState({ formErrors  });
    this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  }  

  render() {
    const { formErrors } = this.state;
    return (
      <div className="rightHalf">
        <form onSubmit={this.handleSubmit} noValidate>
          <h1 className="form-heading underline">Log In</h1>
          <TextField
            className="bg-white"
            required
            label="Id"
            value={this.state.id}
            onChange={this.handleChange}
            margin="normal"
            name="id"
            error={formErrors.id.length > 0}
            helperText={formErrors.id}
          />
          <TextField
            className="bg-white"
            required
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
            <a className="underline white" onClick={() => {
              this.props.history.push("/SignUp");
            }}>

              SIGN UP
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
