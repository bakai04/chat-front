export class Tokens {
  static getAccessToken(){
    const access_token = localStorage.getItem("access_token");
    return access_token;
  }

  static setAccessToken(access_token:string){
    localStorage.setItem("access_token", JSON.parse(access_token))
  }

  static getRefreshToken(){
    const refresh_token = localStorage.getItem("refresh_token");
    return refresh_token;
  }

  static setRefreshToken(refresh_token:string){
    localStorage.setItem("refresh_token", JSON.parse(refresh_token))
  }
}