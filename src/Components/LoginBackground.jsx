import React from 'react';
import '../StyleSheets/LoginBackground.css';
import Logo from './Logo';

class LoginBackground extends React.Component
{
    render()
    {
        return (
        <React.Fragment>
            <div className="leftHalf">
                <Logo></Logo>
        <div className="heading">TURN<div className="miles"> MILES</div><br />INTO <div className="money">MONEY</div><div className="normal">RIDES ON TAP</div></div>
        </div>
        </React.Fragment>
        );
    }
}

export default LoginBackground;