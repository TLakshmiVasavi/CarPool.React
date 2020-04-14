import React from 'react';
import '../StyleSheets/ShadowBox.css';

class ShadowBox extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className="ShadowBox">{this.props.children}</div>
        );
    }
}

export default ShadowBox;