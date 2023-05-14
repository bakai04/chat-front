import { Chats, Contacts, SendMessages } from "./backApi";


export class BackApi {
  readonly chats = new Chats();
  readonly contacts = new Contacts();
  readonly messages = new SendMessages();
  readonly userData = new Contacts();
}


export const api = new BackApi();