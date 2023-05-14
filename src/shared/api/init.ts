import { Chats, Contacts } from "./backApi";


export class BackApi {
  readonly chats = new Chats();
  readonly contacts = new Contacts();
}


export const api = new BackApi();