import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: { primary: { main: "#0C0B08" }, secondary: { main: "#DCCA87" } },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#DCCA87",
            color: "#0C0B08",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#F5EFDB",
            color: "#0C0B08",
          },
          "&:hover": {
            backgroundColor: "#F5EFDB",
            color: "#0C0B08",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        // Налаштування стилів для спливаючого вікна
        icon: {
          color: "#DCCA87", // Колір стрілки
        },
        select: {
          "&:focus": {
            // backgroundColor: "#F5EFDB", // Колір фону при фокусі
          },
          "&::placeholder": {
            color: "#DCCA87", // Колір плейсхолдера
          },
        },
      },
    },
  },
  //   components: {
  // MuiButton: {
  //   styleOverrides: {
  //     root: {
  //       borderRadius: "0.5rem",
  //       fontFamily: "Hind Madurai, sans-serif",
  //     },
  //     sizeLarge: {
  //       padding: "18px 22px",
  //     },
  //   },
  // },
  //   },
  //   typography: {
  //     fontFamily: "Hind Madurai, sans-serif",
  //   },
});
