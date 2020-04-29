import React, { Component } from "react";
import axios from "axios";
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import UserContext from "./UserContext";
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

const Gender = [
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Male",
    label: "Male",
  },
];

const vehicleType = [
  {
    value: "Car",
    label: " Car ",
  },
  {
    value: "Bike",
    label: " Bike ",
  },
];

const hasVehicle = [
  {
    value: "true",
    label: "Yes",
  },
  {
    value: "false",
    label: "No",
  },
];

const pwdRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
);

const mailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const phoneRegEx = RegExp(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);

const numberRegEx = RegExp(/^([0-9])*$/);

interface IState{
  [key: string]: any;
  //[index: number]: string; 
  name: string,
  mail: string,
  password: string,
  age: number,
  number: string,
  photo: any,
  gender: string,
  hasVehicle: string,
  vehicle: {
    [key: string]: any;
    model: string,
    number: string,
    capacity: number,
  },
  vehicleType: string,
  showPassword: Boolean,
  formErrors: {
    [key: string]: any;
    name: string,
    mail: string,
    password: string,
    age: string,
    number: string,
    photo: string,
    gender: string,
    hasVehicle: string,
    vehicle: {
      model: string,
      number: string,
      capacity: string,
    },
  },
  //handleChange()
}

class SignUpForm extends Component<RouteComponentProps,IState> {
  static contextType = UserContext;

  constructor(props:RouteComponentProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleVehicleChange = this.handleVehicleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlefile = this.handlefile.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  handleMouseDownPassword(event:any) {
    event.preventDefault();
  }

  async handleSubmit(evt:any) {
    var x=this.props.history;
    //this.props.history.push("/Home");
    const { toggleAuth,setUser } = this.context!;
    evt.preventDefault();
    const data = new FormData();
    Object.keys(this.state).map((i) => data.append(i, this.state[i]));
    await axios.post("https://localhost:5001/api/UserApi/SignUp", data)
      .then(function (response) {
        toggleAuth();
        setUser(response.data);
        x.push("/Home");
      })
      .catch(function () {
        alert("Error Loading Page");
      });
  }

  handleVehicleChange(e:any) {
    const { name, value } = e.target;
    let vehicle = { ...this.state.vehicle };
    let formErrors = { ...this.state.formErrors };
    vehicle[name] = value;
    this.setState({ vehicle });
    if (this.state.hasVehicle && value.length == 0) {
      formErrors[name] = "Required!";
    } else
      if (name == "number") {
        formErrors.number = numberRegEx.test(value)
          ? ""
          : "Please enter a valid number";
      }
  }

  handleChange(e:any) {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    if (value.length == 0) {
      formErrors[name] = "Required!";
    } else {
      switch (name) {
        case "mail":
          formErrors.mail = mailRegex.test(value) ? "" : "invalid mail address";
          break;
        case "password":
          formErrors.password = pwdRegex.test(value)
            ? ""
            : "Please choose a strong password";
          break;
        case "number":
          formErrors.number = phoneRegEx.test(value)
            ? ""
            : "Please enter a valid number";
        default:
          break;
      }
    }

    this.setState({ formErrors });
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlefile(e:any) {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="bg-darkorange rightHalf">
        <form onSubmit={this.handleSubmit}>
          <h2>SignUp</h2>
          <TextField
            variant="filled"
            required
            label="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            name="name"
            error={formErrors.name.length > 0}
            helperText={formErrors.name}
          />
          <TextField
            variant="filled"
            required
            label="Enter Mail"
            value={this.state.mail}
            onChange={this.handleChange}
            margin="normal"
            name="mail"
            error={formErrors.mail.length > 0}
            helperText={formErrors.mail}
          />
          <TextField
            variant="filled"
            required
            label="Enter Phone number"
            value={this.state.number}
            onChange={this.handleChange}
            margin="normal"
            name="number"
            error={formErrors.number.length > 0}
            helperText={formErrors.number}
          />
          <TextField
            variant="filled"
            required
            label="Enter Age"
            value={this.state.age}
            onChange={this.handleChange}
            margin="normal"
            name="age"
            error={formErrors.age.length > 0}
            helperText={formErrors.age}
          />
          <TextField
            margin="normal"
            select
            label="Gender"
            value={Gender}
            onChange={this.handleChange}
            variant="filled"
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

          <TextField
            margin="normal"
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

          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handleChange}
              error={formErrors.password.length > 0}
              //helperText={formErrors.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge="end"
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                        <VisibilityOff />
                      )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <input
            type="file"
            name="photo"
            onChange={this.handlefile}
          />

          <TextField
            margin="normal"
            name="vehicleType"
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

          <TextField
            variant="filled"
            required
            label="Enter Car number"
            value={this.state.vehicle.number}
            onChange={this.handleChange}
            margin="normal"
            name="number"
            error={formErrors.vehicle.number.length > 0}
            helperText={formErrors.vehicle.number}
          />

          <TextField
            variant="filled"
            required
            label="Enter model"
            value={this.state.vehicle.model}
            onChange={this.handleChange}
            margin="normal"
            name="model"
            error={formErrors.vehicle.model.length > 0}
            helperText={formErrors.vehicle.model}
          />

          <TextField
            variant="filled"
            required
            label="Enter capacity"
            value={this.state.vehicle.capacity}
            onChange={this.handleChange}
            margin="normal"
            name="capacity"
            error={formErrors.vehicle.capacity.length > 0}
            helperText={formErrors.vehicle.capacity}
          />

          <input
            type="submit"
            className="submit bg-darkviolet"
            value="Log In"
            data-test="submit"
          />
          <div className="form-group white">
            Not a member yet?
            <a className="underline white" onClick={() => {
              this.props.history.push("/Login");
            }}>>
              Login
            </a>
          </div>
        </form>
      </div>
    );
  }

}

export default SignUpForm;