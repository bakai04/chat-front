import { pages } from "@/pages/_router"
import { api } from "@/shared/api"
import { callToast } from "@/shared/lib/call-toast"
import { PasswordInput } from "@/shared/ui"
import styled from "@emotion/styled"
import { Button, TextField, Typography } from "@mui/material"
import { useField, useFormikContext } from "formik"
import { useRouter } from "next/router"
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
const Description = styled(Typography)`
  font-size: 14px;
  text-align: center;
`
interface EmailStep {
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

interface ConfirmEmailStep extends Partial<EmailStep> {

}

export const ConfirmEmailStep = (props: ConfirmEmailStep) => {
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [, metaEmail] = useField("email");
  const path = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    if (!seconds) clearInterval(interval)
    return () => clearInterval(interval);
  }, [seconds]);

  const onSubmit = async () => {
    const response = await api.userAuth.emailComfirm({code, email: metaEmail.value});
    callToast(response);
    path.push(pages.signUp.href);
  }

  return (
    <Wrapper style={{ display: props.isActive ? "flex" : "none" }}>
      <Input
        id="outlined-basic"
        value={code}
        onChange={handleChange}
        label="code"
        variant="outlined" />
      <Button variant="contained" disabled={!(code.length === 6)} onClick={onSubmit}>Confirm</Button>
      <Button variant="contained" disabled={!!seconds}>{seconds ? seconds : "Resend"}</Button>
    </Wrapper >
  )
}