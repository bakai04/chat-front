import { IChat } from "@/shared/interfaces"
import styled from "@emotion/styled"
import { Avatar, Button, Divider, MenuItem, Typography } from "@mui/material"
import Link from "next/link"
import React from 'react'

const Name = styled(Typography)`
  text-decoration: none;
  color: #FFF;
  font-size: 16px;
  margin: 0px;
`

const Message = styled(Typography)`
  text-decoration: none;
  color: #FFF;
  font-size: 14px;
  margin: 0px;
  width: 80%;
`

const ChatInner = styled(Typography)`
  width: 100%;
  margin-left: 10px;
`

const Wrapper = styled(MenuItem)`
  padding: 10px;
  border-radius: 10px;
`

interface ChatProps {
  data: IChat;
}


export const Chat = (props: ChatProps) => {
  return (
    <Link href={`/chat/${props.data.id}`} style={{ textDecoration: "none" }}>
      <Wrapper>
        <Avatar style={{ width: "54px", height: "54px" }} />
        <ChatInner>
          <Name paragraph noWrap>{props.data.name || "+" + props.data.id.replace(/\D/g, "")}</Name>
          <Message paragraph noWrap>. . .</Message>
        </ChatInner>
      </Wrapper>
    </Link>
  )
}
