import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage";
import Projects from "./Components/ProjectsPage/Projects";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    )
  }
}

export default App;
