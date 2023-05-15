import axios from "axios"
import useSWR, { SWRResponse } from "swr"
import { IContact, IMessage, INotifyMessage } from "../../interfaces"
import { MainApi } from "./interceptor"

export interface IMessageResponce {
  idMessage: string
}

export class Messages extends MainApi {
  useGetMessages = async ( data: {chatId: string, count:number}) =>{
    const body = JSON.stringify(data);
    const messages = await (await axios.post(this.getRequestUrl("/getChatHistory/"), body)).data;
    return messages;
  }

  sendMessage = async ( data: {chatId: string, message: string}):Promise<IMessageResponce> => {
    const body = JSON.stringify(data);
      return await (axios.post(this.getRequestUrl("/sendMessage/"), body))
  }

  getReceiveNotification = async ():Promise<INotifyMessage> => {
    return await (await (axios.get(this.getRequestUrl("/receiveNotification/")))).data
  }

  deleteReceiveNotification = async (id:number):Promise<INotifyMessage> => {
    return await (await (axios.delete(this.getRequestUrl("/DeleteNotification/")+ "/" + id))).data
  }
}