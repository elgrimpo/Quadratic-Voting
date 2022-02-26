import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FAFF80",
    },
    secondary: {
      main: "#37DDB0",
    },
    background: {
      paper: "#195458",
    },
    text: {
      primary: "#ffffff",
    },
    divider: "rgba(206,206,206,0.12)",
  },
  typography: {
    fontFamily: "Merriweather",
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "white",
          "&.Mui-selected": {
            backgroundColor: "#FAFF80",
            boxShadow: " 0px 1px 0px 2px rgba(0, 0, 0, 0.1)",
            opacity: 1,
            borderRadius: 6,
            color: "black",
            "&:hover": {
              backgroundColor: "#FAFF80",
            },
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        docked: {
          paper: {
            
          },
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7E8300",
    },
    secondary: {
      main: "#A2A800",
    },
    background: {
      paper: "#F8F8F8",
    },
    text: {
      primary: "#383838",
    },
    divider: "rgba(206,206,206,0.12)",
  },
  typography: {
    fontFamily: "Merriweather",
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});
