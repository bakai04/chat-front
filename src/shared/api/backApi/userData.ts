import useSWR, { useSWRConfig } from "swr"
import { IMessage } from "../../interfaces"
import instance from "./interceptor"

export class UserData {

  // useGetUserData = ( body: IMessage ) => {
  //   return instance().post("/sendMessage/", body).then(resp => resp)
  // }
}