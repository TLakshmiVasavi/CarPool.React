import React from 'react';
import { Container, Row, Col } from "react-grid-system";
import { MdLocationOn } from "react-icons/md";
import "../StyleSheets/App.css";

class RideDetails extends React.Component{
render()
{
    return(
            <div className="shadowBox">
                <Row>
                    <Col md={8}>
                        <h2>Lakshmi Vasavi</h2>
                    </Col>
                    <Col md={4}>
                        <img src="#"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <small>From</small>
                        <p>Markapur</p>
                    </Col>
                    <Col md={4}>
                    <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <MdLocationOn className="darkviolet"/>
                    </Col>
                    <Col md={4}>
                        <small>To</small>
                        <p>Y.Palem</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                <small>Date</small>
                        <p>4/15/20</p>
                        </Col>
                        <Col md={4}/>
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
                    <Col md={4}/>
                        <Col md={4}>
                        <small>Seats Available</small>
                        <p>5</p>
                        </Col>
                </Row>
                   <Row>
                       <Col md={4}>
                   <small>Ride Status</small>
                        <p>Completed</p>
                        </Col>
                        <Col md={4}/>
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
                           <Col md={4}/>
                        <Col md={4}>
                           <small>Vehicle Number</small>
                        <p>12345</p>
                           </Col>
                       </Row>
            </div>
    );
}
}

export default RideDetails;