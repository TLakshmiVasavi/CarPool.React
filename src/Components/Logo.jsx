import React, { Component } from 'react';
import '../StyleSheets/Logo.css';

function Logo()
{
    return(
        <img src={require('../images/logo.png')}></img>
    );
}

export default Logo;