import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Card } from 'react-bootstrap';

import './Styles/Timeline.css';


class HorizontalNonLinearStepper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popToolTip: new Array(this.props.data.Steps.length).fill(false),
    }  
  }

  render() {
    const {Steps, Important_Dates, Important_Desc} = this.props.data;
    const activeStep = this.props.activeStep;  

    const handleUpdateToolTip = (index, value) => {
      const updatedArray = [...this.state.popToolTip];
      updatedArray[index] = value;
      this.setState({popToolTip: updatedArray});
    };

    const handleTimelineClick = (index) => {
      this.props.setActiveStep(index);
      handleUpdateToolTip(index, true);
    };

    return (
      <div>
      <Box className="TimelineBox">
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {Steps.map((label, index) => (
            <Step key={label}>
              <Tooltip arrow title={Important_Desc[index]}>
                <StepButton color="inherit" onClick= {() => this.props.setActiveStep(index)}>
                  {label}<br/>({Important_Dates[index]})
                </StepButton>
              </Tooltip>
              {/* <ClickAwayListener onClickAway={handleUpdateToolTip(index, false)}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleUpdateToolTip(index, false)}
                open={this.state.popToolTip[index]}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="test"
                arrow
              >
                <StepButton color="inherit" onClick= {handleTimelineClick(index)}>
                  {label}<br/>({Important_Dates[index]})
                </StepButton>
              </Tooltip>
            </div>
          </ClickAwayListener> */}
            </Step>
          ))}
        </Stepper>
      </Box>
      <Card className="TimelineDesc">
        <Card.Body>
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