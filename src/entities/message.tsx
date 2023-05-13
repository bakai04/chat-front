import { IMessage } from "@/shared/interfaces";
import MessageWrapper from "@/shared/ui/message-wrapper";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from 'react'

const Wrapper = styled.div<{ own: boolean }>`
  display: flex;
  justify-content: ${({own}) => own ? "flex-end" : "flex-start"};
`

interface IMessageProps {
  data: IMessage
}

const Message = ({ data }: IMessageProps) => {
  return (
    <Wrapper own={data.type === "incoming"}>
      <MessageWrapper type={data.type}>
        <Typography>{data.textMessage}</Typography>
      </MessageWrapper>
    </Wrapper>
  )
}

export default Message;