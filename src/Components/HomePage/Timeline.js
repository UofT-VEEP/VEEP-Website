import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { Card } from 'react-bootstrap';

import './Styles/Timeline.css';

const HorizontalNonLinearStepper = ({ data }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = data.Steps

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div>
    <Box className="TimelineBox">
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
    <Card className="TimelineDesc">
      <Card.Body>
        <Card.Title>{data.Important_Dates[activeStep]}</Card.Title>
        <Card.Text>
          {data.Important_Desc[activeStep]} 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
export default HorizontalNonLinearStepper;