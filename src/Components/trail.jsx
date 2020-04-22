//DatePicker
// import 'date-fns';
// import React from 'react';
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// export default class MaterialUIPickers extends React.Component
//  {
//    constructor(props)
//    {
//      super(props)
//      this.state={
//        selectedDate:new Date(),
//      }
//        this.dateHandler=this.dateHandler.bind(this);
//    }
//    dateHandler(e)
//    {
//      console.log(e);
//      this.setState({["selectedDate"]:e});
//    }
//   // The first commit of Material-UI
// render(){
//   return (
//         <DatePicker
//           dateFormat="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           selected={this.state.selectedDate}
//           onChange={this.dateHandler}
//           minDate={new Date()}
//         />
//   );
// }
//  }








//Add stop
// import React, { Component } from "react";
// import { TextField } from "@material-ui/core";
// import { InputAdornment } from "@material-ui/core";
// import Add from "@material-ui/icons/Add";
// class Trail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasStops: false,
//       stops: [],
//     };
//   }
//   onChangeValue = (event) => {
//     this.setState({ value: event.target.value });
//   };
//   onChange = (e) => {
//     console.log(e.target);
//     const { name, value } = e.target;
//     this.setState((state) => {
//       const stops = state.stops.map((item, j) => {
//         if (j == name) {
//           return value;
//         } else {
//           return item;
//         }
//       });
//       return {
//         stops,
//       };
//     });
//   };
//   onAddItem = () => {
//     this.setState({ ["hasStops"]: true });
//     // not allowed AND not working
//     this.setState((state) => {
//       const stops = state.stops.concat(" ");
//       return {
//         stops,
//       };
//     });
//   };
//   onUpdateItem = (i) => {
//     this.setState((state) => {
//       const list = state.list.map((item, j) => {
//         if (j === i) {
//           return item + 1;
//         } else {
//           return item;
//         }
//       });
//       return {
//         list,
//       };
//     });
//   };
//   render() {
//     return (
//       <div>
//         {this.state.stops.slice(0, -1).map((item, index) => (
//           <TextField
//             key={index}
//             name={index}
//             margin="normal"
//             value={item}
//             onChange={this.onChange}
//           ></TextField>
//         ))}
//         { (this.state.stops.length==0) ? (
//           <button type="button" onClick={this.onAddItem}>
//             Add
//           </button>
//         ) : (
//           <TextField
//             key={this.state.stops.length - 1}
//             name={this.state.stops.length - 1}
//             value={this.state.stops.slice(-1)}
//             onChange={this.onChange}
//             margin="normal"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="start">
//                   <Add onClick={this.onAddItem} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         )}
//       </div>
//     );
//   }
// }
// export default Trail;










//FloatingLabelInput
// import React from 'react';
// import '../StyleSheets/FloatingLabel.css';

// class FloatingLabelInput extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       label: props.label,
// 	  fieldActive:false
//     };

//     this.handleChange = this.handleChange.bind(this);
// 	   this.activateFocus = this.activateFocus.bind(this);
// 	   this.disableFocus = this.disableFocus.bind(this);
//   }

//   activateFocus() {
//     this.setState({
//      fieldActive: true
//     })
//      }

//      disableFocus(e) {
//     if (e.target.value === "") {
//           this.setState({
//             fieldActive: false
//           })
//          }
//      }

//      handleChange(e){
//        this.props.handleChange(e);
//      } 

// render(){
//   return(
//     <div className="field-group">
//     <label className={this.state.fieldActive ? "field-active" : ""}>{this.props.label}</label>
//   <input className="required" type="text" name={this.props.label} onChange={this.handleChange} onFocus={this.activateFocus} onBlur={this.disableFocus} ></input>
//     </div>
//   );
// }
// }

// export default FloatingLabelInput;







//Form validation
// import React, { Component } from "react";
// import { FormErrors } from "./FormErrors";
// import "../StyleSheets/Form.css";

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       formErrors: { email: "", password: "" },
//       emailValid: false,
//       passwordValid: false,
//       formValid: false,
//     };
//   }

//   handleUserInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({ [name]: value }, () => {
//       this.validateField(name, value);
//     });
//   };

//   validateField(fieldName, value) {
//     let fieldValidationErrors = this.state.formErrors;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

//     switch (fieldName) {
//       case "email":
//         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailValid ? "" : " is invalid";
//         break;
//       case "password":
//         passwordValid = value.length >= 6;
//         fieldValidationErrors.password = passwordValid ? "" : " is too short";
//         break;
//       default:
//         break;
//     }
//     this.setState(
//       {
//         formErrors: fieldValidationErrors,
//         emailValid: emailValid,
//         passwordValid: passwordValid,
//       },
//       this.validateForm
//     );
//   }

//   validateForm() {
//     this.setState({
//       formValid: this.state.emailValid && this.state.passwordValid,
//     });
//   }

//   errorClass(error) {
//     return error.length === 0 ? "" : "has-error";
//   }

