export type MessageSender = "outgoing" | "incoming"
export type MessageStatus = ""
export type MessageType = "imageMessage" | "textMessage"

export interface IMessage {
  type: MessageSender,
  idMessage: string,
  timestamp: number,
  typeMessage: MessageType,
  chatId: string,
  textMessage: string,
  statusMessage: MessageStatus,
  sendByApi: boolean
} 