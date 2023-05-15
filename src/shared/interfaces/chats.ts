export interface IChat {
  archive: boolean,
  id: string,
  notSpam: boolean,
  ephemeralExpiration: number,
  ephemeralSettingTimestamp: number,
  name?: string,
}

export interface IContact {
  avatar: string;
  name: string;
  email: string;
  category: string;
  description: string;
  products: any[];
  chatId: string;
  lastSeen: Date | null;
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  messageExpiration: Date | null;
  muteExpiration: Date | null;
}