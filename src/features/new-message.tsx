import React from 'react'
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const Footer = styled.footer`
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

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 5px;
  align-items: flex-end;
  background-color: #212121;
  border-radius: 1rem;
`

const NewMessage = () => {
  return (
    <Footer>
      <Form>
        <IconButton size="small">
          <SentimentSatisfiedAltOutlinedIcon fontSize={"medium"} />
        </IconButton>
        <ContentEditableDiv contentEditable placeholder="Message">
        </ContentEditableDiv>
        <IconButton size="small">
          <AttachFileIcon fontSize={"medium"} />
        </IconButton>
      </Form>
      <SendButton size="large">
        <SendIcon fontSize={"medium"} />
      </SendButton>
    </Footer>
  )
}

export default NewMessage;