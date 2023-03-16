export interface UserAuthDto {
  email: string;
  password: string;
  userName?: string;
  image?: string | File
}

export interface IEmailConfirmDto {
  code: string,
  email: string
}

export interface Tokens {
  access_token: string,
  refresh_token: string
}
