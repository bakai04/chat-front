import { useTheme } from "@/shared/lib/theme";
import { AppProps } from "next/app"
import React, { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const withToast = (app: (props: AppProps) => React.ReactNode) => {
  const WithToast = (props: AppProps) => {
    const [currentTheme] = useTheme();
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={currentTheme?.palette.mode} />
        {app(props)}
      </>
    );
  }

  return WithToast;
}
