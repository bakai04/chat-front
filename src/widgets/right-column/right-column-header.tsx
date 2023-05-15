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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header position="static">
        <Wrapper>
          <Avatar src={data?.avatar} />
          <ChatInner>
            <Name paragraph noWrap>{data ? data.name : chat}</Name>
            {data?.lastSeen &&
              <Message paragraph noWrap>{"sd"}</Message>
            }
          </ChatInner>
        </Wrapper>
      </Header>
    </Box>
  )
} 