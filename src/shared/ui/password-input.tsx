import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import React, { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`
const Input = styled(TextField)`
  width: 100%;
`

const VisibleButton = styled(IconButton)`
  position: absolute;
  top: 7px;
  bottom: 0px;
  right: 15px;
  height: fit-content;
`

export const PasswordInput = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  }

  return (
    <Wrapper>
      <Input id="password" {...props} type={showPassword ? 'text' : 'password'} />
      <VisibleButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </VisibleButton>
    </Wrapper>
  )
}
