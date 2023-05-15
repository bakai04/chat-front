import Message from "@/entities/message";
import { api } from "@/shared/api";
import { useScroll } from "@/shared/lib";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  overflow-x: hidden;
  height: fit-content;
  max-height: calc(100% - 135px);
  gap: 10px;
  padding: 10px 20px 0px 0px;
`

const Loader = styled(CircularProgress)`
  margin: 0 auto;
`

const MessageList = () => {
  const router = useRouter();
  const { chat: chatId } = router.query;
  const [count, setCount] = useState(30);
  const { data, mutate, isLoading } = api.messages.useGetMessages({ chatId: chatId as string, count });
  const ref = useScroll(() => { setCount(prev => prev + 10) });

  useEffect(() => {
    mutate();
  }, [count, chatId, mutate])

  return (
    <Wrapper ref={ref}>
      {
        data?.map((elem) => {
          if (elem.typeMessage === "textMessage") {
            return (
              <Message key={elem.idMessage} data={elem} />
            )
          }
        })
      }
      {isLoading && <Loader color="inherit" style={{ width: "30px" }} />}
    </Wrapper>
  )
}

export default MessageList;