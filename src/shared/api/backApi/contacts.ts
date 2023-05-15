import axios from "axios"
import useSWR, { SWRResponse, useSWRConfig } from "swr"
import { IContact } from "../../interfaces"
import { MainApi } from "./interceptor"

export class Contacts extends MainApi {
  useGetContactInfo = ( data: {chatId: string} ):SWRResponse<IContact> => {
    const body = JSON.stringify(data);
    return useSWR<IContact>(body, async () => {
      return await axios.post(this.getRequestUrl("/GetContactInfo/"), { body })
    })
  }
}