
import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import history from './Components/Routing/history';
import Routes from './Components/Routing/Routes.tsx';
import MenuListComposition from './Components/MenuList';
import './StyleSheets/App.css';
import {UserProvider} from "./Components/UserContext";
import Header from "./Components/test.tsx";

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
