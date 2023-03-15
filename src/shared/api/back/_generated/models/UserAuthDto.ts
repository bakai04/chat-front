export interface UserAuthDto {
  email: string;
  password: string;
  userName?: string;
  image?: string | File
}
