import { IChat } from "@/shared/interfaces/chats"
import axios from "axios"
import useSWR, { SWRResponse, useSWRConfig } from "swr"
import instance, { MainApi } from "./interceptor"

export class Chats extends MainApi {
  useGetChats = ():SWRResponse<IChat[]> => {
    return useSWR<IChat[]>("/getContacts/", async () => {
      return await axios.get<IChat[]>(this.getRequestUrl("/getContacts/")).then(resp => resp.data)
    })
  }
}