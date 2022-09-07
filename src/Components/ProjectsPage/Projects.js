import React from 'react';

import ProjectsPage from '../../Pages/ProjectsPage';
import NavBar from '../NavBar';
import Footer from '../Footer';

import proj_data from "../../Data/projects.json"

function filter_proj(proj_index){
  const proj = proj_data.proj_list[proj_index];
  proj.img_source = require(`../../imgs/project/${proj.img_filename}`);
  return proj
}

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // Project Input Template: (Copy Paste and Uncomment it to fill out)
            // organizationName: "",
            // projectTitle: "",
            // description:
            //      "",
            // key: "",
            // apply: true/false,
            // projectType: (number),
            // teamMembers: [
            //    {name:"", position:"", year:""},
            //    {name:"", position:"", year:""},
            // ],
            // roles: [
            //    "",
            // ],
            // aboutOrg:
            //    "",
            // Note: 
            // 1. For projectType: 1. Community Projects 2. Campus Club 3. Startups
            // 2. If the project is current/past project, don't fill out roles and delete the element
            // 3. If the project is upcoming project, don't fill out teamMembers and delete the element
            currentProjects: proj_data.tags_to_project.currentProjects.map(filter_proj),
            upcomingProjects: proj_data.tags_to_project.upcomingProjects.map(filter_proj),
            Projects2020: proj_data.tags_to_project.Projects2020.map(filter_proj),
            Projects2019: proj_data.tags_to_project.Projects2019.map(filter_proj),
        }
    }

    render() {
        return(
            <div>
                <NavBar />
                <ProjectsPage upcomingProjects={this.state.upcomingProjects}
                              currentProjects={this.state.currentProjects}
                              Projects2020={this.state.Projects2020}
                              Projects2019={this.state.Projects2019}/>
                <Footer />
            </div>
        )
    }
} 

export default Projects;