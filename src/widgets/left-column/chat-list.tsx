import { Chat } from "@/entities"
import { api } from "@/shared/api/init"
import { useScroll } from "@/shared/lib"
import styled from "@emotion/styled"
import { MenuList } from "@mui/material"
import React, { useState } from 'react'


const Wrapper = styled.div`
  overflow-y: overlay;
  padding: 5px;
  height: 100%;
  background-color: #212121;
  padding-bottom: 70px;
`

export const ChatList = () => {
  const [count, setCount] = useState(20);
  const { data } = api.chats.useGetChats();
  const ref = useScroll(undefined, () => setCount(prev => prev + 10))

  return (
    <Wrapper ref={ref}>
      {
        data?.slice(0, count)?.map((elem) => (
          <Chat key={elem.id} data={elem} />
        ))
      }
    </Wrapper>
  )
}
