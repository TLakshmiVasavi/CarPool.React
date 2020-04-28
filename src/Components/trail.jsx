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
//           selected={selectedDate}
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
//         {stops.slice(0, -1).map((item, index) => (
//           <TextField
//             key={index}
//             name={index}
//             margin="normal"
//             value={item}
//             onChange={this.onChange}
//           ></TextField>
//         ))}
//         { (stops.length==0) ? (
//           <button type="button" onClick={this.onAddItem}>
//             Add
//           </button>
//         ) : (
//           <TextField
//             key={stops.length - 1}
//             name={stops.length - 1}
//             value={stops.slice(-1)}
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
//     <label className={fieldActive ? "field-active" : ""}>{this.props.label}</label>
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
//     let fieldValidationErrors = formErrors;
//     let emailValid = emailValid;
//     let passwordValid = passwordValid;

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
//       formValid: emailValid && passwordValid,
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
//           <FormErrors formErrors={formErrors} />
//         </div>
//         <div
//           className={`form-group ${this.errorClass(
//             formErrors.email
//           )}`}
//         >
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             required
//             className="form-control"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={this.handleUserInput}
//           />
//         </div>
//         <div
//           className={`form-group ${this.errorClass(
//             formErrors.password
//           )}`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={this.handleUserInput}
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           disabled={!formValid}
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
//   this.setState({signed:!signed});
// }

// setUser(user)
// {
//   this.setState({user});
// }

//   render() {
//     return (
//       <Context.Provider
//         value={{
//           user:user,
//           toogleAuth:toogleAuth,
//           setUser:setUser,
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






//without restricting url
// import React from 'react';
// import OfferRide from './Components/OfferRide';
// import LoginSignUp from './Components/LoginSignUp';
// import MyRides from './Components/MyRides';
// import SearchRide from './Components/SearchRide';
// import UserProfile from './Components/UserProfile';
// import { 
//   BrowserRouter as Router, 
//   Route, 
//   Link, 
//   Switch 
// } from 'react-router-dom'; 
// import Trail from './Components/trail';
// import "./StyleSheets/App.css";
// import './StyleSheets/Colors.css';
// import Home from './Components/Home';

// function App() {
//   return (
//     <div className="App">
//       <Router history={history}>
//       <Routes />
//     </Router>
//       {/* <Trail/> */}
//       <Router>
//         <Switch>
//           <Route exact path="/(Login|SignUp|)/" component={LoginSignUp}/>
//           <Route exact path="/Profile" component={UserProfile}/>
//           <Route exact path="/Home" component={Home}/>
//           <Route exact path="/MyRides" component={MyRides}/>
//           <Route exact path="/OfferRide" component={OfferRide}/>
//           <Route exact path="/SearchRide" component={SearchRide}/>
//           {/* <Route path="/Validate" component={Form}/> */}
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { createForm, field, useFluentForm } from "react-fluent-form";
// import * as yup from 'yup';
// import { TextField } from "@material-ui/core";
// import { addField, RawField } from "react-fluent-form";

// interface

// const formConfig = createForm()({
//   username: field.text(),
//   gender: field.radio().name("gender").unselectable(),
//   password: field.password().validateOnSubmitOnly()
// });
// // addField("datePicker", (initialValue:field.DateValue() = null) =>
// //   field.raw(initialValue).withValueProp("selected")
// // );

// class RegistrationForm extends React.Component {
//   // constructor()
//   // {
//   //   this.state= {
//   //     values,
//   //     touched,
//   //     validity,
//   //     errors,
//   //     fields,
//   //     handleSubmit
//   //   } = useFluentForm(formConfig);

//   // }
//  constructor(){ 
//   const {
//     values,
//     touched,
//     validity,
//     errors,
//     fields,
//     handleSubmit
//   } = useFluentForm(formConfig);
  

//   //  handleSubmitSuccess = () => console.log(values);

//   // handleSubmitFailure = () => console.log(errors);
// render(){
//   return (
//     <form>
//       <TextField
//           className="bg-white"
//             // required
//              label="Id"
//             margin="normal"
//             {...fields.username}
//              error={touched.username && !validity.username}
//              helperText={errors.username}
//           />
//           <TextField
//           className="bg-white"
//             // required
//              label="Id"
//             margin="normal"
//             {...fields.password}
//              error={touched.password && !validity.password}
//              helperText={errors.password}
//           />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// }
// export default RegistrationForm;










//NOT WORKING
// import implement, { Interface, type } from 'implement-js'

// // CommonJS
// const implementjs = require('implement-js')
// const implement = implementjs.default
// const { Interface, type } = implementjs


// class Root extends React.Component   {
//   constructor(props) {
//       super(props);

//       this.state = {
//           // populate state fields according to props fields
//       };
//   }

//   render() {
//       return (
//           <div>
//               <NavBar/>
//               <Jumbotron content={ hero } />
//               <ContentPanel content={ whatIs } />
//               <ContentPanel content={ aboutOne } />
//               <ContentPanel content={ aboutTwo } />
//               <ContentPanel content={ testimonial } />
//               <Footer content={ footer } />
//           </div>
//       )
//   }
// }

// class myComponent<P, S> extends React.Component<>{

// }



// interface IYoState{
//   count: number;
// }

// export class YoComponent extends React.Component<P>{
//   constructor(props){
//     super(props);
//     this.state = { count: 0 };
//   }
//   render(){
//     return <button onClick={ this.increaseCounter} >
//              <p>Current count: { this.state.count }</p>
//            </button>;
//     };
//   increaseCounter(){
//     this.setState({ count: this.state.count +1 })
//   }
// }