import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HeaderScreen from './Components/HomePage/HeaderScreenv2';
import MainContent from './Components/HomePage/MainContent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HomePage.css';

export function detectMob() {

  return (window.innerWidth <= 764);
}

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }
  
  render() {
    return (
      <div>
        <NavBar />
        {/* <HeaderScreen />  */}
        <MainContent />
        {
          detectMob() ? null: <Footer />
        }
      </div>
    )
  }
}

export default HomePage;