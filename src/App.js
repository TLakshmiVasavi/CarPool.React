// import React from 'react';
// import OfferRide from './Components/OfferRide';
// import LoginSignUp from './Components/LoginSignUp';
// import MyRides from './Components/MyRides';
// import SearchRide from './Components/SearchRide';
// import UserProfile from './Components/UserProfile';
// import { 
//   BrowserRouter as Router, 
//   Route, 
//   Link, 
//   Switch 
// } from 'react-router-dom'; 
// import Trail from './Components/trail';
// import "./StyleSheets/App.css";
// import './StyleSheets/Colors.css';
// import Home from './Components/Home';

// function App() {
//   return (
//     <div className="App">
//       <Router history={history}>
//       <Routes />
//     </Router>
//       {/* <Trail/> */}
//       <Router>
//         <Switch>
//           <Route exact path="/(Login|SignUp|)/" component={LoginSignUp}/>
//           <Route exact path="/Profile" component={UserProfile}/>
//           <Route exact path="/Home" component={Home}/>
//           <Route exact path="/MyRides" component={MyRides}/>
//           <Route exact path="/OfferRide" component={OfferRide}/>
//           <Route exact path="/SearchRide" component={SearchRide}/>
//           {/* <Route path="/Validate" component={Form}/> */}
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Router,Route } from 'react-router-dom';

import history from './Components/Routing/history';
import Routes from './Components/Routing/Routes';
import MenuListComposition from './Components/MenuList';
import './StyleSheets/App.css';
import {UserProvider} from "./Components/UserContext";


function App() {
  return (
    <div className="App">
      <UserProvider>
    <Router history={history}>
    <MenuListComposition/>
    <Routes />
    </Router>
    </UserProvider>
    </div>
  );
}

export default App;
