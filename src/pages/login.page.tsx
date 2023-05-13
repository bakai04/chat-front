import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Logo from "../assets/images/Chat.png";
import { pages } from "./_router";
import * as Yup from "yup";
import { callToast } from "@/shared/lib/call-toast";
import { PasswordInput } from "@/shared/ui";
import { useRouter } from "next/router";

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
  width: 100%;
`

const ButtonLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  width: 100%;
`
export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Обязательное поле").email("Введите правильный адрес"),
  password: Yup.string()
    .required("Обязательное поле")
    .uppercase("Пароль должен содержать за главную букву")
    .min(6, "Пароль должен превышать 6 символов"),
});


const Login = () => {
  const router = useRouter();
  
  const handleSubmit = async (value: any) => {
    // const response = await api.userAuth.login(value);
    // if (response.raw.ok) {
    //   const tokens = await response.value();
    //   localStorage.setItem("token", JSON.stringify(tokens));
    //   router.push("/");
    // } else {
    //   callToast(response);
    // }
  }

  return (
    <Wrapper>
      <Image src={Logo} width={96} height={96} alt={"logo"} />
      <Title variant={"h1"} align={"center"}>Welcome to Scale Chat</Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnChange
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({ handleChange, handleBlur, errors }) => (
          <FormWrapper>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name={"email"}
              type={"email"}
              label={errors.email || "email"}
              error={!!errors.email}
              variant="outlined" />
            <PasswordInput
              onChange={handleChange}
              name={"password"}
              type={"password"}
              label={errors.password || "password"}
              error={!!errors.password}
              variant="outlined" />
            <SendButton size="medium" variant="contained" type="submit">Login</SendButton>
            <ButtonLink href={pages.signUp.href} type={"button"}>
              <SendButton size="medium" variant="contained" >
                Create a new account
              </SendButton>
            </ButtonLink>
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Login;
