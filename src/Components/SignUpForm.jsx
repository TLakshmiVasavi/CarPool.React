import React, { Component } from 'react';
import axios from 'axios';
import { TextField,FilledInput,OutlinedInput,InputLabel,InputAdornment,FormHelperText,FormControl } from '@material-ui/core';
import { Visibility,VisibilityOff} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const Gender = [
  {
    value: true,
    label: 'Female',
  },
  {
    value: false,
    label: 'Male',
  },
];

const vehicleType = [
  {
    value: "Car",
    label: 'Car',
  },
  {
    value: "Bike",
    label: 'Bike',
  },
];

const hasVehicle = [
  {
    value: true,
    label: 'Yes',
  },
  {
    value: false,
    label: 'No',
  },
];

const pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

const mailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const phoneRegEx = RegExp(
  /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);

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

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      mail:'',
      password: '',
      age:'',
      phoneNumber:'',
      photo:'',
      gender:'',
      hasVehicle:'',
      vehicle:{
        Model:'',
        Number:'',
        Capacity:''
      },
      vehicleType:'',
    showPassword:true,
    formErrors:{
name:'',
      mail:'',
      password: '',
      age:'',
      phoneNumber:'',
      photo:'',
      gender:'',
      hasVehicle:'',
      vehicle:{
        Model:'',
        Number:'',
        Capacity:''
      },
      vehicleType:'',
    },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlefile=this.handlefile.bind(this);
    this.handleClickShowPassword=this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword=this.handleMouseDownPassword.bind(this);  
  }

  
  handleClickShowPassword() {
    this.setState({
      "showPassword":!this.state.showPassword,
    });
  };

  handleMouseDownPassword(event) {
    event.preventDefault();
  };

  async handleSubmit(evt) {
    evt.preventDefault();
    const formData={

    }
    const data=new FormData();
    Object.keys(this.state).map(i=>data.append(i,this.state[i]));
    //data.append("user",this.state);
    // console.log(data);
    alert("submitting");
  await axios.post('https://localhost:5001/api/UserApi/SignUp',
    this.state
    )
     .then(function(response){
      //  console.log(response);
      //  console.log(response.data);
       
       //Perform action based on response
   })
     .catch(function(error){
       
      // console.log(error);
      // console.log(error.data);
       //Perform action based on error
     });
  }

  
  handleChange(e) {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    if(value.length==0)
    {
      formErrors[name]="Required!";
    }
    else{
    switch (name) {
      case "mail":
        formErrors.mail = mailRegex.test(value)
          ? ""
          : "invalid mail address";
        break;
      case "password":
        formErrors.password =pwdRegex.test(value)
        ? ""
        : "Please choose a strong password";
        break;
        case "phoneNumber":
          formErrors.phoneNumber=phoneRegEx.test(value)
          ?""
          :"Please enter a valid phoneNumber";
      default:
        break;
    }
  }

   this.setState({ formErrors });

    if(e.target.name=="Number")
      {
        let newState = Object.assign({}, this.state);
        newState.vehicle.Number=e.target.value;
        this.setState(newState);
      }
      else
      if(e.target.name=="Model")
      {
        let newState = Object.assign({}, this.state);
        newState.vehicle.Model=e.target.value;
        this.setState(newState);
      }
      else
      if(e.target.name=="Capacity")
      {
        let newState = Object.assign({}, this.state);
        newState.vehicle.Capacity=e.target.value;
        this.setState(newState);
      }
      else{
        this.setState({
          [e.target.name]:e.target.value,
        });
      }
  }

  handlefile(e)
  {
    this.setState({
      [e.target.name]:e.target.files[0]
    })

  }

  render() {
    const {formErrors}=this.state;
    const {classes}=this.props;
    return (
      <div className="bg-darkorange rightHalf">
       <form onSubmit={this.handleSubmit}>
		  <h2>SignUp</h2>
      <TextField variant="filled" required id="name" label="Enter Name" value={this.state.name} onChange={this.handleChange} margin="normal" name="name" 
      
      error={formErrors.name.length>0}
      helperText={ formErrors.name }
                    InputLabelProps={{
                      classes: {
                        error: classes.erroredLabel
                      }
                    }}/>
      <TextField variant="filled" required id="mail" label="Enter Mail" value={this.state.mail} onChange={this.handleChange} margin="normal" name="mail" 
      error={formErrors.mail.length>0}
      helperText={ formErrors.mail }
                    InputLabelProps={{
                      classes: {
                        error: classes.erroredLabel
                      }
                    }}/>
      <TextField variant="filled" required id="phoneNumber" label="Enter Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} margin="normal" name="phoneNumber" 
      error={formErrors.phoneNumber.length>0}
      helperText={ formErrors.phoneNumber }
                    InputLabelProps={{
                      classes: {
                        error: classes.erroredLabel
                      }
                    }}/>
      <TextField variant="filled" required id="age" label="Enter Age" value={this.state.age} onChange={this.handleChange} margin="normal" name="age" 
      error={formErrors.age.length>0}
      helperText={ formErrors.age }
                    InputLabelProps={{
                      classes: {
                        error: classes.erroredLabel
                      }
                    }}/>  
      <TextField margin="normal" id="filled-select-currency-native" select label="Gender" value={Gender} onChange={this.handleChange} variant="filled"
                SelectProps={{
            native: true,
          }}
        >
          {Gender.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          />
        </TextField>

        <TextField         margin="normal"
          id="filled-select-currency-native"
          select
          name="hasVehicle"
          label="Has Car"
          value={hasVehicle}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Do you have a Vehicle"
          variant="filled"
        >
          {hasVehicle.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
         />
        </TextField>

        <FormControl  variant="outlined" margin="normal">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          name="password"
            id="outlined-adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange}
            error={formErrors.password.length>0}
      helperText={ formErrors.password }
                    InputLabelProps={{
                      classes: {
                        error: classes.erroredLabel
                      }
                    }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
         
          <input type="file" id="photo" name="photo" onChange={this.handlefile}/>

          <TextField
          margin="normal"
          name="vehicleType"
          id="filled-select-currency-native"
          select
          label="Vehicle"
          value={vehicleType}
          onChange={this.handleChange}
          
          

          SelectProps={{
            native: true,
          }}
          helperText="Do you have a Vehicle"
          variant="filled"
        >
          {vehicleType.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField variant="filled" required id="Number" label="Enter Car Number" value={this.state.vehicle.Number} onChange={this.handleChange} margin="normal" name="Number" 
        error={formErrors.vehicle.Number.length>0}
        helperText={ formErrors.vehicle.Number }
                      InputLabelProps={{
                        classes: {
                          error: classes.erroredLabel
                        }
                      }}/>
    
        <TextField variant="filled" required id="Model" label="Enter Model" value={this.state.vehicle.Model} onChange={this.handleChange} margin="normal" name="Model" 
        error={formErrors.vehicle.Model.length>0}
      helperText={ formErrors.vehicle.Model }
                    InputLabelProps={{
                      classes: {
                        error: classes.erroredLabel
                      }
                    }}/>
     
        <TextField variant="filled" required id="Capacity" label="Enter Capacity" value={this.state.vehicle.Capacity} onChange={this.handleChange} margin="normal" name="Capacity" 
        error={formErrors.vehicle.Capacity.length>0}
        helperText={ formErrors.vehicle.Capacity }
                      InputLabelProps={{
                        classes: {
                          error: classes.erroredLabel
                        }
                      }}/>
       
          <input type="submit" className="submit bg-darkviolet" value="Log In" data-test="submit" />
		  <div className="form-group white">Not a member yet? <a asp-action="SignUp" className="underline white"> SIGN UP</a></div>
        </form>

             </div>
    );
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);
