import React from 'react';

class HomePage extends React.Component {
  
  render() {
    return (
      <div>
        {/* Complete your training in here*/}
        <div>Welcome to VEEP Website!</div>

        <br></br>
        <hr></hr>
        <h3>Here's training a. Add an image of your choice</h3>
        <img src="/src/logo.svg" alt="logo for something" sytle={{width:"128px", height:"128px"}}/>

        <br></br>
        <hr></hr>
        <h3>Here's traning b. Add a tilte of your name</h3>
        <h1 sytle="font-size:200px;">Yuhao Guan</h1>

        <br></br>
        <hr></hr>
        <h3>Here's traning c. Add a shor inroduction aobut yourself</h3>
        <p>Hey guys! I'm Kevin, and I'm a second year ECE student.</p>
      </div>
    )
  }
}

export default HomePage;