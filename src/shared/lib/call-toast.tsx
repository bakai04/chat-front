import { toast } from "react-toastify"

const toastOptions = {
  hideProgressBar: false
}

export const callToast = async (response:any) => {
  const responseData = await response.value();
  if(response.raw.ok){ 
    return toast.success(responseData.message, toastOptions); 
  }
  return toast.error(responseData.message, toastOptions);
}
