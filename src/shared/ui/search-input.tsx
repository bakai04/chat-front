import styled from "@emotion/styled";
import React from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Image from "next/image";
import { OutlinedInput , InputBase } from "@mui/material";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
`

const Input = styled(OutlinedInput)`
  color: inherit;
  padding-left: 30px;
  width: 100%;
  border-radius: 22px;
  & .MuiInputBase-input {
    padding: 10px;
  }
`

const SearchWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 10px;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
`

export const SearchInput = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchSharpIcon />
      </SearchWrapper>
      <Input placeholder="Search" />
    </Wrapper>
  )
}
