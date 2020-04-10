import React from 'react';
import Logo from './Logo';
import Box from './Box';
import '../StyleSheets/Home.css';

class Home extends React.Component
{
    render()
    {
        return(
            <div className="Home">
                <Logo/>
                <div className="arrange">    
                <Box>Book a Ride</Box>
                <Box>Offer a Ride</Box> 
                </div>
            </div>
        );
    }
}
export default Home;