import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const typographyObj = {
  fontFamily:
    "Roboto, sans-serif, Roboto Mono, monospace, Roboto Condensed, sans-serif",
  h1: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontWeight: "700",
  },
  h2: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  h3: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontWeight: "700",
  },
  h4: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  h5: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  h6: {
    fontWeight: "700",
  },
  subtitle1: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
  },
  subtitle2: {
    fontFamily: "Roboto Condensed, sans-serif",
  },
  body1: {
    fontFamily: "Roboto Condensed, sans-serif",
  },
  body2: {
    fontFamily: "Roboto Mono, monospace",
  },
};

// Create a theme instance.
export const light = createMuiTheme({
  palette: {
    primary: {
      main: "#FF3E55",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: typographyObj,
});

export const dark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2DC2BB",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000",
    },
  },
  typography: typographyObj,
});
