import React from 'react';
import '../StyleSheets/UnderLine.css';

class UnderLinedText extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render()
    {
        return(
            <span className="underline">{this.props.children}</span>
        );
    }
}

export default UnderLinedText;