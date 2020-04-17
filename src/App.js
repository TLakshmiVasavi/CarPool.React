import React from 'react';
import OfferRide from './Components/OfferRide';
import LoginSignUp from './Components/LoginSignUp';
import RideDetails from './Components/RideDetails';
import MyRides from './Components/MyRides';
import SearchRide from './Components/SearchRide';
import UserProfile from './Components/UserProfile';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/(Login|SignUp|)/" component={LoginSignUp}/>
          <Route exact path="/Profile" component={UserProfile}/>
          <Route exact path="/MyRides" component={MyRides}/>
          <Route exact path="/OfferRide" component={OfferRide}/>
          <Route exact path="/SearchRide" component={SearchRide}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
