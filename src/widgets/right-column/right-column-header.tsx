import { api } from "@/shared/api";
import styled from "@emotion/styled";
import { Avatar, MenuItem, Typography } from "@mui/material"
import { AppBar, Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Name = styled(Typography)`
  font-size: 16px;
  margin: 0px;
`

const Message = styled(Typography)`
  font-size: 14px;
  margin: 0px;
  width: 80%;
`
const ChatInner = styled(Typography)`
  width: 100%;
`
const Wrapper = styled(MenuItem)`
  height: 64px;
  display: flex;
  gap: 10px;
`
const Header = styled(AppBar)`
  box-shadow: none;
  border-left: 1px solid #181818;
`

export const RightColumnHeader = () => {
  const router = useRouter();
  const { chat } = router.query;
  const { data } = api.contacts.useGetContactInfo({ chatId: chat as string || "" })

  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header position="static">
        <Wrapper>
          <Avatar src={"https://djinni.co/api/imgproxy/-uvoyTuU6XlKfnWog-PBWnel932YXvV-boWERB7GkvY/rs:fit:280:280:True/aHR0cHM6Ly9wLmRq/aW5uaS5jby9iZi82/NzMwYTc2MjI2M2Ix/YzI2Y2NmNjdkZTNl/NzY2OWQvMkQ4QUUx/ODgtMDZGRS00ODM3/LTg4RUYtMDk4NUMy/MTlCNzg4XzQwMC5q/cGc.jpg"} />
          <ChatInner>
            <Name paragraph noWrap>{"legenda"}</Name>
            <Message paragraph noWrap>Online</Message>
          </ChatInner>
        </Wrapper>
      </Header>
    </Box>
  )
} 