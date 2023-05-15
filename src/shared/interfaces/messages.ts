export type MessageSenderType = "outgoing" | "incoming" | "incomingMessageReceived" | "outgoingAPIMessageReceived"
export type MessageStatus = "pending" | "sent" | "delivered" | "read";
export type MessageType = "imageMessage" | "textMessage" | "videoMessage " | "documentMessage" | "audioMessage"

export interface IMessage {
  type: MessageSenderType,
  idMessage: string,
  timestamp?: number,
  typeMessage: MessageType,
  chatId: string,
  textMessage?: string,
  statusMessage?: MessageStatus,
  sendByApi?: boolean
  senderName?: string
} 

export interface INotifyMessage {
  receiptId: number;
  body: {
    typeWebhook: MessageSenderType;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      chatName: string;
      sender: string;
      senderName: string;
    };
    messageData: {
      extendedTextMessageData: {
        description: string 
        jpegThumbnail: string
        previewType:string
        text: string
        title:string
      }
      typeMessage: MessageType;
      textMessageData: {
        textMessage: string;
      };
    };
  }
}


