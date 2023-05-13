import React from 'react';
import styled from "@emotion/styled";
import { RightColumnHeader } from "./right-column-header";
import NewMessage from "@/features/new-message";
import MessageList from "@/features/message-list";
import Image from "next/image";

interface RightColumn {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  height: 100vh;
  background: url("https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png");
`
const RightColumnBackground = styled.div`
  position: absolute;
  z-index: 1;
  background-image: url("https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png");
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
`

export const RightColumn = (props: RightColumn) => {
  return (
    <Wrapper>
      <RightColumnBackground>
        <Image src="https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png" alt="alt" />
      </RightColumnBackground>
      <RightColumnHeader />
      <MessageList />
      <NewMessage />
    </Wrapper>
  )
}
