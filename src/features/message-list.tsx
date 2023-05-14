import Message from "@/entities/message";
import { IMessage } from "@/shared/interfaces";
import styled from "@emotion/styled";
import React from 'react'

const messages: IMessage[] = [
  {
    type: "outgoing",
    idMessage: "E2D2BF2EBC3793BC29C8Ddas9CE60535250",
    timestamp: 1683872290,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Бир жарым айда",
    statusMessage: "",
    sendByApi: false
  },
  {
    type: "outgoing",
    idMessage: "E2D2BF2EBC3793BC29C8D9CasdE60535250",
    timestamp: 1683872290,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Бир жарым айда",
    statusMessage: "",
    sendByApi: false
  },
  {
    type: "outgoing",
    idMessage: "E2D2BF2EBC3793BC29aa8D9CE60535250",
    timestamp: 1683872290,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Бир жарым айда",
    statusMessage: "",
    sendByApi: false
  },
  {
    type: "incoming",
    idMessage: "EE8B9D8A48BC59DBCBa7D7B61F7D061A0",
    timestamp: 1683872273,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Эки Катар",
    statusMessage: "",
    sendByApi: false
  },
  {
    type: "incoming",
    idMessage: "EE8B9D8A48BC59DBCBs7D7B61F7D061A0",
    timestamp: 1683872273,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Эки Катар",
    statusMessage: "",
    sendByApi: false
  },
   {
    type: "incoming",
    idMessage: "EE8B9D8A48BC59DBCB7D7B6d1F7D061A0",
    timestamp: 1683872273,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Эки Катар",
    statusMessage: "",
    sendByApi: false
  },
  {
    type: "incoming",
    idMessage: "EE8B9D8A48BC59DBCB7sD7B61F7D061A0",
    timestamp: 1683872273,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Эки Катар",
    statusMessage: "",
    sendByApi: false
  },
  {
    type: "incoming",
    idMessage: "EE8B9D8A48BC59DBCB7D7B61F7dD061A0",
    timestamp: 1683872273,
    typeMessage: "textMessage",
    chatId: "120363040007103523@g.us",
    textMessage: "Эки Катар",
    statusMessage: "",
    sendByApi: false
  },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 20px;
`

const MessageList = () => {
  return (
    <Wrapper>
      {
        messages.map((elem) => (
          <Message key={elem.idMessage} data={elem}/>
        ))
      }
    </Wrapper>
  )
}

export default MessageList;