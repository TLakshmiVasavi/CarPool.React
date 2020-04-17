import React, { Component } from 'react';
import axios from 'axios';
import FloatingLabelInput from './FloatingLabelInput';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      mail:'',
      password: '',
      age:'',
      number:'',
      photo:'',
      gender:'',
      hasVehicle:'',
      vehicle:{
        Model:'',
        Number:'',
        Capacity:''
      },
      vehicleType:'',
	  error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.handlefile=this.handlefile.bind(this);
  }

  

  dismissError() {
    this.setState({ error: '' });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const formData={

    }
    const data=new FormData();
    Object.keys(this.state).map(i=>data.append(i,this.state[i]));
    //data.append("user",this.state);
    console.log(data);
    alert("submitting");
  await axios.post('https://localhost:5001/api/UserApi/SignUp',
    this.state
    )
     .then(function(response){
       console.log(response);
       console.log(response.data);
       
       //Perform action based on response
   })
     .catch(function(error){
       
      console.log(error);
      console.log(error.data);
       //Perform action based on error
     });
  }

  
  handleChange(e) {
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
    return (
      <div className="bg-darkorange rightHalf">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
		  <h2>SignUp</h2>
      <FloatingLabelInput label="name" data="" handleChange={this.handleChange} />
        <FloatingLabelInput label="mail" data="" handleChange={this.handleChange} />
		  <FloatingLabelInput label="password" data="" handleChange={this.handleChange}/>
          <FloatingLabelInput label="number" data="" handleChange={this.handleChange} />
          <FloatingLabelInput label="age" data="" handleChange={this.handleChange} />
          <input type="file" id="photo" name="photo" onChange={this.handlefile}/>
          <select defaultValue="Select Gender" name="gender" onChange={this.handleChange}>
              <option value="Select Gender">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
          </select>
          <select defaultValue="Has Car"  name="hasVehicle" onChange={this.handleChange}>
              <option value="Has Car">Has Car</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
          <select defaultValue="Select Vehicle" name="vehicleType" onChange={this.handleChange}>
              <option value="Select Vehicle">Select Vehicle</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
          </select>
          <FloatingLabelInput label="Number" data="" handleChange={this.handleChange} />
          <FloatingLabelInput label="Model" data="" handleChange={this.handleChange} />
          <FloatingLabelInput label="Capacity" data="" handleChange={this.handleChange} />
          <input type="submit" className="btn bg-darkviolet" value="Log In" data-test="submit" />
		  <div className="form-group white">Not a member yet? <a asp-action="SignUp" className="underline white"> SIGN UP</a></div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;