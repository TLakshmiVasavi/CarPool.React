import React, { Component } from "react";
import axios from "axios";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import '../StyleSheets/App.css';

const styles=theme=>({
  
  label: {
    backgroundColor:'white',
    "&$focusedLabel": {
      color: "cyan"
    },
    "&$erroredLabel": {
      color: "orange"
    }
  },
  focusedLabel: {},
  erroredLabel: {},
  underline: {
    "&$error:after": {
      borderBottomColor: "orange"
    },
    "&:after": {
      borderBottom: `2px solid cyan`
    }
  },
  error: {}
});


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class LoginForm extends Component
 {
  constructor(props) {
    super(props);
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

  handleSubmit(e){
    e.preventDefault();
    if (formValid(this.state)) {
  var bodyFormData = new FormData();
  
  bodyFormData.set('Id', 'tlakshmivasavi005@gmail.com');
  bodyFormData.set('Password', 'V@123456');
  // console.log(bodyFormData);
  axios({
    method: 'post',
    url: 'https://localhost:5001/api/UserApi/Login',
    data: this.state
    })
    .then(function (response) {
        // console.log(response);
    })
    .catch(function (response) {
        //handle error
        // console.log(response);
    });
  }
  }

  handleChange(e) {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    if(value.length==0)
    {
      formErrors[name]="Required!";
    }
   this.setState({ formErrors, [name]: value });
  };

  render() {
    const {formErrors}=this.state;
    const { classes }=this.props;
    return (
      <div className="rightHalf">
        <form onSubmit={this.handleSubmit} noValidate>
          <h1 className="form-heading underline">Log In</h1>

          <TextField variant="filled" required id="id" label="Id" value={this.state.id}
           onChange={this.handleChange} margin="normal" name="id"
           error={formErrors.id.length>0}
  helperText={ formErrors.id }
                InputLabelProps={{
                  classes: {
                    error: classes.erroredLabel 
                  }
                }}/>
          <TextField variant="filled" required id="password" label="Password" value={this.state.password} onChange={this.handleChange} margin="normal" name="password" 
          error={formErrors.password.length>0}
          helperText={ formErrors.password }
                        InputLabelProps={{
                          classes: {
                            error: classes.erroredLabel
                          }
                        }}/>
          <input
            type="submit"
            className="submit bg-darkorange"
            value="Log In"
            data-test="submit"
          />
          <div className="form-group white">Not a member yet?
          <a asp-action="SignUp" className="underline white">SIGN UP</a>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
