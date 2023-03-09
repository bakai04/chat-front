import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#3390EC",
      contrastText: "#FFFFFF",
      light: "#80a6d3"
    },
    secondary: {
      main: "#3390EC",
      contrastText: "#FFFFFF",
    },
   
    error: {
      main: '#E53935',
    },

    grey: {
      400: "#4C4C4C"
    },
  },
  typography: {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(',')
}
})