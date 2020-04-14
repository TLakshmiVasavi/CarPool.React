import React from 'react';
import Toogle from './Toogle';
import ShadowBox from './ShadowBox';
import FloatingLabelInput from './FloatingLabelInput';
import '../StyleSheets/OfferRide.css';
import { Container, Row, Col } from 'react-grid-system';
import Dot from './Dot';

class OfferRide extends React.Component
{
    render()
    {
        return(
            
            <ShadowBox>
                <Container>
                <Row>
                    <Col md={8}>
                        <h3>Offer a Ride</h3>
                        <p>We get you Rides asap!</p>
                    </Col>
                    <Col md={2}>
                        <label className="switch">
                            <input type="checkbox" className="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FloatingLabelInput label="Source"/>
                        <FloatingLabelInput label="Destination"/>
                    </Col>
                    <Col >
                        <Dot/>
                        <Dot/>
                        <Dot/>
                    </Col>
                </Row>
                <Row>
                    <FloatingLabelInput label="Date"/>
                </Row>
                </Container>
</ShadowBox>

        );
    }
}

export default OfferRide;