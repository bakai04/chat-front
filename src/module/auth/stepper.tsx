import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface AuthStepper {
  activeStep: number,
  setActiveStep: (value: number | ((value: number) => number)) => void;
}


export const AuthStepper = ({activeStep, setActiveStep}:AuthStepper) => {

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: "600px", width: "100%", marginTop: "60px" }}
      nextButton={
        <Button size="small" variant={"contained"} onClick={handleNext} disabled={activeStep === 5}>
          Next
          {/* {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )} */}
        </Button>
      }
      backButton={
        <Button size="small" variant={"contained"} onClick={handleBack} disabled={activeStep === 0}>
          {/* {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )} */}
          Back
        </Button>
      }
    />
  );
}