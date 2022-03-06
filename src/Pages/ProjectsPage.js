import React from 'react';
import {Container, Tabs, Tab, Accordion} from 'react-bootstrap';

import ProjectBox from '../Components/ProjectsPage/ProjectBox.component';

import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <Container>
          <Tabs defaultActiveKey="upcoming" className="mb-12">
              <Tab eventKey="upcoming" title="Upcoming Projects">
                Check back in September for this year's projects.
              </Tab>
              <Tab eventKey="current" title="Current Projects">
                <div>
                  <h2>Community Projects</h2>
                  <p>No community project this year</p>
                  {this.props.currentProjects.map(project => (
                    project.projectType === 1 ? (
                      <ProjectBox key={project.key} project={project} />
                    ) : null
                  ))}
                </div>
                <div>
                  <h2>Campus Club</h2>
                  {this.props.currentProjects.map(project => (
                    project.projectType === 2 ? (
                      <ProjectBox key={project.key} project={project} />
                    ) : null
                  ))}
                </div>
                <div>
                  <h2>Startup Projects</h2>
                  <p>No startup project this year</p>
                  {this.props.currentProjects.map(project => (
                    project.projectType === 3 ? (
                      <ProjectBox key={project.key} project={project} />
                    ) : null
                  ))}
                </div>
              </Tab>
              <Tab eventKey="Previous" title="Previous Projects">
                <Accordion>
                  <Accordion.Item eventKey="2020">
                    <Accordion.Header>2020-2021</Accordion.Header>
                    <Accordion.Body>
                      {this.props.Projects2020.map(project => (
                      <ProjectBox key={project.key} project={project} />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2018">
                    <Accordion.Header>2018-2019</Accordion.Header>
                    <Accordion.Body>
                      {this.props.Projects2019.map(project => (
                      <ProjectBox key={project.key} project={project} />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}

export default ProjectsPage;