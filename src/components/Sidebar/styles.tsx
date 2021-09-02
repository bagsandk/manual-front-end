import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingRight: "20px",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    title: {
      fontWeight: "bold",
      margin: 0,
      padding: 0,
    },
    underline: {
      display: "block",
      marginBottom: "10px",
      height: "3px",
      width: "40px",
      backgroundColor: "#1c1c1c",
      borderRadius: "100px",
    },
    listItem: {
      borderRadius: "8px",
      marginBottom: "20px",
      color: "#1c1c1c",
      fontWeight: "bold",
      borderLeft: "6px solid transparent",
      "&:hover": {
        borderRadius: "8px",
        borderLeft: "6px solid #2b67b3",
        backgroundColor: "#F6F6F6",
      },
    },
    activeListItem: {
      borderRadius: "8px",
      borderLeft: "6px solid #2b67b3",
      backgroundColor: "#F6F6F6",
      color: "#2B67B3",
    },
  })
);
