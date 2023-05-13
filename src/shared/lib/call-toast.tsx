import { toast } from "react-toastify"
import * as runtime from "@/shared/api";
import { DefaultResponse } from "../api/back";

const toastOptions = {
  hideProgressBar: false
}

export const callToast = async (response:runtime.ApiResponse<DefaultResponse>) => {
  const responseData = await response.value();
  if(response.raw.ok){ 
    return toast.success(responseData.message, toastOptions); 
  }
  return toast.error(responseData.message, toastOptions);
}
