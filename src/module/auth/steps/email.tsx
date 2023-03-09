import { api } from "@/shared/api/init"
import styled from "@emotion/styled"
import { Button, TextField } from "@mui/material"
import React from 'react'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 361px;
  margin-top: 64px;
`

const Input = styled(TextField)`
  width: 100%;
`
const SendButton = styled(Button)`
  height: 48px;
  width: 100%;
`
interface EmailStep {
  nextStep: () => void;
}

export const EmailStep = ({ nextStep }: EmailStep) => {

  const handleSubmit = async () => {
    const data = {
      email: "asdasdw@asd.cps",
      password: "123123",
    }

    const resp = await api.userAuth.userAuthRegistration(data);
    console.log(resp);
  }

  return (
    <Form>
      <Input id="outlined-basic" type={"email"} label="email" variant="outlined" />
      <Input id="outlined-basic" type={"password"} label="password" variant="outlined" />
      <SendButton variant="contained" onClick={handleSubmit}>send</SendButton>
    </Form>
  )
}
