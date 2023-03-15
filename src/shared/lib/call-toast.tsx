import { toast } from "react-toastify"
import { DefaultResponse } from "../api/back";

const toastOptions = {
  hideProgressBar: false
}

export const callToast = (response:DefaultResponse) => {
  if(response?.status >= 200 && response?.status < 300){ return toast.success(response.message, toastOptions) }
  if(response?.statusCode && response?.statusCode >= 200 && response?.statusCode < 300){ return toast.success(response.message, toastOptions) }
  return toast.error(response.message, toastOptions);
}
