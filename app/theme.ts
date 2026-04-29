"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-montserrat)",
  },
  palette: {
    primary: {
      main: "#063b63",
    },
    secondary: {
      main: "#8fd1fe",
    },
    info: {
      main: "#fff",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "var(--color-ink)",
          "&.Mui-checked": {
            color: "var(--color-ink)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--color-ink)",
          color: "var(--color-white)",
          fontFamily: "var(--font-cormorant)",
        },
      },
    },
  },
});

export default theme;
