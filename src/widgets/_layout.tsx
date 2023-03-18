import styled from "@emotion/styled";
import React from 'react';

interface MainLayout {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
`
export const MainLayout = (props:MainLayout) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}
