import React from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap';

import NavBar from '../Components/Navbar';
import ProjectBox from '../Components/ProjectsPage/ProjectBox.component';

import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <h1>Projects</h1>
        <Container>
          <Tabs defaultActiveKey="upcoming" className="mb-12">
              <Tab eventKey="upcoming" title="Upcoming Projects">
                  Check back in September for this year's projects.
              </Tab>
              <Tab eventKey="current" title="Current Projects">
                  {this.props.currentProjects.map(project => (
                    <ProjectBox key={project.key} project={project} />
                  ))}
              </Tab>
              <Tab eventKey="Previous" title="Previous Projects">
                  Previous Projects
              </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}

export default ProjectsPage;