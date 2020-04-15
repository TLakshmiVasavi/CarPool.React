import React from 'react';
import Logo from './Logo';

class Home extends React.Component
{
    render()
    {
        return(
            <div className="Home">
                <Logo/>
                <div className="center">    
                <div className="box">Book a Ride</div>
                <div className="box">Offer a Ride</div>
                </div>
            </div>
        );
    }
}
export default Home;