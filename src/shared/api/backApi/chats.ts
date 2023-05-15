import { IChat } from "@/shared/interfaces/chats"
import axios from "axios"
import useSWR, { SWRResponse, useSWRConfig } from "swr"
import { MainApi } from "./interceptor"

export class Chats extends MainApi {
  useGetChats = ():SWRResponse<IChat[]> => {
    return useSWR<IChat[]>("/getContacts/", async () => {
      return await axios.get<IChat[]>(this.getRequestUrl("/getContacts/")).then(resp => resp.data)
    })
  }

  useCheckWhatsapp = async (data: {phoneNumber: number}):Promise<{existsWhatsapp: boolean}> => {
    const body = JSON.stringify(data);
    return await(axios.post<{existsWhatsapp: boolean}>(this.getRequestUrl("/checkWhatsapp/"), body).then(resp => resp.data));
  }
}