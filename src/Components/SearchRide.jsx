import React from "react";
import "../StyleSheets/OfferRide.css";
import { Row, Col } from "react-grid-system";
import "../StyleSheets/App.css";
import { MdLocationOn } from "react-icons/md";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const times = ["5am-9am", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm"];

class SearchRide extends React.Component {
  constructor() {
    super();
    this.state = { isChecked: false, inputs: [] };
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
  }
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  render() {
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
                            : "" + "time "
                        }
                        onClick={this.onButtonChange}
                        value={item}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <input
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
      </div>
    );
  }
}

export default SearchRide;
