import { Chat } from "@/entities"
import { UserAuthDto } from "@/shared/api"
import styled from "@emotion/styled"
import { MenuItem, MenuList } from "@mui/material"
import React from 'react'

const chats: UserAuthDto[] = [
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  },
  {
    email: "JoldoshovBakai",
    userName: "Legenda",
    password: "sad"
  }
]

const Wrapper = styled(MenuList)`
  overflow-y: overlay;
  padding: 0px 5px;
  height: 100%;
`

export const ChatList = () => {
  return (
    <Wrapper>
      {
        chats.map((elem, index)=>(
          <Chat key={index} userData={elem}/>
        ))
      }
    </Wrapper>
  )
}
