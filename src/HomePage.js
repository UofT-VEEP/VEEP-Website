import React from 'react';

class HomePage extends React.Component {
  
  render() {
    document.title = "Yicheng Wei";
    return (
      <div>
        {/* Complete your training in here*/}
        <img src="logo192.png"/>
        <h1>Yicheng Wei</h1>
        <p>
          ECE 2T2 + PEY<br/>
          <br/>
          Hi I'm Yicheng, I Love playing ukulele and guitar
        </p>
      </div>
    )
  }
}

export default HomePage;