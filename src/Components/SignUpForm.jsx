import React, { Component } from 'react';
import axios from 'axios';
import FloatingLabelInput from './FloatingLabelInput';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
	  error: '',
    };

    
    this.handleChange = this.handleChange.bind(this);
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

  
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value,
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
		  <h2>SignUp</h2>
        <FloatingLabelInput label="id" data="" handleChange={this.handleChange}/>
        <FloatingLabelInput label="mail" data="" handleChange={this.handleChange} />
		  <FloatingLabelInput label="password" data="" handleChange={this.handleChange}/>
          <FloatingLabelInput label="number" data="" handleChange={this.handleChange} />
          <FloatingLabelInput label="age" data="" handleChange={this.handleChange} />
          <input type="file" id="photo" name="photo" />
          <select value={this.state.value} defaultValue="Select Gender" name="Gender" onChange={this.handleChange}>
              <option value="Select Gender">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
          </select>
          <select value={this.state.value} defaultValue="Has Car"  name="Has Car" onChange={this.handleChange}>
              <option value="Has Car">Has Car</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
          <select value={this.state.value} defaultValue="Select Vehicle" name="VehicleType" onChange={this.handleChange}>
              <option value="Select Vehicle">Select Vehicle</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
          </select>
          <FloatingLabelInput label="Number" data="" handleChange={this.handleChange} />
          <FloatingLabelInput label="Model" data="" handleChange={this.handleChange} />
          <FloatingLabelInput label="Capacity" data="" handleChange={this.handleChange} />
          <input type="submit" className="btn" value="Log In" data-test="submit" />
		  <div className="form-group white">Not a member yet? <a asp-action="SignUp" className="underline"> SIGN UP</a></div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;