import React from 'react';

import AboutPage from '../../Pages/AboutPage';
import NavBar from '../NavBar';
import Footer from '../Footer';


import Catherine from '../../imgs/teamMembers/CatherineZhou.JPG';
import Ahsan from '../../imgs/teamMembers/AhsanEslami.png';
import Scott from '../../imgs/teamMembers/ScottYu.jpeg';
import Cynthia from '../../imgs/teamMembers/CynthiaChen.JPG';
import Ethan from '../../imgs/teamMembers/EthanMa.JPG';
import Alisa from '../../imgs/teamMembers/AlisaZhu.JPG';
import Cony from '../../imgs/teamMembers/ConyQin.JPG';
import Felix from '../../imgs/teamMembers/FelixDeng.JPG';
import Iris from '../../imgs/teamMembers/IrisZuo.JPG';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTeam: {
                key: "curTeam",
                president: {
                    name: "Catherine Zhou", pic: Catherine, year: "ECE 2T1+1+PEY", email: "catherinemo.zhou@mail.utoronto.ca", _linkedIn: "https://www.linkedin.com/in/catherine-zhou-1016/",
                    get linkedIn() {
                        return this._linkedIn;
                    },
                    set linkedIn(value) {
                        this._linkedIn = value;
                    },
                },
                BD: [
                    {
                        name: "Ahsan Eslami", pic: Ahsan, year: "Mechanical 2T3", email: "a.eslami@mail.utoronto.ca", _linkedIn: "https://www.linkedin.com/in/ahsan-eslami-9133b722a/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                    {
                        name: "Scott Yu", pic: Scott, year: "ECE 2T2+PEY", email: "scott.yu@mail.utoronto.ca", _linkedIn: "https://www.linkedin.com/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                ],
                Event: [
                    {
                        name: "Cynthia Chen", pic: Cynthia, year: "Mechanical 2T3", email: "yunyi.chen0614@gmail.com", _linkedIn: "https://www.linkedin.com/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                    {
                        name: "Ethan Ma", pic: Ethan, year: "ECE 2T4", email: "haodong.ma@mail.utoronto.ca", _linkedIn: "https://www.linkedin.com/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                ],
                Marketing: [
                    {
                        name: "Alisa Zhu", pic: Alisa, year: "Industrial 2T4", email: "alisazhu811@gmail.com", _linkedIn: "https://www.linkedin.com/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                    {
                        name: "Cony Qin", pic: Cony, year: "Chemical 2T3", email: "cony.qin@mail.utoronto.ca", _linkedIn: "https://www.linkedin.com/in/cony-qin-7623121b9/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                ],
                Technical: [
                    {
                        name: "Felix Deng", pic: Felix, year: "Mechanical 2T3", email: "yuanzhe.deng@mail.utoronto.ca", _linkedIn: "https://www.linkedin.com/in/felix-deng-b845331b3/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                    {
                        name: "Iris Zuo", pic: Iris, year: "ECE 2T4", email: "yixian.zuo@mail.utoronto.ca", _linkedIn: "https://www.linkedin.com/in/zuoyixian/",
                        get linkedIn() {
                            return this._linkedIn;
                        },
                        set linkedIn(value) {
                            this._linkedIn = value;
                        },
                    },
                ],
            },
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <AboutPage currentTeam={this.state.currentTeam} />
                <Footer />
            </div>
        )
    }
}

export default AboutUs;