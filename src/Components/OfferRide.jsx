import React from "react";
import { Row, Col } from "react-grid-system";
import { MdLocationOn } from "react-icons/md";
import { InputAdornment } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "../StyleSheets/OfferRide.css";
import "../StyleSheets/Toogle.css";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

const times = ["5am-9am", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm"];

class OfferRide extends React.Component {
  constructor() {
    super();
    this.state = {
      totalNoOfSeats: 3,
      noOfSeats: null,
      isChecked: false,
      selectedDate: new Date(),
      stops: [],
      from: "",
      to: "",
      time: "",
      formErrors: {
        from: "",
        to: "",
        stops: [],
        time: "",
      },
      firstHalf: true,
    };
    this.handleChecked = this.handleChecked.bind(this);
    this.dateHandler = this.dateHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStopChange = this.onStopChange.bind(this);
    this.addStop = this.addStop.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onButtonChange = this.onButtonChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    if (value.length == 0) {
      formErrors[name] = "Required!";
    }
    this.setState({ formErrors, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (formValid(this.state)) {
      axios({
        method: "post",
        url: "https://localhost:5001/api/UserApi/Login",
        data: this.state,
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

  onStopChange(e) {
    // console.log(e.target);
    const { name, value } = e.target;
    this.setState((state) => {
      const stops = state.stops.map((item, j) => {
        if (j == name) {
          return value;
        } else {
          return item;
        }
      });
      return {
        stops,
      };
    });
  }

  dateHandler(e) {
    // console.log(e);
    this.setState({ ["selectedDate"]: e });
  }

  addStop() {
    // not allowed AND not working
    this.setState((state) => {
      const stops = state.stops.concat("");
      return {
        stops,
      };
    });
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  onNextClick() {
    this.setState({ firstHalf: false });
  }

  onButtonChange(e) {
    // console.log(e);
    this.setState({ time: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { formErrors } = this.state;
    return (
      <div className="OfferRide">
        <Col md={4}>
          <div className="shadowBox">
            <Row>
              <Col md={8}>
                <h3>Offer a Ride</h3>
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

            {this.state.firstHalf ? (
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
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      selected={this.state.selectedDate}
                      onChange={this.dateHandler}
                      minDate={new Date()}
                    />
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
                            this.state.time === item
                              ? "selected"
                              : "" + "time"
                          }
                          onClick={this.onButtonChange}
                          value={item}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <a href="#" className="next" onClick={this.onNextClick}>
                      Next&raquo;
                    </a>
                  </Col>
                </Row>
              </div>
            ) : (
              <div id="second">
                <Row>
                  <Col md={8}>
                    {this.state.stops.length == 0 ? (
                      <button type="button" onClick={this.addStop}>
                        Add
                      </button>
                    ) : (
                      <React.Fragment>
                        {this.state.stops.slice(0, -1).map((item, index) => (
                          <TextField
                            label={"Stop " + (index + 1)}
                            value={item}
                            onChange={this.onStopChange}
                            margin="normal"
                            name={index}
                            error={formErrors.from.length > 0}
                            helperText={formErrors.from}
                          />
                        ))}
                        <TextField
                          label={"Stop " + this.state.stops.length}
                          key={this.state.stops.length - 1}
                          name={this.state.stops.length - 1}
                          value={this.state.stops.slice(-1)}
                          onChange={this.onStopChange}
                          margin="normal"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <Add onClick={this.addStop} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </React.Fragment>
                    )}
                  </Col>
                </Row>
                <div className="row">
                  <small>Available Seats</small>
                  <div className="btn-group" role="group">
                    {Array.from(
                      { length: this.state.totalNoOfSeats },
                      (_, k) => (
                        <button key={k} type="button" className="number">
                          {k}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className="form-group">
                <input
            type="submit"
            className="submit bg-darkorange"
            value="Submit"
            data-test="submit"
          />
                </div>
              </div>
            )}
          </div>
        </Col>
      </div>
    );
  }
}

export default OfferRide;
