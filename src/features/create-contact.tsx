import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Button, Modal, Paper, TextField, Typography } from "@mui/material"
import styled from "@emotion/styled";
import { Form, Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { api } from "@/shared/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const CreatButton = styled(Button)`
  position: absolute;
  z-index: 2;
  bottom: 20px;
  right: 20px;
  height: 65px;
  border-radius: 50%;
`

const ModalContent = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 100%;
  max-width: 350px;
`

const Input = styled(TextField)`
  width: 100%;
  -webkit-appearance: none !important;
  appearance: none !important;
`
const Title = styled(Typography)`
  font-size: 18px;
`

export const validationSchema = Yup.object().shape({
  phoneNumber: Yup.number().required("Обязательное поле"),
});


const CreateContact = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (value: { phoneNumber: number }) => {
    const response = await api.chats.useCheckWhatsapp(value);
    if (response.existsWhatsapp) {
      setOpen(false);
      router.push(`/chat/${value.phoneNumber}@c.us`);
    } else {
      toast.error("Такой номер не существует или у пользователя нет Whatsapp")
    }
  }

  return (
    <>
      <CreatButton variant="contained" onClick={handleOpen}>
        <CreateIcon fontSize={"large"} />
      </CreatButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <ModalContent>
          <Formik
            initialValues={{
              phoneNumber: 0,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values)
            }}
          >
            {({ handleChange, errors }) => (
              <Form>
                <Title paragraph >Номер телефона пользователя</Title>
                <Input
                  onChange={handleChange}
                  name={"phoneNumber"}
                  type="number"
                  label={errors.phoneNumber || "phone-number"}
                  error={!!errors.phoneNumber}
                  variant="outlined" />
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateContact