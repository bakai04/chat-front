import axios from "axios"
import useSWR, { SWRResponse, useSWRConfig } from "swr"
import { IContact } from "../../interfaces"
import { MainApi } from "./interceptor"

export class Contacts extends MainApi {
  getContactInfo = async (body: string) => {
    return await (await axios.post(this.getRequestUrl("/GetContactInfo/"), body)).data
  }

  getUserSetting = async () => {
    return await (await axios.get(this.getRequestUrl("/getSettings/"))).data
  }

  useGetContactInfo = ( data: {chatId: string} ):SWRResponse<IContact> => {
    const body = JSON.stringify(data);
    return useSWR<IContact>(body, async () => {
      return this.getContactInfo(body);
    })
  }
}