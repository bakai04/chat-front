import { PasswordInput } from "@/shared/ui"
import styled from "@emotion/styled"
import { Button, TextField, Typography } from "@mui/material"
import { useField, useFormikContext } from "formik"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

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
interface EmailStep {
  setActiveStep: (value: number | ((value: number) => number)) => void;
  isActive: boolean;
}

export const EmailStep = (props: EmailStep) => {
  const [, metaEmail] = useField("email");
  return (
    <Wrapper style={{ display: props.isActive ? "block" : "none" }}>
      <Input
        type={"email"}
        name={"email"}
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
      <PasswordInput error={!!metaPassword.error} variant="outlined" name={"password"} label={metaPassword.error || "password"} />
      <PasswordInput error={!!metaConfirm.error} variant="outlined" name={"confirm_password"} label={metaConfirm.error || "confirm password"} />
    </Wrapper >
  )
}

const Description = styled(Typography)`
  font-size: 14px;
  text-align: center;
`

const Title = styled(Typography)`
  text-align: center;
  font-size: 20px;
`
export const SendStep = (props: EmailStep) => {
  const { errors } = useFormikContext();

  const handleClick = () => {
    console.log(errors);
  }
  return (
    <Wrapper style={{ display: props.isActive ? "flex" : "none" }}>
      <Description paragraph={true} color={"grey.400"}>Отправляя эту форму вы соглашаетесь с политикой конфиденциальности. Пожалуйсто проверьте на правильность ваших данных</Description>
      <Button type={"submit"} variant={"contained"} onClick={handleClick}>Send</Button>
    </Wrapper >
  )
}

interface ConfirmEmailStep extends EmailStep {

}

export const ConfirmEmailStep = (props: ConfirmEmailStep) => {
  const [code, setCode] = useState("");
 const [seconds, setSeconds] = useState(10);
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    if (!seconds) clearInterval(interval)
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <Wrapper style={{ display: props.isActive ? "flex" : "none" }}>
      <Input
        id="outlined-basic"
        type={"text"}
        value={code}
        onChange={handleChange}
        label="code"
        name={"userName"}
        variant="outlined" />
      <Button variant="contained" disabled={!(code.length === 6)}>Confirm</Button>
      <Button variant="contained" disabled={!!seconds}>{seconds ? seconds : "Resend"}</Button>
    </Wrapper >
  )
}