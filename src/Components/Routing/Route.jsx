import React from "react";
import { Route, Redirect } from "react-router-dom";

class RouteWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signed: false,
    };
  }

  render() {
    //alert("changing");
    const { isPrivate } = this.props;
    if (isPrivate && !this.state.signed) {
      return <Redirect to="/" />;
    }
    if (!isPrivate && this.state.signed) {
      return <Redirect to="/Home" />;
    }
    return <Route component={this.props.component} />;
  }
}

export default RouteWrapper;
