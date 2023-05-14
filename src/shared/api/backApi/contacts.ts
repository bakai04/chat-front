import useSWR, { SWRResponse, useSWRConfig } from "swr"
import { IContact } from "../../interfaces"
import instance from "./interceptor"

export class Contacts {
  useGetContactInfo = ( body: {chatId: string} ):SWRResponse<IContact> => {
    return useSWR<IContact>(body, () => instance("/GetContactInfo/").post("", body)) 
  }
}