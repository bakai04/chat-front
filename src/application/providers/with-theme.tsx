import { useTheme } from "@/shared/lib/theme";
import { darkTheme, lightTheme } from "@/shared/styles/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppProps } from "next/app"
import React from 'react';

export const withTheme = (app: (props: AppProps) => React.ReactNode) => {
  const WithTheme = (props: AppProps) => {
    const [currentTheme] = useTheme();

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {app(props)                                                                                                                                        }
      </ThemeProvider>
    );
  }

  return WithTheme;
}
