import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { useField } from "formik";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { EmailStep } from "./steps";

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
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async () => {
    // const response = await api.userAuth.emailComfirm({ code, email: metaEmail.value });
    // callToast(response);

    // if (response.raw.ok) {
    //   path.push("/login");
    // }
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