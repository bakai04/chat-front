import { IChat } from "@/shared/interfaces/chats"
import useSWR, { SWRResponse, useSWRConfig } from "swr"
import instance from "./interceptor"

export class Chats {
  useGetChats = ():SWRResponse<IChat[]> => {
    return useSWR<IChat[]>("/getContacts/", () => instance("/getContacts/").get(""))
  }
}