import { darkTheme, lightTheme } from "@/shared/styles/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppProps } from "next/app"
import React, { useEffect, useState } from 'react';

export const withTheme = (app: (props: AppProps) => React.ReactNode) => {
  const WithTheme = (props: AppProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDarkModeEnabled);
    }, [isDarkMode]);

    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {app(props)                                                                                                                                        }
      </ThemeProvider>
    );
  }

  return WithTheme;
}
