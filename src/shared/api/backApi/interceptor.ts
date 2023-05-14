import axios from 'axios';

export const API_URL = process.env.API_URL;

const axiosInstance = axios.create({
  baseURL: "https://api.green-api.com/waInstance",
});

function instance(url:string) {
  const tokens = JSON.parse(localStorage.getItem("authKeys") || "");
  axiosInstance.interceptors.request.use(
    async (config) => {
      if(config.baseURL && tokens){
        config.baseURL = "https://api.green-api.com/waInstance" + tokens.idInstance + url + tokens.apiTokenInstance
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    async (response) => {
      return response.data;
    }
  );
  return axiosInstance;
}

export default instance;