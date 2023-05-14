import { createTheme } from "@mui/material";


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#8774e1",
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
      400: "#202c33"
    },
    background: {
      default: "#181818",
      paper: "#212121"
    }
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