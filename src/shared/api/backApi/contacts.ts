import axios from "axios"
import useSWR, { SWRResponse, useSWRConfig } from "swr"
import { IContact } from "../../interfaces"
import instance, { MainApi } from "./interceptor"

export class Contacts extends MainApi {
  useGetContactInfo = ( body: {chatId: string} ):SWRResponse<IContact> => {
    return useSWR<IContact>(body, async () => {
      return await axios.post(this.getRequestUrl("/GetContactInfo/"), {body})
    })
  }
}