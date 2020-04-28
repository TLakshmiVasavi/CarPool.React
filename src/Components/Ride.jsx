import React from "react";
import "../StyleSheets/OfferRide.css";
import { Row, Col } from "react-grid-system";
import "../StyleSheets/App.css";
import { MdLocationOn } from "react-icons/md";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const times = ["5am-9am", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm"];

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

class BookRide extends React.Component {
  constructor() {
    super();
    this.state = {
      Matchings: [],
      isChecked: false,
      selectedDate: new Date(),
      from: "",
      to: "",
      time: "",
      formErrors: {
        from: "",
        to: "",
        time: "",
      },
    };
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (formValid(this.state)) {
      axios
        .post(
          "https://localhost:5001/api/RideApi/BookRide?userId=" +
            this.context.user.mail,
          this.state
        )
        .then(function (res) {
          this.setState({ Matchings: res.data });
        })
        .catch(function () {
          alert("Error Loading Page");
        });
    }
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
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
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
              {this.state.Matches.map((item) => (
                <div className="shadowBox">
                  <Row>
                    <Col md={8}>
                      <h2>{item.id}Lakshmi Vasavi</h2>
                    </Col>
                    <Col md={4}>
                      <img src="#" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <small>From</small>
                      <p>{item.source}Markapur</p>
                    </Col>
                    <Col md={4}>
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <MdLocationOn className="darkviolet" />
                    </Col>
                    <Col md={4}>
                      <small>To</small>
                      <p>{item.destination}Y.Palem</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <small>Date</small>
                      <p>{item.startDateTime}4/15/20</p>
                    </Col>
                    <Col md={4} />
                    <Col md={4}>
                      <small>Time</small>
                      <p>5-9</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <small>Price</small>
                      <p>180</p>
                    </Col>
                    <Col md={4} />
                    <Col md={4}>
                      <small>Seats Available</small>
                      <p>5</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <small>Ride Status</small>
                      <p>{item.isRideCompleted}Completed</p>
                    </Col>
                    <Col md={4} />
                    <Col md={4}>
                      <small>Request Status</small>
                      <p>Approved</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <small>Vehicle</small>
                      <p>Car</p>
                    </Col>
                    <Col md={4} />
                    <Col md={4}>
                      <small>Vehicle Number</small>
                      <p>{item.vehicleId}12345</p>
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BookRide;
