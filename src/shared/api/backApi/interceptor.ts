export const API_URL = process.env.API_URL || "https://api.green-api.com/waInstance";
export class MainApi {
  getRequestUrl(url: string) {
    const tokens = JSON.parse(localStorage.getItem("authKeys") || "");
    return API_URL + tokens.idInstance + url + tokens.apiTokenInstance
  }
}

