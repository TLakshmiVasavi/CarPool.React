
import React from 'react';
import { Router,Route } from 'react-router-dom';

import history from './Components/Routing/history';
import Routes from './Components/Routing/Routes';
import MenuListComposition from './Components/MenuList';
import './StyleSheets/App.css';
import {UserProvider} from "./Components/UserContext";
import RegistrationForm from "./Components/trail";

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
    //<RegistrationForm/>
  );
}

export default App;
