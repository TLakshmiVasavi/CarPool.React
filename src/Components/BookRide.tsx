import React from "react";
import "../StyleSheets/OfferRide.css";
import { Row, Col } from "react-grid-system";
import "../StyleSheets/App.css";
import { MdLocationOn } from "react-icons/md";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {RouteComponentProps} from "react-router-dom";
import OfferRide from "./OfferRide";

const times = ["5am-9am", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm"];

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
      isChecked: Boolean,
      selectedDate: Date,
      from: string,
      to: string,
      time:string,
      formErrors: {
        from: string,
        to: string,
        time: string,
      },
}

interface IRideDetails
{
  Id:number,
  VehicleNumber:string,
  StartDate:Date,
  Cost:number,
  Provider:string,
  ProviderId:string,
  From:string,
  To:string
}

class BookRide extends React.Component<RouteComponentProps,IState> {
  constructor(props:RouteComponentProps) {
    super(props);
    this.handleChecked = this.handleChecked.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dateHandler=this.dateHandler.bind(this);
       }
       dateHandler(e:any)
       {
         console.log(e);
         this.setState({["selectedDate"]:e});
       }
onButtonChange(e:any)
{
  this.setState({time:e.target.value});
}  

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
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

  handleSubmit(e:any) {
    var x=this;
    e.preventDefault();
    // if (formValid(this.state)) {
      axios
        .post(
          "https://localhost:5001/api/RideApi/BookRide?userId=" +
            this.context.user.mail,
          this.state
        )
        .then(function (res) {
          res.data.map((item:IRideDetails) => (
            <OfferRide {...item}/>
            ))}
          //x.setState({ Matches: res.data });
        )
        .catch(function () {
          alert("Error Loading Page");
        });
    //}
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="OfferRide">
        <Row>
          <Col md={4}>
            <div className="shadowBox">
              <Row>
                <Col md={8}>
                  <h3>Book a Ride</h3>
                  <small>We get you Rides asap!</small>
                </Col>
                <Col md={2}>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={this.handleChecked}
                    />
                    <span className="slider round"></span>
                  </label>
                </Col>
              </Row>

              <div id="first">
                <Row>
                  <Col md={8}>
                    <TextField
                      label="From"
                      value={this.state.from}
                      onChange={this.handleChange}
                      margin="normal"
                      name="from"
                      error={formErrors.from.length > 0}
                      helperText={formErrors.from}
                    />
                    <TextField
                      label="To"
                      value={this.state.to}
                      onChange={this.handleChange}
                      margin="normal"
                      name="to"
                      error={formErrors.to.length > 0}
                      helperText={formErrors.to}
                    />
                  </Col>
                  <Col md={2}>
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <MdLocationOn />
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <small>Date</small>
                    <DatePicker
                      dateFormat="MM/dd/yyyy"
                      //margin="normal"
                      id="date-picker-inline"
                      //label="Date picker inline"
                      selected={this.state.selectedDate}
                      onChange={this.dateHandler}
                      minDate={new Date()}
                    />
                  </Col>
                  <Col md={12}>
                    <small>Time</small>
                    <div
                      data-toggle="button"
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      {times.map((item, index) => (
                        <button
                          type="button"
                          key={index}
                          className={
                            this.state.time === item ? "selected" : "" + "time "
                          }
                          onClick={this.onButtonChange}
                          value={item}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <input
                      onClick={this.handleSubmit}
                      type="submit"
                      className="submit bg-darkorange"
                      value="Submit"
                      data-test="submit"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <Col id="matches" md={10}>
              {/* {this.state.Matches */}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BookRide;
