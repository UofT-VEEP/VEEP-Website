import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
  // Un-comment this for week 4 content 
  // constructor(props){
  //   super(props);

  //   this.state = {}
  // }
  
  render() {
    return (
      <div>
        <div align='center'>
          <img src="uoft_logo.jpg" alt="UofT Logo" width="179" height="79" />
          <h1>Welcome to VEEP Website!</h1>
        </div>
        <div>
          <h2><u>About me</u></h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<b>Name :</b> Binaru Appuhamy<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<b>Current year :</b> ECE PEY<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<b>Hobbies :</b> Read manga and watch anime!<br />
              </p>
        </div>
      </div>
    )
  }
}

export default HomePage;