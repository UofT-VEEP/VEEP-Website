import React from 'react';

import ProjectsPage from '../../Pages/ProjectsPage';

class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentProjects: [
                {
                    organizationName: "VEEP",
                    projectTitle: "Web App Development",
                    description:
                        "Description",
                    key: 1,
                    apply: true,
                    roles: [
                        "Frontend Developer",
                        "Fullstack Developer",
                        "Backend Developer",
                        "Designer",
                    ],
                    aboutOrg:
                        "About Veep",
                },
                {
                    organizationName: "VEEP",
                    projectTitle: "Test title",
                    description:
                        "Description 2",
                    key: 2,
                    apply: false,
                    roles: [
                        "Frontend Developer",
                        "Fullstack Developer",
                        "Backend Developer",
                        "Designer",
                    ],
                    aboutOrg:
                        "About Veep",
                }
            ],
            upcomingProjects: [],
            previousProjects: [],
        }
    }

    render() {
        return(
            <div>
                <h1>ProjectsPage</h1>
                <ProjectsPage currentProjects={this.state.currentProjects} />
            </div>
        )
    }
} 

export default Projects;