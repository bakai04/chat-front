export const API_URL = process.env.API_URL || "https://api.green-api.com/waInstance";
export class MainApi {
  getRequestUrl(url: string) {
    let tokens;
    const storedData = localStorage.getItem("authKeys");
    if (storedData) {
      tokens = JSON.parse(storedData);
    } else {
      window.location.href = window.location.host + "/login"
      throw new Error("Данные отсутствуют в localStorage");
    }
    return API_URL + tokens.idInstance + url + tokens.apiTokenInstance;
  }
}

