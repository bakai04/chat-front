import { IMessage } from "@/shared/interfaces";
import MessageWrapper from "@/shared/ui/message-wrapper";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from 'react'

const Wrapper = styled.div<{ own: boolean }>`
  display: flex;
  justify-content: ${({own}) => own ? "flex-end" : "flex-start"};
`
const TextMessage = styled(Typography)`
  word-wrap: break-word;
`

interface IMessageProps {
  data: IMessage
}

const Message = ({ data }: IMessageProps) => {
  return (
    <Wrapper own={(data.type === "outgoing") || (data.type === "outgoingAPIMessageReceived")}>
      <MessageWrapper type={data.type}>
        <TextMessage >{data.textMessage}</TextMessage>
      </MessageWrapper>
    </Wrapper>
  )
}

export default Message;