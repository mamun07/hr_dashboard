import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#252525",
      light: "#4a4a4a",
      dark: "#141414",
      text: "#f3f2f2",
    },
    secondary: {
      main: "#ef6c00",
      light: "#fd923d",
      light2: "#fcdcbc",
      text: "#f3f2f2",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    error: {
      main: "#ff1200",
    },
    warning: {
      main: "#ff9800",
      light: "#ffac33",
      text: "rgba(0,0,0,0.87)",
    },
    text: {
      primary: "rgba(37,37,37,0.87)",
    },
    info: {
      main: "#2196f3",
      light: "#4dabf5",
      dark: "#1769aa",
      text: "#ffffff",
    },
    success: {
      main: "#4caf50",
      light: "#6fbf73",
      dark: "#357a38",
      text: "rgba(0,0,0,0.87)",
    },
    divider: "rgba(0,0,0,0.12)",
  },
  shape: {
    borderRadius: 3,
  },
});

export default theme;
