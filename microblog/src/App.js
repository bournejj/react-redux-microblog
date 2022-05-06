import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import React, {useState} from 'react';
import Home from './Homepage';
import { v4 as uuidv4 } from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  




  return (
    <div className="App">
<NavBar/>
<Routes/>

    </div>
  );
}

export default App;