//   render() {
//     return (
//       <form className="demoForm">
//         <h2>Sign up</h2>
//         <div className="panel panel-default">
//           <FormErrors formErrors={this.state.formErrors} />
//         </div>
//         <div
//           className={`form-group ${this.errorClass(
//             this.state.formErrors.email
//           )}`}
//         >
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             required
//             className="form-control"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleUserInput}
//           />
//         </div>
//         <div
//           className={`form-group ${this.errorClass(
//             this.state.formErrors.password
//           )}`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleUserInput}
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           disabled={!this.state.formValid}
//         >
//           Sign up
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;







//Form Errors
// import React from 'react';

// export const FormErrors = ({formErrors}) =>
//   <div className='formErrors'>
//     {Object.keys(formErrors).map((fieldName, i) => {
//       if(formErrors[fieldName].length > 0){
//         return (
//           <p key={i}>{fieldName} {formErrors[fieldName]}</p>
//         )        
//       } else {
//         return '';
//       }
//     })}
//   </div>







//Ride Details
// import React from "react";
// import { Container, Row, Col } from "react-grid-system";
// import { MdLocationOn } from "react-icons/md";
// import "../StyleSheets/App.css";

// class RideDetails extends React.Component {
//   render() {
//     return (
//       <div className="shadowBox">
//         <Row>
//           <Col md={8}>
//             <h2>Lakshmi Vasavi</h2>
//           </Col>
//           <Col md={4}>
//             <img src="#" />
//           </Col>
//         </Row>
//         <Row>
//           <Col md={4}>
//             <small>From</small>
//             <p>Markapur</p>
//           </Col>
//           <Col md={4}>
//             <div className="dot" />
//             <div className="dot" />
//             <div className="dot" />
//             <MdLocationOn className="darkviolet" />
//           </Col>
//           <Col md={4}>
//             <small>To</small>
//             <p>Y.Palem</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={4}>
//             <small>Date</small>
//             <p>4/15/20</p>
//           </Col>
//           <Col md={4} />
//           <Col md={4}>
//             <small>Time</small>
//             <p>5-9</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={4}>
//             <small>Price</small>
//             <p>180</p>
//           </Col>
//           <Col md={4} />
//           <Col md={4}>
//             <small>Seats Available</small>
//             <p>5</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={4}>
//             <small>Ride Status</small>
//             <p>Completed</p>
//           </Col>
//           <Col md={4} />
//           <Col md={4}>
//             <small>Request Status</small>
//             <p>Approved</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={4}>
//             <small>Vehicle</small>
//             <p>Car</p>
//           </Col>
//           <Col md={4} />
//           <Col md={4}>
//             <small>Vehicle Number</small>
//             <p>12345</p>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default RideDetails;


//Input Context consumer
// import React from "react";
// import Context from "./Context";

// const Input = () => (
//   <Context.Consumer>
//     {context => (
//       <div>
//         <div>the context in Provider is : {context.name}</div>
//         <div>
//           <input
//             type="text"
//             value={context.name}
//             onChange={e => context.updateName(e.target.value)}
//           />
//         </div>
//       </div>
//     )}
//   </Context.Consumer>
// );

// export default Input;




// import Context from "./Context";
// import React from "react";


// class Input extends Component {

//     constructor(props) {
//       super(props);
//       this.state = {        
//         ReturnMessage:""
//       };
//     }

//     ClearData(e){
//         const val = e.target.value;
//         this.setState({
//            ReturnMessage:val
//         });
//         this.props.context.updateValue('ReturnMessage', val);
//     }

//     render() {
//         return (
//            <React.Fragment>
//              <p>{this.props.context.state.Message}</p>}
//              <input onChange={this.ClearData} />
//            </React.Fragment>
//        )
//     }
// }

// const withContext = (Component) => {
//    return (props) => {
//        <Context.Consumer>    
//             {(context) => {
//                return <Component {...props} context={context} />
//             }}
//        </Context.Consumer>
//    }
// }

// export default withContext(Input);







//provider not working
// import React from "react";
// import Context from "./Context";

// class Provider extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       signed:false,
//       user:{
//         id:null,
//         pwd:null
//       }
//     };
// this.toogleAuth=this.toogleAuth.bind(this);
// this.setUser=this.setUser.bind(this);
//   }
// toogleAuth()
// {
//   this.setState({signed:!this.state.signed});
// }

// setUser(user)
// {
//   this.setState({user});
// }

//   render() {
//     return (
//       <Context.Provider
//         value={{
//           user:this.state.user,
//           toogleAuth:this.state.toogleAuth,
//           setUser:this.state.setUser,
//         }}
//       >
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

// export default Provider;

// import React, { Component } from 'react'
// import UserContext from './UserContext'

// export default class HomePage extends Component {
//   static contextType = UserContext
//     componentDidMount()
//     {
//         console.log(this.context);
//     }
  

//   render() {
//     const { user, setUser } = this.context

//     return (
//       <div>
//         <button
//           onClick={() => {
//             const newUser = { name: 'Joe', loggedIn: true }

//             setUser(newUser)
//           }}
//         >
//           Update User
//         </button>
//         <p>{`Current User: ${user.name}`}</p>
//       </div>
//     )
//   }
// }