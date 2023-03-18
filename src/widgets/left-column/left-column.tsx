import styled from "@emotion/styled";
import React from 'react';
import { ChatList } from "./chat-list";
import { LeftColumnHeader } from "./left-column-header";

const Wrapper = styled.div`
  flex: 0 0 420px;
  height: 100vh;
  max-width: 420px;
`

export const LeftColumn = () => {
  return (
    <Wrapper>
      <LeftColumnHeader/>
      <ChatList/>
    </Wrapper>
  )
}
