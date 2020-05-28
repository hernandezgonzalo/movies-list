import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#3ae7ab",
    secondary: "#4f6df5",
    light: "#fff",
    dark: "#3d3d3d",
    error: "#dc143c"
  },
  fonts: ["Quicksand", "sans-serif"].join(","),
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
