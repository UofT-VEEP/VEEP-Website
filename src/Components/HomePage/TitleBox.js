import React from 'react';
import FadeIn from 'react-fade-in';

import BannerLogo from '../../imgs/logos/medium.png';

class TitleBox extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        titles:[
            'Community Engagement.',
            'Learning Opportunities.',
            'Industry Experience.',
        ],
      }
    }
    
    render() {
      return (
        <FadeIn className="HeaderEnter">
            <img src={BannerLogo} alt="VEEP Logo" id="MediumBannerLogo"/>
            {this.state.titles.map(title => (
                <h1 className="HeaderText">{title}</h1>
            ))}
        </FadeIn>
      )
    }
  }
  
export default TitleBox;