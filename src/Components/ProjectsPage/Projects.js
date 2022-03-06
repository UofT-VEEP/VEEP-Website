import React from 'react';

import ProjectsPage from '../../Pages/ProjectsPage';
import NavBar from '../Navbar';

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
            // 2. If the project is current project, don't fill out roles and delete the element
            // 3. If the project is upcoming project, don't fill out teamMembers and delete the element
            currentProjects: [
                {
                    organizationName: "Volunteer Engineering Experience Program (VEEP)",
                    projectTitle: "Web App Development",
                    description:
                        "Design and improve the User Interface (UI) of the current club website",
                    key: "VEEP",
                    apply: false,
                    projectType: 2,
                    teamMembers: [
                        {name:"Iris Zuo", position:"Technical Manager", year:"ECE 2T4"},
                        {name:"Felix Deng", position:"Technical Manager", year:"Mechanical 2T3"},
                    ],
                    aboutOrg:
                        "VEEP is a student run organization that focuses on providing meaningful services to the community through student led projects design to prepare student for internships in industry.",
                },
            ],
            upcomingProjects: [],
            Projects2020: [
                {
                    organizationName: "Spelling Bee of Canada (SBOC)",
                    projectTitle: "Web App Development",
                    description:
                         "To support the enrichment of youth literacy, SBOC offers a website learning platform which engages children with flashcards, practice tests, and various learning games. However, the website only supports PC. This project improved their learning platform by making it compatible across all devices",
                    key: "sbocWeb",
                    apply: false,
                    projectType: 2,
                    teamMembers: [
                       {name:"Catherine Zhou", position:"Technical Manager", year:"ECE 2T2"},
                       {name:"Fatima Sadia", position:"Frontend Developer", year:"Math 2T4"},
                    ],
                    aboutOrg:
                       "Spelling Bee of Canada (SBOC) is an educational organization that inspires youth, parents, teachers and the community at large to participate in the education process and celebrate scholastic achievement through an annual spelling bee and other educational programs.",
                }
            ],
            Projects2019: [
                {
                    organizationName: 'Girls eMentorship (GEM)',
                    projectTitle: 'CRM System Development',
                    description:
                        'This project encompasses the development of a GEM specific CRM system to include data from all mentees/mentors, committee & board members, partners, donors. Specific emphasis and importance placed on the quality and governance of the data and potentially developing a tool/GUI to easily get analytics',
                    key: 'Girls eMentorship (GEM) - CRM System Development',
                    apply: false,
                    projectType: 2,
                    teamMembers: [
                        {name:"Catherine Zhou", position:"Technical Manager", year:"ECE 2T2"},
                        {name:"Fatima Sadia", position:"Frontend Developer", year:"Math 2T4"},
                     ],
                    aboutOrg:
                        'Girls E-Mentorship (GEM) is a charitable organization that offers an innovative mentorship program for high school girls facing multiple barriers. GEM equips girls with the necessary skills to achieve their grown-up aspirations, building a diverse network of talented, vibrant women and girls to inspire and support one another. ',
                }
            ],
        }
    }

    render() {
        return(
            <div>
                <NavBar />
                <ProjectsPage currentProjects={this.state.currentProjects}
                              Projects2020={this.state.Projects2020}
                              Projects2019={this.state.Projects2019}/>
            </div>
        )
    }
} 

export default Projects;