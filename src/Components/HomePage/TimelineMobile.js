import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

class TextMobileStepper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }  
  }

  render() {
    const {Steps, Important_Dates, Important_Desc} = this.props.data;
    const activeStep = this.props.activeStep;  

    const maxSteps = Steps.length;
  
    const handleNext = () => {
      this.props.setActiveStep(Number(this.props.activeStep) + 1);
    };
  
    const handleBack = () => {
      this.props.setActiveStep(Number(this.props.activeStep) - 1);
    };

    return (
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{Steps[activeStep]}<br/>({Important_Dates[activeStep]})</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {Important_Desc[activeStep]}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
    )
  }
}
export default TextMobileStepper;