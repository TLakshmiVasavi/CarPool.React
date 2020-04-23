import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../UserContext";

class RouteWrapper extends React.Component {
  static contextType = UserContext;
  render() {
    let {signed}=this.context;
    const { isPrivate } = this.props;
    if (isPrivate && !signed) {
      return <Redirect to="/" />;
    }
    if (!isPrivate && signed) {
      return <Redirect to="/Home" />;
    }
    return <Route exact path={this.props.path} component={this.props.component} isPrivate={isPrivate}/>
  }
}

export default RouteWrapper;
