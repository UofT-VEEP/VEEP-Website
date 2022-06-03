import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactCardFlip from "react-card-flip";
import './Styles/FlipCard.css';
import proj_data from "../projects.json"

const carousel_proj_index_list = proj_data.tags_to_project.homepage_carousel
function filter_proj(proj_index){
  const proj = proj_data.proj_list[proj_index];
  proj.img_source = require(`../../imgs/project/${proj.img_filename}`);
  return proj
}
const project_list = carousel_proj_index_list.map(filter_proj);

const CardItem = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
      <ReactCardFlip isFlipped={isFlipped} className="justify-content-center" flipDirection="horizontal">
        <div className="CardFront CarouselCard" onClick={()=> setIsFlipped((prev) => !prev)}>
          <img className="FlipCardImage" src={project.img_source} alt="" />
          <Carousel.Caption>
            <h3>{project.project_name}</h3>
            <p>{project.organization}</p>
          </Carousel.Caption>
        </div>
        <div className="CardBack CarouselCard" onClick={()=> setIsFlipped((prev) => !prev)}>
          <img className="FlipCardImage flippedImage" src={project.img_source} alt="" />
          <Carousel.Caption className='projectDetails'>
            <h3>Project description</h3>
            {project.desc.map((item) => (
              <p>{item}</p>
            ))}
          </Carousel.Caption>
        </div>
      </ReactCardFlip>
  );
};

const CardFlipProjects = () => {
  return (
    <Carousel fade variant='dark'>
      {project_list.map((item, index) => (
        <Carousel.Item>
          <CardItem project={item} key={`card-${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardFlipProjects;