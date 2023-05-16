import Message from "@/entities/message";
import { api } from "@/shared/api";
import { IMessage } from "@/shared/interfaces";
import { useScroll } from "@/shared/lib";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  overflow-x: hidden;
  height: fit-content;
  max-height: calc(100% - 135px);
  gap: 10px;
  padding: 10px 20px 0px 20px;
`
const Loader = styled(CircularProgress)`
  margin: 0 auto;
`

const MessageList = () => {
  const router = useRouter();
  const { chat: chatId } = router.query;
  const [count, setCount] = useState(20);
  const [messageList, setMessageList] = useState<IMessage[]>([]);
  const ref = useScroll(undefined, () => setCount(prev => prev + 10));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const response = await api.messages.getReceiveNotification();
      if (response) {
        api.messages.deleteReceiveNotification(response.receiptId).then(() => {
          if (response && response.body.messageData && response.body.senderData.chatId === chatId) {
            const newMessageData = {
              textMessage: response?.body.messageData?.textMessageData?.textMessage || response?.body.messageData?.extendedTextMessageData.text,
              typeMessage: response?.body?.messageData?.typeMessage,
              type: response?.body.typeWebhook,
              idMessage: response?.body.idMessage,
              chatId: response.body.senderData.chatId,
              timestamp: response.body.timestamp || 0,
              senderName: response.body.senderData.senderName,
            }
            setMessageList(prev => [newMessageData, ...prev])
          }
        });
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setCount(20);
    setMessageList([]);
  }, [chatId])

  useEffect(() => {
    setIsLoading(true)
    const fetchMessagesPage = async () => {
      api.messages.useGetMessages({ chatId: chatId as string, count })
        .then(resp => {
          setMessageList(resp);
          setIsLoading(false);
        })
        .catch(e => { toast.error("Произошла ошибка при загрузке история чата") })
    }
    fetchMessagesPage();
  }, [count, chatId])

  return (
    <Wrapper ref={ref}>
      {
        messageList?.map((elem) => {
          if (elem.textMessage && elem.textMessage?.length !== 0) {
            return (
              <Message key={elem.idMessage} data={elem} />
            )
          }
        })
      }
      {isLoading && <Loader style={{ width: "30px", height: "30px" }} />}
    </Wrapper>
  )
}

export default MessageList;