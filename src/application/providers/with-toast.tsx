import { AppProps } from "next/app"
import React from 'react';
import { ToastContainer } from "react-toastify";

export const withToast = (app: (props: AppProps) => React.ReactNode) => {
  const WithToast = (props: AppProps) => {
    return (
      <>
        <ToastContainer />
        {app(props)}
      </>
    );
  }

  return WithToast;
}
