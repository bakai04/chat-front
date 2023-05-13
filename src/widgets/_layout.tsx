import styled from "@emotion/styled";
import React from 'react';

interface MainLayout {
  children: React.ReactNode;
}

const Wrapper = styled.div`
`

const Container = styled.div`
  display: flex;
  max-width: 1680px;
  margin: 0 auto;
`
export const MainLayout = (props: MainLayout) => {
  return (
    <Wrapper>
      <Container>
        {props.children}
      </Container>
    </Wrapper>
  )
}
