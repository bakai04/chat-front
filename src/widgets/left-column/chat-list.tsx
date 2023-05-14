import { Chat } from "@/entities"
import { api } from "@/shared/api/init"
import styled from "@emotion/styled"
import { MenuItem, MenuList } from "@mui/material"
import React from 'react'


const Wrapper = styled(MenuList)`
  overflow-y: overlay;
  padding: 5px;
  height: 100%;
  background-color: #212121;
`

export const ChatList = () => {
  const { data } = api.chats.useGetChats();

  console.log(data)
  return (
    <Wrapper>
      {
        data?.map((elem) => (
          <Chat key={elem.id} data={elem} />
        ))
      }
    </Wrapper>
  )
}
