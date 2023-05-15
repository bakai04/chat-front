import axios from "axios"
import useSWR, { SWRResponse, useSWRConfig } from "swr"
import { IContact, IMessage } from "../../interfaces"
import { MainApi } from "./interceptor"

export interface IMessageResponce {
  idMessage: string
}

export class Messages extends MainApi {
  useGetMessages = ( data: {chatId: string, count:number} ):SWRResponse<IMessage[]> => {
    const body = JSON.stringify(data);
    return useSWR<IMessage[]>(data.chatId + "getChatHistory", async () => {
      return await (await axios.post(this.getRequestUrl("/getChatHistory/"), body)).data
    })
  }

  sendMessage = async ( data: {chatId: string, message: string}):Promise<IMessageResponce> => {
    const body = JSON.stringify(data);
      return await (axios.post(this.getRequestUrl("/sendMessage/"), body))
  }
}