import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactCardFlip from "react-card-flip";
import './Styles/FlipCard.css';
// import project_src from '../../imgs/logos/medium.png';
// const project_src = require("../../imgs/tech/c.png");
let project_list = [
  {
    project_name: "project 1",
    img_source: require("../../imgs/tech/c.png"),
    organization: "company 1",
    desc: "Somthing random about the project 1"
  },
  {
    project_name: "project 2",
    img_source: require("../../imgs/tech/css.jpg"),
    organization: "company 2",
    desc: "Somthing random about the project 2"
  }
];

//For some reason iterating and calling require fails to find the image source
// project_list.forEach((item)=>{
//   item.img_source = require(item.img_source);
// });

const FlipCardImage = {
  flex: 1,
  width: 100,
  height: 450
}

const CarouselCard = {
  border: "1px solid black",
  padding: "20px",
  margin: "20px",
  width: "810px",
  height: "500px"
}

const CarouselCaption = {
  color: '#fff',
  width: "770px",
  textAlign: "left",
  background: 'rgba(0, 0, 0, 0.6)',
  textShadow: '0 1px 2px rgba(0, 0, 0, .6)',
  transform: 'translate(-12%)'
}

const CardItem = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
      <ReactCardFlip isFlipped={isFlipped} className="justify-content-center" flipDirection="horizontal">
        <div className="CardFront CarouselCard" style={CarouselCard} onClick={()=> setIsFlipped((prev) => !prev)}>
          <img className="d-block w-100 FlipCardImage" style={FlipCardImage} src={project.img_source} alt="" />
          <Carousel.Caption className="CarouselCaption" style={CarouselCaption} >
            <h3>{project.project_name}</h3>
            <p>{project.organization}</p>
          </Carousel.Caption>
        </div>
        <div className="CardBack CarouselCard" style={CarouselCard} onClick={()=> setIsFlipped((prev) => !prev)}>
          <p>{project.desc}</p>
        </div>
      </ReactCardFlip>
  );
};

const CardFlipProjects = () => {
  return (
    <Carousel variant='dark'>
      {project_list.map((item, index) => (
        <Carousel.Item>
          <CardItem project={item} key={`card-${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardFlipProjects;