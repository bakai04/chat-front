export const API_URL = process.env.API_URL || "https://api.green-api.com/waInstance";
export class MainApi {
  getRequestUrl(url: string) {
    let tokens;
    try {
      const storedData = localStorage.getItem("authKeys");
      if (storedData) {
        tokens = JSON.parse(storedData);
      } else {
        throw new Error("Данные отсутствуют в localStorage");
      }
    } catch (error) {
      console.error("Ошибка при получении данных из localStorage:", error);
      return "";
    }
  
    return API_URL + tokens.idInstance + url + tokens.apiTokenInstance;
  }
}

