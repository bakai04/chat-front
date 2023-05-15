import { Chats, Contacts, Messages } from "./backApi";


export class BackApi {
  readonly chats = new Chats();
  readonly contacts = new Contacts();
  readonly messages = new Messages();
}


export const api = new BackApi();