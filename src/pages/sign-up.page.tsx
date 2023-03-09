import { AuthStepper, EmailStep } from "@/module/auth";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from 'react';
import Logo from "../assets/images/Chat.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  margin-top: 24px;
`

const registrationSteps = [
  {
    component: EmailStep,
    title: "Step 1: Enter your email and password"
  },
  {
    component: EmailStep,
    title: ""
  },
]

const SignUp = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Wrapper>
      <Image src={Logo} width={96} height={96} alt={"logo"} />
      <Title variant={"h1"} align={"center"}>Welcome to Scale Chat</Title>
      {
        registrationSteps.map((step, index) => {
          if(index !== activeStep) return
          const StepComponent = step.component;
          return <StepComponent key={index} nextStep={handleNext} />;
        })
      }
      <AuthStepper activeStep={activeStep} setActiveStep={setActiveStep} />
    </Wrapper>
  )
}

export default SignUp;
