import MessageList from "@/features/message-list"
import NewMessage from "@/features/new-message"
import { LeftColumn, MainLayout, RightColumn } from "@/widgets"
import { RightColumnHeader } from "@/widgets/right-column/right-column-header"
import React from 'react'


const ChatPage = () => {
  return (
    <MainLayout>
      <LeftColumn />
      <RightColumn>
        <RightColumnHeader />
        <MessageList />
        <NewMessage />
      </RightColumn>
    </MainLayout>
  )
}

export default ChatPage