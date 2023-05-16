import React from 'react';
import styled from "@emotion/styled";
import { RightColumnHeader } from "./right-column-header";
import NewMessage from "@/features/new-message";
import MessageList from "@/features/message-list";
import Image from "next/image";

interface RightColumn {
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  height: 100vh;
  background: url(https://i.pinimg.com/564x/a4/6a/99/a46a995666a320eedb11f71bdc88db36.jpg);
  background-size: cover;
  width: 100%;
`

const RightColumnContent = styled.div`
  height: 100vh;
  width: 100%;
`

export const RightColumn = (props: RightColumn) => {
  return (
    <Wrapper>
      <RightColumnContent>
        {props.children}
      </RightColumnContent>
    </Wrapper>
  )
}
