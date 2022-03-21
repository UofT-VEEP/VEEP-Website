import React from 'react';
import FadeIn from 'react-fade-in';

import BannerLogo from '../../imgs/logos/medium.png';

class TitleBox extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        titles:[
          {number: 1, content: "Community Engagement."},
          {number: 2, content: "Learning Opportunities."},
          {number: 3, content: "Industry Experience."},
        ],
      }
    }
    
    render() {
      return (
        <FadeIn className="HeaderEnter">
            <img src={BannerLogo} alt="VEEP Logo" id="MediumBannerLogo"/>
            {this.state.titles.map(title => (
                <h1 key={title.number} className="HeaderText">{title.content}</h1>
            ))}
        </FadeIn>
      )
    }
  }
  
export default TitleBox;