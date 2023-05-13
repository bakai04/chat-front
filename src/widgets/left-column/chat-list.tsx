import { Chat } from "@/entities"
import styled from "@emotion/styled"
import { MenuItem, MenuList } from "@mui/material"
import React from 'react'

const chats = [
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
  padding: 5px;
  height: 100%;
  background-color: ${({ theme }) => theme?.palette.background.paper};
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
