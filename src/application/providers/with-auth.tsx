import { useTheme } from "@/shared/lib/theme";
import { darkTheme, lightTheme } from "@/shared/styles/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppProps } from "next/app"
import { useRouter } from "next/router";
import React, { useEffect } from 'react';

export const withAuth = (app: (props: AppProps) => React.ReactNode) => {
  const WithAuth = (props: AppProps) => {
    const router = useRouter();
    useEffect(() => {
      const isAuth = localStorage.getItem("authKeys");
      if (!isAuth) router.push("/login");
    }, [router]);
    return (
      <>{app(props)}</>
    );
  }

  return WithAuth;
}
