import axios from 'axios';

export const API_URL = process.env.API_URL;
export const API_TOKEN_INSTANCE = process.env.API_TOKEN_INSTANCE;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

function instance() {
    axiosInstance.interceptors.request.use(
      async (config) => {
        if(config.baseURL){
          config.baseURL = config.baseURL + API_TOKEN_INSTANCE
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  return axiosInstance;
}

export default instance;