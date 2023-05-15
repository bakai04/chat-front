import React, { useRef, useState } from 'react'
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { api } from "@/shared/api";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";

const Form = styled.form`
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
  bottom: 0px;
  padding: 13px 20px;
`

const ContentEditableDiv = styled.div`
  width: 100%;  
  display: block;
  height: 100%;
  min-height: 32px;
  max-height: 300px;
  overflow-y: auto; 
  margin: 0px;
  
  &:focus-visible {
    border: 0px;
    outline: 0px;
  }
`

const SendButton = styled(IconButton)`
`

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 5px;
  align-items: flex-end;
  background-color: #212121;
  border-radius: 1rem;
`

const NewMessage = () => {
  const router = useRouter()
  const { chat: chatId } = router.query;
  const [message, setMessage] = useState("");
  const ref = useRef<HTMLDivElement | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await api.messages.sendMessage({ chatId: chatId as string, message });
    if (ref.current) {
      ref.current.textContent = "";
    }
    setMessage("");
  }

  const handleChange = async (e: React.ChangeEvent<HTMLDivElement>) => {
    setMessage(e.currentTarget.textContent as string);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Content>
        <IconButton size="small">
          <SentimentSatisfiedAltOutlinedIcon fontSize={"medium"} />
        </IconButton>
        <ContentEditableDiv onInput={handleChange} contentEditable ref={ref} placeholder="Message" />
        <IconButton size="small">
          <AttachFileIcon fontSize={"medium"} />
        </IconButton>
      </Content>
      <SendButton size="large" type={"submit"}>
        <SendIcon fontSize={"medium"} />
      </SendButton>
    </Form>
  )
}

export default NewMessage;