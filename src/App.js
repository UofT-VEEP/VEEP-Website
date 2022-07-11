import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage";
import Projects from "./Components/ProjectsPage/Projects";
import Events from "./Components/EventPage/Events";
import AboutUs from "./Components/AboutPage/AboutUs";
import ContactUs from "./Pages/ContactPage";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    )
  }
}

export default App;
