import React from 'react';

import TeamPage from '../../Pages/TeamPage';
import NavBar from '../Navbar';

import prePhoto from '../../imgs/teamMembers/mo_zhou_photo.JPG';
import logo from '../../imgs/logos/small.png';

class Team extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTeam: {
                key:"curTeam",
                president: {name:"Catherine Zhou", pic:{prePhoto}, year:"ECE 2T1+1+PEY", email:"catherinemo.zhou@mail.utoronto.ca"},
                BD: [
                    {name:"Ahsan Eslami", pic:{logo}, year:"Mechanical 2T3", email:"a.eslami@mail.utoronto.ca"},
                    {name:"Scott Yu", pic:{logo}, year:"ECE 2T2+PEY", email:"scott.yu@mail.utoronto.ca"},
                ],
                Event: [
                    {name:"Cynthia Chen", pic:{logo}, year:"Mechanical 2T3", email:"yunyi.chen0614@gmail.com"},
                    {name:"Ethan Ma", pic:{logo}, year:"ECE 2T4", email:"haodong.ma@mail.utoronto.ca"},
                ],
                Marketing: [
                    {name:"Alisa Zhu", pic:{logo}, year:"Industrial 2T4", email:"alisazhu811@gmail.com"},
                    {name:"Cony Qin", pic:{logo}, year:"Chemical 2T3", email:"cony.qin@mail.utoronto.ca"},
                ],
                Technical: [
                    {name:"Felix Deng", pic:{logo}, year:"Mechanical 2T3", email:"yuanzhe.deng@mail.utoronto.ca"},
                    {name:"Iris Zuo", pic:{logo}, year:"ECE 2T4", email:"yixian.zuo@mail.utoronto.ca"},
                ],
            },
        }
    }

    render() {
        return(
            <div>
                <NavBar />
                <TeamPage currentTeam={this.state.currentTeam}/>
            </div>
        )
    }
} 

export default Team;