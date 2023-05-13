import { AuthStepper, registrationSteps} from "@/widgets/auth";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import React from 'react';
import Logo from "../assets/images/Chat.png";
import * as Yup from "yup";
import { callToast } from "@/shared/lib/call-toast";
import { ConfirmEmailStep } from "@/widgets/auth/steps/confirmEmailStep";

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Обязательное поле").max(100, "Название не должно превышать 100 символов"),
  email: Yup.string().required("Обязательное поле").email("Введите правильный адрес"),
  password: Yup.string()
    .required("Обязательное поле")
    .uppercase("Пароль должен содержать за главную букву")
    .min(6, "Пароль должен превышать 6 символов"),
  confirm_password: Yup.string()
    .required("Обязательное поле")
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
});


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

const FormWrapper = styled(Form)`
  width: 100%;
  max-width: 362px;
  display: flex;
  justify-content: center;
`

const SignUp = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleSubmit = async (values:any) => {
    // const response = await api.userAuth.userAuthRegistration({
    //   email: values.email,
    //   userName: values.userName,
    //   password: values.password
    // })
    // if (response.raw.ok) setActiveStep(registrationSteps.length);
    // callToast(response);
  }

  return (
    <Wrapper>
      <Image src={Logo} width={96} height={96} alt={"logo"} />
      <Title variant={"h1"} align={"center"}>Welcome to Scale Chat</Title>
      <Formik
        initialValues={{
          email: "",
          userName: "",
          password: "",
          confirm_password: "",
        }}
        validateOnChange
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({ handleChange, handleBlur }) => (
          <>
            <FormWrapper>
              {
                registrationSteps.map((step, index) => {
                  const StepComponent = step.component;
                  return <StepComponent
                    key={index}
                    setActiveStep={setActiveStep}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    isActive={activeStep === index}

                  />
                })
              }
            </FormWrapper>
            {
              activeStep === registrationSteps.length &&
              <ConfirmEmailStep isActive={activeStep === registrationSteps.length} setActiveStep={setActiveStep} />
            }
            <AuthStepper steps={registrationSteps.length + 1} activeStep={activeStep} setActiveStep={setActiveStep} />
          </>
        )}
      </Formik>
    </Wrapper>
  )
}

export default SignUp;
