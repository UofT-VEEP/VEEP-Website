import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import HomePage from "./HomePage";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    )
  }
}

export default App;
