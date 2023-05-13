import styled from "@emotion/styled"
import { Avatar, Button, Divider, MenuItem, Typography } from "@mui/material"
import React from 'react'

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
  margin-left: 10px;
`
const Line = styled(Divider)`
  margin: 0 !important;
`

const Wrapper = styled(MenuItem)`
  padding: 10px;
  border-radius: 10px;
`

interface ChatProps {
  userData: any;
}


export const Chat = (props: ChatProps) => {
  return (
    <>
      <Wrapper>
        <Avatar style={{
          width: "54px",
          height: "54px",
        }} src={"https://djinni.co/api/imgproxy/-uvoyTuU6XlKfnWog-PBWnel932YXvV-boWERB7GkvY/rs:fit:280:280:True/aHR0cHM6Ly9wLmRq/aW5uaS5jby9iZi82/NzMwYTc2MjI2M2Ix/YzI2Y2NmNjdkZTNl/NzY2OWQvMkQ4QUUx/ODgtMDZGRS00ODM3/LTg4RUYtMDk4NUMy/MTlCNzg4XzQwMC5q/cGc.jpg"} />
        <ChatInner>
          <Name paragraph noWrap>{props.userData.userName}</Name>
          <Message paragraph noWrap>dasdasdasdasd asd as d asd ass das фыв фывфывdasdas dasdasdasd asdasdasd</Message>
        </ChatInner>
      </Wrapper>
    </>
  )
}
