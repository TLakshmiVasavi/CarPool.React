import React from 'react';
import UserContext from './UserContext'
  

class Home extends React.Component
{
    static contextType = UserContext
    render()
    {
        const {username}=this.context
        return(
            <div className="Home">
                <div className="center">    
                <div className="box bg-darkviolet">Book a Ride</div>
                <div className="box bg-darkorange">Offer a Ride</div>
                </div>
            </div>
        );
    }
}
export default Home;