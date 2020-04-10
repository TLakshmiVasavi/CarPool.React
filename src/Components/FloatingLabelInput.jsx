import React from 'react';
import '../StyleSheets/FloatingLabel.css';

class FloatingLabelInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
	  fieldActive:false
    };

    this.handleChange = this.handleChange.bind(this);
	   this.activateFocus = this.activateFocus.bind(this);
	   this.disableFocus = this.disableFocus.bind(this);
  }

  activateFocus() {
    this.setState({
     fieldActive: true
    })
     }

     disableFocus(e) {
    if (e.target.value === "") {
          this.setState({
            fieldActive: false
          })
         }
     }

     handleChange(e){
       this.props.handleChange(e);
     } 

render(){
  return(
    <div className="field-group">
    <label className={this.state.fieldActive ? "field-active" : ""}>{this.props.label}</label>
    <input type="text" name={this.props.label} onChange={this.handleChange} onFocus={this.activateFocus} onBlur={this.disableFocus} />
    </div>
  );
}
}

export default FloatingLabelInput;