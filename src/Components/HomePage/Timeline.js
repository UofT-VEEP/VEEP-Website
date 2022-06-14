import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { Card } from 'react-bootstrap';

import './Styles/Timeline.css';

class HorizontalNonLinearStepper extends React.Component {
  constructor(props){
    super(props);  
  }
  render() {
    const {Steps, Important_Dates, Important_Desc} = this.props.data;
    const activeStep = this.props.activeStep;  
    return (
      <div>
      <Box className="TimelineBox">
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {Steps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onClick= {() => this.props.setActiveStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Card className="TimelineDesc">
        <Card.Body>
          <Card.Title>{Important_Dates[activeStep]}</Card.Title>
          <Card.Text>
            {Important_Desc[activeStep]} 
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }
}
export default HorizontalNonLinearStepper;