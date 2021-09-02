import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: "30px 0",
      borderRadius: "20px",
      boxShadow:
        "rgb(0 0 0 / 20%) 4px 4px 30px -10px, rgb(0 0 0 / 14%) 3px 4px 4px 0px, rgb(0 0 0 / 12%) 3px 2px 8px 0px",
      [theme.breakpoints.up("sm")]: {
        margin: "40px 0",
      },
    },

    cardContent: {
      width: "100%",
      padding: "50px 0",
      [theme.breakpoints.up("sm")]: {
        padding: "40px 0",
      },
      [theme.breakpoints.up("md")]: {
        padding: "50px 0",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "60px 0",
      },
    },
    avatar: {
      margin: "0 auto",
      borderRadius: "20px",
      width: theme.spacing(20),
      height: theme.spacing(20),

      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
      [theme.breakpoints.up("lg")]: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
      [theme.breakpoints.up("xl")]: {
        width: theme.spacing(25),
        height: theme.spacing(25),
      },
    },
    caption1: {
      marginTop: "25px",
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        marginTop: "10px",
        fontSize: "1.2rem",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "20px",
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "25px",
        fontSize: "2.125rem",
      },
    },
    caption2: {
      letterSpacing: "6px",
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "0.775rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "0.875rem",
      },
    },
  })
);
