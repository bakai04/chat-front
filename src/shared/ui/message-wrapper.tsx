import styled from "@emotion/styled"
import { css, Paper } from "@mui/material"
import React, { useMemo } from 'react'
import { MessageSender } from "../interfaces"

interface IMessageWrapper {
  children: React.ReactNode
  type: MessageSender,
}

const Wrapper = styled(Paper) <{ borderRadius: string, own: boolean }>`
  padding: 10px;
  max-width: 60%;
  width: 100%;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ own }) => own ? "#212121" : "#8774e1" };
`

const MessageWrapper = (props: IMessageWrapper) => {
  const borderRadius = {
    outgoing: '0px 12px 12px 12px',
    incoming: '12px 0px 12px 12px',
  }[props.type]

  return (
    <Wrapper borderRadius={borderRadius} own={props.type === "outgoing"}>
      {props.children}
    </Wrapper>
  )
}

export default MessageWrapper