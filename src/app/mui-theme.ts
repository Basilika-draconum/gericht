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
          "&::placeholder": {
            color: "#DCCA87",
          },
        },
      },
    },
  },
});
