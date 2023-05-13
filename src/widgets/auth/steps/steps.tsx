import { PasswordInput } from "@/shared/ui"
import styled from "@emotion/styled"
import { Button, TextField, Typography } from "@mui/material"
import { useField } from "formik"
import React  from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 361px;
  margin-top: 30px;
`
const Input = styled(TextField)`
  width: 100%;
`
const Description = styled(Typography)`
  font-size: 14px;
  text-align: center;
`

export interface EmailStep {
  setActiveStep: (value: number | ((value: number) => number)) => void;
  isActive: boolean;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
}

export const EmailStep = (props: EmailStep) => {
  const [, metaEmail, helper] = useField("email");

  return (
    <Wrapper style={{ display: props.isActive ? "block" : "none" }}>
      <Input
        type={"email"}
        name={"email"}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        variant="outlined"
        id="outlined-basic"
        error={!!metaEmail.error}
        label={metaEmail.error || "email"} />
    </Wrapper >
  )
}

export const UserNameStep = (props: EmailStep) => {
  const [, metaUserName] = useField("userName");
  return (
    <Wrapper style={{ display: props.isActive ? "block" : "none" }}>
      <Input
        id="outlined-basic"
        type={"text"}
        name={"userName"}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        variant="outlined"
        error={!!metaUserName.error}
        label={metaUserName.error || "name"} />
    </Wrapper >
  )
}

export const PasswordStep = (props: EmailStep) => {
  const [, metaPassword] = useField("password");
  const [, metaConfirm] = useField("confirm_password");

  return (
    <Wrapper style={{ display: props.isActive ? "flex" : "none" }}>
      <PasswordInput error={!!metaPassword.error} onChange={props.handleChange}
        onBlur={props.handleBlur} variant="outlined" name={"password"} label={metaPassword.error || "password"} />
      <PasswordInput error={!!metaConfirm.error} onChange={props.handleChange}
        onBlur={props.handleBlur} variant="outlined" name={"confirm_password"} label={metaConfirm.error || "confirm password"} />
    </Wrapper >
  )
}

export const SendStep = (props: EmailStep) => {
  return (
    <Wrapper style={{ display: props.isActive ? "flex" : "none" }}>
      <Description paragraph={true} color={"grey.400"}>Отправляя эту форму вы соглашаетесь с политикой конфиденциальности. Пожалуйсто проверьте на правильность ваших данных</Description>
      <Button type={"submit"} variant={"contained"}>Send</Button>
    </Wrapper>
  )
}

export const registrationSteps = [
  {
    component: UserNameStep,
  },
  {
    component: EmailStep,
  },
  {
    component: PasswordStep,
  },
  {
    component: SendStep,
  },
]