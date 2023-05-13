import { SerializedStyles } from "@emotion/react"
import styled from "@emotion/styled"
import { css, Paper } from "@mui/material"
import React, { useMemo } from 'react'
import { MessageSender } from "../interfaces"

interface IMessageWrapper {
  children: React.ReactNode
  type: MessageSender,
}

const Wrapper = styled(Paper) <{ borderRadius: string }>`
  padding: 10px;
  max-width: 60%;
  width: 100%;
  border-radius: ${({ borderRadius }) => borderRadius};
`

const MessageWrapper = (props: IMessageWrapper) => {
  const borderRadius = {
    outgoing: '0px 12px 12px 12px',
    incoming: '12px 0px 12px 12px',
  }[props.type]

  return (
    <Wrapper borderRadius={borderRadius} color={"#8774e1"}>
      {props.children}
    </Wrapper>
  )
}

export default MessageWrapper