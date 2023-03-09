export interface UserAuthDto {
  email: string;
  password: string;
  name?: string;
  status?: string;
  image?: string | File
}