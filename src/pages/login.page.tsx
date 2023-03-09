import { page } from "@/shared/lib";
import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Logo from "../assets/images/Chat.png";
import { pages } from "./_router";


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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 361px;
  width: 100%;
  margin-top: 64px;
`

const Input = styled(TextField)`
  width: 100%;
`

const SendButton = styled(Button)`
  height: 48px;
  width: 100%;
`

const ButtonLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  width: 100%;
`

const Login = () => {
  return (
    <Wrapper>
      <Image src={Logo} width={96} height={96} alt={"logo"} />
      <Title variant={"h1"} align={"center"}>Welcome to Scale Chat</Title>
      <Form>
        <Input id="outlined-basic" type={"email"} label="email" variant="outlined" />
        <Input id="outlined-basic" type={"password"} label="password" variant="outlined" />
        <SendButton variant="contained">Login</SendButton>
        <ButtonLink href={pages.signUp.href}>
          <SendButton variant="contained" >
            Create a new account
          </SendButton>
        </ButtonLink>
      </Form>
    </Wrapper>
  )
}

export default Login;
