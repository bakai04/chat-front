import styled from "@emotion/styled"
import { css, Paper } from "@mui/material"
import React, { useMemo } from 'react'
import { MessageSenderType } from "../interfaces"

interface IMessageWrapper {
  children: React.ReactNode
  type: MessageSenderType,
}

const Wrapper = styled(Paper) <{ own: boolean }>`
  padding: 10px;
  max-width: 60%;
  width: 100%;
  border-radius: ${({ own }) => own ? '12px 0px 12px 12px' : "0px 12px 12px 12px"};
  background-color: ${({ own }) => own ? "#8774e1" : "#212121"};
`

const MessageWrapper = (props: IMessageWrapper) => {

  return (
    <Wrapper own={(props.type === "outgoing") || (props.type === "outgoingAPIMessageReceived")}>
      {props.children}
    </Wrapper>
  )
}

export default MessageWrapper