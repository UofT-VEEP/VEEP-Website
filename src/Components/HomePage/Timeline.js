import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

const HorizontalNonLinearStepper = ({ data }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = data.Steps

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          <Typography variant="caption" sx={{ mt: 2, mb: 1 }}>
            <h3>{data.Important_Dates[activeStep]}</h3>
            <p>{data.Important_Desc[activeStep]}</p>
          </Typography>
        </React.Fragment>
      </div>
    </Box>
  );
}
export default HorizontalNonLinearStepper;