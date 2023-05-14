import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Logo from "../assets/images/Chat.png";
import * as Yup from "yup";
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

export const validationSchema = Yup.object().shape({
  idInstance: Yup.string().required("Обязательное поле"),
  apiTokenInstance: Yup.string().required("Обязательное поле")
});

interface ILoginData {
  idInstance: string,
  apiTokenInstance: string
}

const Login = () => {
  const router = useRouter();
  const handleSubmit = async (value: ILoginData) => {
    localStorage.setItem("authKeys", JSON.stringify(value));
    router.push("/");
  }
  return (
    <Wrapper>
      <Image src={Logo} width={96} height={96} alt={"logo"} />
      <Title variant={"h1"} align={"center"}>Welcome to Scale Chat</Title>
      <Formik
        initialValues={{
          idInstance: "",
          apiTokenInstance: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({ handleChange, errors }) => (
          <FormWrapper>
            <Input
              onChange={handleChange}
              name={"idInstance"}
              label={errors.idInstance || "idInstance"}
              error={!!errors.idInstance}
              variant="outlined" />
            <Input
              onChange={handleChange}
              name={"apiTokenInstance"}
              label={errors.apiTokenInstance || "apiTokenInstance"}
              error={!!errors.apiTokenInstance}
              variant="outlined" />
            <SendButton size="medium" variant="contained" type="submit">Login</SendButton>
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Login;
