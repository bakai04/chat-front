import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface AuthStepper {
  activeStep: number,
  setActiveStep: (value: number | ((value: number) => number)) => void;
  steps: number;
}

export const AuthStepper = ({ activeStep, setActiveStep, steps }: AuthStepper) => {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: "600px", width: "100%", marginTop: "60px" }}
      nextButton={
        <Button size="small" type="button" variant={"contained"} onClick={handleNext} disabled={activeStep === steps - 2}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" type="button" variant={"contained"} onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}