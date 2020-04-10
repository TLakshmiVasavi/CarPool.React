import React from 'react';
import '../StyleSheets/Box.css';
class Box extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
        <div className="Box">{this.props.children}</div>
        );
    }
}

export default Box;