import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactCardFlip from "react-card-flip";
import './Styles/FlipCard.css';
import proj_data from "../projects.json"

const carousel_proj_index_list = proj_data.tags_to_project.homepage_carousel
function filter_proj(proj_index){
  const proj = proj_data.proj_list[proj_index];
  proj.img_source = require(proj.img_source);
  return proj
}
const project_list = carousel_proj_index_list.map(filter_proj);

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