export type MessageSenderType = "outgoing" | "incoming"
export type MessageStatus = "pending" | "sent" | "delivered" | "read";
export type MessageType = "imageMessage" | "textMessage" | "videoMessage " | "documentMessage" | "audioMessage"

export interface IMessage {
  type: MessageSenderType,
  idMessage: string,
  timestamp: number,
  typeMessage: MessageType,
  chatId: string,
  textMessage?: string,
  statusMessage: MessageStatus,
  sendByApi: boolean
  senderName?: string
} 