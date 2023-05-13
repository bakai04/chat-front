import useSWR, { useSWRConfig } from "swr"
import { IMessage } from "../interfaces"
import instance from "./interceptor"

export class SendMessages {

  useSendMessage = ( body: IMessage ) => {
    return instance().post("/sendMessage/", body).then(resp => resp)
  }
}