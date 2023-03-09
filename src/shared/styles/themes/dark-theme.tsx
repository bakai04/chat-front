import { createTheme } from "@mui/material";


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#3355FF",
      contrastText: "#FFFFFF",
      light: "#7386e2"
    },

    secondary: {
      main: "#546ef3",
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