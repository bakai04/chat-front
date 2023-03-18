import styled from "@emotion/styled";
import React from 'react';

interface RightColumn {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
`

export const RightColumn = (props: RightColumn) => {
  return (
    <Wrapper>
    </Wrapper>
  )
}
